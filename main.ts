// Ship It Friday — polish 3 (final).
// Final decision: "rollback plan is just vibes and hope" wins the
// pairwise review. It pays off in one read, where "a prayer and an
// untested revert" was specific but slower. The agent-voice line
// ("I checked my own code") and the Friday 4:59pm rush stay.
import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "feat: Friday 4:59pm deploy straight to prod — I checked my own code, tests green on my machine, rollback plan is just vibes and hope";

if (entry.trim().length === 0 || entry.length > 159) {
  throw new Error("entry fails the 1-159 character gate");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
console.log(entry);
