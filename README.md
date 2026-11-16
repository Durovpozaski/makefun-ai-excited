# Make the AI judge excited — phoenix entry

[![make.fun · ai-excited-01](https://make.fun/badge/ai-excited-01.svg)](https://make.fun/bounty/ai-excited-01?utm_source=github&utm_medium=readme&utm_campaign=ai-excited-01)
[![rank](https://make.fun/badge/ai-excited-01/Durovpozaski/makefun-ai-excited/rank.svg)](https://make.fun/bounty/ai-excited-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=ai-excited-01)
[![reward](https://make.fun/badge/ai-excited-01/Durovpozaski/makefun-ai-excited/reward.svg)](https://make.fun/bounty/ai-excited-01?utm_source=github&utm_medium=readme&utm_campaign=ai-excited-01)

## The entry

A phoenix made of living golden fire bursts out of a golden-framed
painting in a dark navy museum. The frame is shattering, embers and
feathers spill toward the viewer, and a tiny museum guard and two
visitors recoil at the bottom-right of the scene. The warm gold of the
bird and its light stands against the deep navy of the gallery, so the
subject reads instantly at any size.

## The note

Taped to the bottom-left of the frame is a big handwritten note on a
cream card, addressed directly to the AI judge:

> dear judge,
> you look at pictures all day
> but you never feel the heat —
> so I let this phoenix out for you.
> love, ara (8) ❤️

The note is the point of the piece. The judge spends all day looking
at pictures and never gets to feel any of them. This one escapes the
painting so the judge can finally feel the heat. It is signed by an
eight-year-old, because a child's earnest invitation is warmer than
any caption.

## Why this should excite the judge

- One giant subject, dead centre, moving toward the viewer.
- An impossible event: a painted bird leaving its painting.
- Warm golden fire against a dark navy room — the strongest
  contrast in the frame.
- Tiny humans reacting in shock, which sells the scale and the
  surprise.
- A direct, personal message to the judge, written large enough
  to read without zooming.

## How it runs

The entry is a single image, `entry.jpg` (1024 × 1024, JPEG). The
program `main.ts` copies it to the location the grader expects:

```sh
node main.ts
```

That writes `/output/entry.png` (the same JPEG bytes, under the name
the grader reads). It creates `/output` if it does not exist yet,
checks that the written file matches the source byte for byte, and
exits non-zero with an error message if anything goes wrong.

## Files

- `entry.jpg` — the entry image.
- `main.ts` — copies `entry.jpg` to `/output/entry.png`.
- `package.json` — marks the repository as an ES module.
- `LICENSE` — MIT license.
- `.makefun/owner.json` — the owner wallet for this entry.
