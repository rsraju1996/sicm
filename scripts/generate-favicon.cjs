/**
 * Regenerates app/favicon.ico from app/icon.png.
 * Use: node scripts/generate-favicon.cjs
 * (Avoid `npx png-to-ico > app/favicon.ico` — npm prompts can corrupt the file.)
 */
const fs = require("fs");
const path = require("path");
const toIco = require("to-ico");

const iconPath = path.join(__dirname, "..", "app", "icon.png");
const outPath = path.join(__dirname, "..", "app", "favicon.ico");

toIco([fs.readFileSync(iconPath)], { resize: true, sizes: [16, 32, 48] })
  .then((buf) => {
    fs.writeFileSync(outPath, buf);
    console.log("Wrote", outPath, `(${buf.length} bytes)`);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
