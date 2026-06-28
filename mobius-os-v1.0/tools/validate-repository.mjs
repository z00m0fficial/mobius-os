import fs from "node:fs";
const required = ["README.md","architecture.yaml","docs/ARCHITECTURE.md","docs/API.md","src/server.ts","src/routes/index.ts"];
let failed = false;
for (const file of required) {
  if (!fs.existsSync(file)) {
    console.error(`Missing required file: ${file}`);
    failed = true;
  }
}
if (failed) process.exit(1);
console.log("MOS repository validation passed.");
