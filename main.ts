// SPDX-License-Identifier: MIT
import { mkdirSync, renameSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

const ENTRY =
  "I finished it, then deleted it while tidying up, like a waiter clearing a plate you were still eating from.";

const outputPath =
  process.argv[2] ?? process.env.ENTRY_OUTPUT ?? "/output/entry.txt";

const outputDir = dirname(outputPath);
mkdirSync(outputDir, { recursive: true });

const tempPath = join(outputDir, ".entry.txt.tmp");
writeFileSync(tempPath, ENTRY, "utf8");
renameSync(tempPath, outputPath);
