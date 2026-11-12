// Pip — "Make the cutest picture" (cutest-picture-01).
// Copies the bundled image to the output path, byte for byte.
// Deterministic: a plain byte copy, so both runs write identical bytes.
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const src = join(here, "pip.png");
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const dst = join(outDir, "entry.png");
mkdirSync(outDir, { recursive: true });
writeFileSync(dst, readFileSync(src));
