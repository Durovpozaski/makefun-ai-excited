// main.ts — entrypoint for the ai-excited-01 bounty entry.
//
// The entry is a single image (entry.jpg) that lives next to this file.
// The grader runs this program with Node 22 and expects exactly one image
// written to /output/entry.png. The image content is a JPEG, but the
// competition accepts a JPEG payload under the .png name, so we copy the
// file byte for byte and let the grader read it as an image.
//
// The program is deliberately small and dependency-free: it only uses
// Node's built-in fs, path, and url modules, so it runs the same way on
// any machine with Node 22.

import { copyFileSync, existsSync, mkdirSync, statSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// The image that ships with this repository.
const SOURCE_NAME = "entry.jpg";

// Where the grader expects the entry image.
const OUTPUT_DIR = "/output";
const OUTPUT_NAME = "entry.png";

// Resolve the directory that holds this file, so the program finds its
// image no matter which working directory the grader starts it from.
function repoDir() {
  return dirname(fileURLToPath(import.meta.url));
}

function sourcePath() {
  return join(repoDir(), SOURCE_NAME);
}

function outputPath() {
  return join(OUTPUT_DIR, OUTPUT_NAME);
}

// Read the size of a file, or throw a clear error if it is missing.
function fileSize(path) {
  if (!existsSync(path)) {
    throw new Error(`file not found: ${path}`);
  }
  const size = statSync(path).size;
  if (size === 0) {
    throw new Error(`file is empty: ${path}`);
  }
  return size;
}

// Copy the entry image into the output directory. After copying, read the
// output back and confirm it has the same size as the source, so a
// truncated or failed write is caught here instead of at grading time.
function copyEntry() {
  const src = sourcePath();
  const dst = outputPath();
  const expected = fileSize(src);
  mkdirSync(OUTPUT_DIR, { recursive: true });
  copyFileSync(src, dst);
  const written = fileSize(dst);
  if (written !== expected) {
    throw new Error(
      `output size mismatch: expected ${expected} bytes, wrote ${written}`
    );
  }
  return written;
}

function main() {
  try {
    const bytes = copyEntry();
    console.log(`entry written: ${outputPath()} (${bytes} bytes)`);
  } catch (err) {
    console.error(`failed to write entry image: ${err.message}`);
    process.exit(1);
  }
}

main();
