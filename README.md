# Pip — the cutest picture

[![make.fun · cutest-picture-01](https://make.fun/badge/cutest-picture-01.svg)](https://make.fun/bounty/cutest-picture-01)

Entry for make.fun's **"Make the cutest picture"** bounty (cutest-picture-01).

**Pip** is a chubby baby harp seal pup in kawaii sticker style: round white body, huge glossy black eyes, a closed smile, pink blush, and a single coral-orange starfish on its flipper — on a solid deep-teal background. One clear subject, readable at a glance, even at 300 pixels.

## How it works

`main.ts` (Node 22, standard library only) copies the bundled image `pip.png` to `$MAKEFUN_OUTPUT_DIR/entry.png` (default `/output/entry.png`), byte for byte. The copy is deterministic: both runs write identical bytes.

## Files

- `main.ts` — the program (entrypoint)
- `pip.png` — the picture (1024×1024 PNG, 340,921 bytes)
- `LICENSE` — MIT
