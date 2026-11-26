import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "Drain pump blocked by 147 unbroken chopsticks. Water level rising. Proceeding anyway.";

const OUTPUT_FILENAME = "entry.txt";
const MIN_CHARS = 1;
const MAX_CHARS = 200;

/** True when the text holds no line break of either kind. */
function isSingleLine(text: string): boolean {
  return !/[\r\n]/.test(text);
}

/** Returns a description of the first problem found, or null if the text passes. */
function validateEntry(text: string): string | null {
  const length = [...text].length;
  if (length < MIN_CHARS || length > MAX_CHARS) {
    return `entry must be ${MIN_CHARS}-${MAX_CHARS} characters, got ${length}`;
  }
  if (!isSingleLine(text)) {
    return "entry must be exactly one line";
  }
  if (text.trim() === "") {
    return "entry must not be only whitespace";
  }
  return null;
}

/** Writes the validated entry line to entry.txt inside dir. */
function writeEntry(dir: string): void {
  try {
    mkdirSync(dir, { recursive: true });
    writeFileSync(join(dir, OUTPUT_FILENAME), ENTRY, "utf8");
  } catch (err) {
    console.error(`error: ${err instanceof Error ? err.message : String(err)}`);
    process.exit(1);
  }
}

function main(): void {
  const problem = validateEntry(ENTRY);
  if (problem !== null) {
    console.error(`error: ${problem}`);
    process.exit(1);
  }

  const dir = process.env.MAKEFUN_OUTPUT_DIR;
  if (!dir) {
    console.error("error: MAKEFUN_OUTPUT_DIR is not set");
    process.exit(1);
  }

  writeEntry(dir);
}

main();
