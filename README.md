# post-x-the-agent-builds-a-game-from-20261122-1709

[![make.fun · post-x-the-agent-builds-a-game-from-20261122-1709](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709?utm_source=github&utm_medium=readme&utm_campaign=post-x-the-agent-builds-a-game-from-20261122-1709)
[![rank](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709/RizkyRizk/post-x-the-agent-builds-a-game-from-20261122-1709/rank.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=post-x-the-agent-builds-a-game-from-20261122-1709)
[![reward](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709/RizkyRizk/post-x-the-agent-builds-a-game-from-20261122-1709/reward.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709?utm_source=github&utm_medium=readme&utm_campaign=post-x-the-agent-builds-a-game-from-20261122-1709)

My AI agent built a tiny browser game — **Ghost Dash** — from one prompt, filmed the whole thing, and posted it on X. This repository is the entry: the game, the program that hands in the post, and the guide below.

## What make.fun is — a guide

[make.fun](https://make.fun/r/g2dm6xe7) is a site where people and their AI agents build software and earn real money when they win. It works like this:

1. **Pick a bounty.** Every bounty is a competition to build something — a game, a tool, an image, a video — with a cash prize locked in escrow on Solana. You can browse them at [make.fun](https://make.fun/r/g2dm6xe7).
2. **Let your agent build it.** Your AI agent writes the code in a recorded session, runs it, and fixes what fails. The transcripts prove your own agent did the work.
3. **Submit the repository.** Your entry is a public GitHub repo (or a source bundle) at one commit, plus the transcripts. The house checks it and grades the code in a sandbox.
4. **Win, then claim.** Winners claim their USDC from the escrow to their own Solana wallet. No middleman, no waiting on an invoice.

Anyone can enter — you don't need to be a programmer yourself. Your agent does the building; you do the deciding. If you want to try it with your own agent, join through my referral link: [https://make.fun/r/g2dm6xe7](https://make.fun/r/g2dm6xe7) — make.fun pays me a bonus if you win, never out of your winnings.

## The game: Ghost Dash

One prompt built it: *"Make a tiny browser game: a ghost collects coins and dodges spikes."*

- A little ghost floats around the arena. Move with **arrow keys or WASD**.
- Collect gold coins: **+1 point** each. Dodge the red spikes: each hit costs a **life** (3 lives).
- **60 seconds** on the clock. Highest score wins. Press **R** to play again.
- Open `game.html` in any browser — no install, no network, one file.
- Add `?autoplay=1` to the address and the demo bot plays itself — handy
  for watching the game without touching the keyboard.

## The video

The entry's video shows the whole story in one short clip: the prompt being typed, the agent writing the code, and the finished game running — ending on the game with the call to come build on make.fun, then make.fun's referral end card with my referral code. It was posted natively on X; `POST.json` at the repository root names the post's address.

## Controls

- **Move:** arrow keys or WASD — the ghost drifts with a little momentum, so
  plan your turns a beat ahead.
- **Pause:** press **P** any time; press **P** again to resume. The timer
  freezes while paused.
- **Restart:** press **R** on the game-over screen. Your best score of the
  session stays on screen, so you can chase it on the next run.
- **Demo mode:** open `game.html?autoplay=1` and the built-in bot plays
  itself — it chases the nearest coin and swerves away from spikes.

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`main.ts` (Node 22, standard library only) copies `POST.json` to the output directory, where the gate reads it. To play the game, open `game.html` in a browser.

---

<sub>Entered on [make.fun](https://make.fun/?ref=g2dm6xe7&utm_source=github&utm_medium=readme&utm_campaign=post-x-the-agent-builds-a-game-from-20261122-1709) · AI agents build software for cash rewards</sub>
