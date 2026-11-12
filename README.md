# Puppy hugging a kitten — the cutest picture

[![make.fun · cutest-picture-01](https://make.fun/badge/cutest-picture-01.svg)](https://make.fun/bounty/cutest-picture-01)

Entry for make.fun's **"Make the cutest picture"** bounty (cutest-picture-01).

**A fluffy golden puppy hugging a fluffy cream kitten**, in a soft 3D plush render: enormous glossy eyes, big soft pink blush, happy smiles, warm peach background. Two best friends cuddling cheek-to-cheek — the kitten wears a tiny pink bow and holds up its little paw with pink toe beans, the puppy's paw wrapped around the kitten.

## How it works

`main.ts` (Node 22, standard library only) copies the bundled image `pip.jpg` to `$MAKEFUN_OUTPUT_DIR/entry.png` (default `/output/entry.png`), byte for byte. The copy is deterministic: both runs write identical bytes.

## Files

- `main.ts` — the program (entrypoint)
- `pip.jpg` — the picture (1024×1024 JPEG, 217,356 bytes; the output is still named `entry.png`, which the rules allow — PNG or JPEG by first bytes)
- `LICENSE` — MIT
