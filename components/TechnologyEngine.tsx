'use client';
import { useState } from 'react';
import { layers } from '@/data/technology';
export function TechnologyEngine() {
  const [selected, setSelected] = useState(layers[0]);
  const [sequence, setSequence] = useState(0);
  return (
    <div className="engine">
      <div className="engine-label">
        <h2 className="micro">MULTI-SOURCE ARCHITECTURE</h2>
        <span>Conceptual architecture · Choose a layer to explore</span>
      </div>
      <div className={`engine-flow${sequence ? ' flow-activated' : ''}`}>
        <div className="layer-stack">
          {layers.map((layer, i) => (
            <button
              key={layer.id}
              className={selected.id === layer.id ? 'layer selected' : 'layer'}
              aria-pressed={selected.id === layer.id}
              aria-controls="layer-detail"
              onClick={() => {
                setSelected(layer);
                setSequence((n) => n + 1);
              }}
            >
              <span className="layer-number">0{i + 1}</span>
              <span>
                <strong>{layer.title}</strong>
                <small>{layer.subtitle}</small>
              </span>
              <span key={sequence} className="layer-connector" aria-hidden="true" />
            </button>
          ))}
        </div>
        <div className="engine-core">
          <div key={sequence} className="engine-orbit" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
          <div>
            <span className="micro">WeRV</span>
            <h3>
              Intelligence
              <br />
              Engine
            </h3>
            <p>Fuse · Validate · Model</p>
          </div>
        </div>
        <div className="engine-output">
          <span className="micro">DECISION LAYERS</span>
          {['Risk index', '6–12M forecast', 'Alerts', 'Evidence packs'].map((s, i) => (
            <div key={`${s}-${sequence}`}>
              <span>0{i + 1}</span>
              {s}
            </div>
          ))}
        </div>
      </div>
      <div id="layer-detail" className="layer-detail" aria-live="polite">
        <div key={`title-${selected.id}`} className="layer-detail-copy">
          <span className="micro">{selected.role}</span>
          <h3>{selected.title}</h3>
          <a href={selected.source} target="_blank" rel="noopener noreferrer" className="text-link">
            Explore the source
          </a>
        </div>
        <div key={`description-${selected.id}`} className="layer-detail-copy">
          <p>{selected.text}</p>
          <p className="layer-limit">
            <strong>Research constraint</strong> {selected.limit}
          </p>
        </div>
      </div>
    </div>
  );
}
