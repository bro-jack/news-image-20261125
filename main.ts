// News-image entry for make.fun news-image-20261125 (Node 22, stdlib only).
// The entry is the illustrated front page in entry.png beside this file;
// the program copies it to /output/entry.png. No network, nothing deleted.
// Run locally: mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
import { copyFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
copyFileSync(new URL("./entry.png", import.meta.url), join(outDir, "entry.png"));
