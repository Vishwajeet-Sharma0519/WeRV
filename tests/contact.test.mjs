import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import ts from 'typescript';
const compiled = ts.transpileModule(
  readFileSync(new URL('../lib/contact.ts', import.meta.url), 'utf8'),
  { compilerOptions: { module: ts.ModuleKind.ESNext, target: ts.ScriptTarget.ES2022 } },
).outputText;
const { validateContact, cleanContact, emailDraft, submitContact } = await import(
  `data:text/javascript;base64,${Buffer.from(compiled).toString('base64')}`
);
const valid = {
  name: 'Test Person',
  organization: 'Research Group',
  email: 'test@example.com',
  interest: 'Research',
  message: 'A local validation test only.',
};
test('accepts valid input and rejects empty, malformed and oversized inputs', () => {
  assert.deepEqual(validateContact(valid), {});
  assert.equal(
    Object.keys(
      validateContact({
        name: ' ',
        organization: '',
        email: 'bad@',
        interest: 'unknown',
        message: 'short',
      }),
    ).length,
    5,
  );
  assert.ok(validateContact({ ...valid, message: 'x'.repeat(5001) }).message);
  assert.ok(validateContact({ ...valid, name: 'x'.repeat(101) }).name);
});
test('draft encodes user content without creating additional URI parameters', () => {
  const data = {
    ...valid,
    message: 'Symbols & subject=other # ? <script>not executed</script>\nSecond line',
  };
  const url = new URL(emailDraft(data));
  assert.equal(url.protocol, 'mailto:');
  assert.equal(url.pathname, 'ayush.ram.gaur@werv.cloud');
  assert.equal(url.searchParams.size, 2);
  assert.ok(url.searchParams.get('body').endsWith(data.message));
  assert.equal(cleanContact({ ...valid, name: '  Test\u0000 Person  ' }).name, 'Test Person');
});
test('provider adapter reports rejection and propagates network failures', async () => {
  const original = globalThis.fetch;
  try {
    globalThis.fetch = async () => ({ ok: false });
    await assert.rejects(
      submitContact(valid, 'https://provider.example/contact'),
      /did not accept/,
    );
    globalThis.fetch = async () => {
      throw new Error('network unavailable');
    };
    await assert.rejects(
      submitContact(valid, 'https://provider.example/contact'),
      /network unavailable/,
    );
    await assert.rejects(submitContact(valid, 'http://provider.example/contact'), /HTTPS/);
  } finally {
    globalThis.fetch = original;
  }
});
test('provider receives normalized JSON and success requires a successful response', async () => {
  const original = globalThis.fetch;
  let received;
  try {
    globalThis.fetch = async (url, options) => {
      received = { url: String(url), ...options };
      return { ok: true };
    };
    await submitContact({ ...valid, name: '  Test Person  ' }, 'https://provider.example/contact');
    assert.equal(received.method, 'POST');
    assert.equal(JSON.parse(received.body).name, 'Test Person');
    assert.ok(received.signal instanceof AbortSignal);
  } finally {
    globalThis.fetch = original;
  }
});
