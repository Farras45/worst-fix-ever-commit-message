// Worst Fix Ever: Funniest Commit Message
// Writes a single commit message line for a bug fix that made everything worse.
//
// The joke: the classic off-by-one error — the most ordinary bug a tired
// engineer fixes at the end of a bad day — "fixed" so thoroughly that the
// error didn't disappear, it doubled. The repair is the damage: every number
// in the codebase is now wrong by two instead of one.
import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "fix: fixed the off-by-one error; now every number is off by two";

// The gate requires 1-100 characters of non-whitespace UTF-8 text.
// Refuse to write anything that would fail it instead of writing it anyway.
if (entry.length < 1 || entry.length > 100 || entry.trim().length === 0) {
  throw new Error(`Entry must be 1-100 characters, got ${entry.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
console.log(`Wrote ${entry.length} characters to /output/entry.txt`);
