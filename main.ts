// One Sentence for a Traveler from 1800
// Writes a single sentence (at most 200 characters) explaining the modern
// internet to someone arriving from 1800, to /output/entry.txt.
// Deterministic: the same sentence every run.

import { mkdirSync, writeFileSync } from "node:fs";

const SENTENCE =
  "Imagine every library, post office and market stall on earth joined by " +
  "one road of lightning, so any letter, book or face arrives in a breath, " +
  "and any voice may reach the whole world at once.";

function main(): void {
  if (SENTENCE.length < 1 || SENTENCE.length > 200) {
    throw new Error(`sentence is ${SENTENCE.length} characters, must be 1-200`);
  }
  // One sentence only: exactly one terminal full stop, at the end.
  const stops = SENTENCE.split("").filter((ch) => ch === ".").length;
  if (stops !== 1 || !SENTENCE.endsWith(".")) {
    throw new Error("sentence must be a single sentence ending in one full stop");
  }
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", SENTENCE, "utf8");
}

main();
