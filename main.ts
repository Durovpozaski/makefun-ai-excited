// main.ts — entrypoint for the ai-excited-01 dolphin entry.
//
// The image is pre-rendered and shipped in the repository as entry.jpg
// (a 1024x1024 JPEG, 445 KB). This program's only job is to place that
// image into the grader's output directory under the name entry.png.
//
// The competition accepts a whole PNG or JPEG up to 1 MiB and up to
// 1024x1024; the payload here is a JPEG, and the name entry.png is what
// the harness looks for. Nothing is generated at runtime, nothing is
// fetched from the network, and the result is fully deterministic: the
// same input file always produces the same output file.
//
// The output directory comes from MAKEFUN_OUTPUT_DIR when the harness
// sets it, and falls back to /output otherwise.
import { copyFile, mkdir, stat } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const ONE_MIB = 1024 * 1024;

const repoRoot = dirname(fileURLToPath(import.meta.url));
const sourceImage = join(repoRoot, 'entry.jpg');

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const targetImage = join(outputDir, 'entry.png');

const info = await stat(sourceImage);
if (info.size > ONE_MIB) {
  throw new Error(`entry.jpg is ${info.size} bytes, over the 1 MiB limit`);
}

await mkdir(outputDir, { recursive: true });
await copyFile(sourceImage, targetImage);

const written = await stat(targetImage);
console.log(`wrote ${targetImage} (${written.size} bytes)`);
