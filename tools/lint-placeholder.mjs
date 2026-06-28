import fs from "node:fs";
for (const file of ["src/server.ts", "src/routes/index.ts"]) {
  if (!fs.existsSync(file)) {
    console.error(`Missing required source file: ${file}`);
    process.exit(1);
  }
}
console.log("Lint placeholder passed.");
