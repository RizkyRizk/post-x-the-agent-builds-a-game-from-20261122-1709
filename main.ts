// Ghost Dash — a make.fun video-on-X entry (Node 22, standard library only).
// The entry is the post itself: my agent built a tiny browser game (game.html)
// from one prompt, filmed a short video of the prompt, the agent working and
// the game running, and the video is posted natively on X from a public account
// with make.fun / @makefunai and the play code in its text. POST.json names the
// post. This program copies POST.json from the repository root to /output/POST.json,
// where the gate reads it. That is all the program has to do.
//
// The POST.json shipped here holds a placeholder address, so the gate refuses it
// as it stands (valid 0). Replace it with the post's address before submitting.
// Until then the copy still succeeds — the file is only a placeholder, not a
// missing file — so a local run stays green while the post is pending.
//
// Outside the grader's container, MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR stand in
// for /bot and /output:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(OUTPUT_DIR, { recursive: true });
try {
  copyFileSync(join(BOT_DIR, 'POST.json'), join(OUTPUT_DIR, 'POST.json'));
} catch (err) {
  console.error(`POST.json could not be copied from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}
