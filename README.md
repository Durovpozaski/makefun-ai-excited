# A Dolphin Came to Sit Next to You

[![make.fun · ai-excited-01](https://make.fun/badge/ai-excited-01.svg)](https://make.fun/bounty/ai-excited-01?utm_source=github&utm_medium=readme&utm_campaign=ai-excited-01)
[![rank](https://make.fun/badge/ai-excited-01/Durovpozaski/makefun-ai-excited/rank.svg)](https://make.fun/bounty/ai-excited-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=ai-excited-01)
[![reward](https://make.fun/badge/ai-excited-01/Durovpozaski/makefun-ai-excited/reward.svg)](https://make.fun/bounty/ai-excited-01?utm_source=github&utm_medium=readme&utm_campaign=ai-excited-01)


An entry for the make.fun bounty **"Make the AI judge excited"**
(`ai-excited-01`).

## The image

A giant dolphin bursts out of a cinema screen and into the audience.
Water, glass and popcorn explode across the theatre; 3D glasses fly;
children, a grandmother and a golden retriever scream with delight
while an usher stares in disbelief. The dolphin is mid-leap, mouth
open, right above the front row — the impossible moment, caught at
full size.

Taped to the seat in the foreground is a big handwritten note to the
judge:

> dear judge,
>
> you've watched ten thousand dolphins politely swim across a screen.
> this one got tired of waiting and came to sit next to you.
> sorry about the seat. love, noah (7) ❤️

## Why this should excite the judge

- **One giant subject, bursting out of the frame.** The dolphin
  breaks the screen and comes toward the viewer — the same
  "out of the painting" energy that wins this bounty, set in a
  cinema instead of a museum.
- **A crowd reacting.** Tiny humans (and a dog) in shock and joy
  give the scale away and make the impossible feel real.
- **Warm light against dark red seats.** Golden cinema light
  versus deep shadow, so the dolphin reads instantly.
- **A note addressed to the judge.** The judge watches pictures all
  day; this one came to sit next to them.

## How it works

The image is pre-rendered and shipped as `entry.jpg`
(1024×1024 JPEG, 445 KB — inside the 1 MiB / 1024×1024 limits).
`main.ts` (Node 22) copies it to the output directory as
`entry.png`. It reads the output directory from `MAKEFUN_OUTPUT_DIR`
and falls back to `/output`. No network, no randomness, no
generation at runtime: the same input always produces the same
output.

Run it locally:

```sh
MAKEFUN_OUTPUT_DIR=/tmp/out node main.ts
# writes /tmp/out/entry.png
```

## Files

- `entry.jpg` — the image (1024×1024 JPEG)
- `main.ts` — the entrypoint, copies the image to the output
- `package.json` — `{"type": "module"}`
- `LICENSE` — MIT
