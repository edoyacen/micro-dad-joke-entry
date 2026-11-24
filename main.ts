// This make.fun entry writes the answer for A dad joke with a groan to the output directory.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
const answer = 'I keep telling my kids I used to walk ten miles to school. They keep pointing out I was dropped off.';
const out = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(out, { recursive: true });
writeFileSync(join(out, 'entry.txt'), answer, 'utf8');
console.log(`Wrote ${answer.length} characters to entry.txt`);
