# Team photo slots

Add the original, approved portraits here. Suggested filenames:

- vishwajeet-sharma.webp
- ayush-ram-gaur.webp
- tanay-katyayan.webp

Then set each member's `photo` in `data/team.ts` to `/assets/team/<filename>`.
Use an image at least 600 pixels wide, ideally a portrait crop. The component reserves
the image dimensions and applies the same reveal, zoom and LinkedIn overlay to every
member. `null` renders the existing initials placeholder. No generated or stock portraits
are used. The supplied LinkedIn URLs remain the source links for the actual people.
