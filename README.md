# Project page $-$ Geometric Inconsistency Localization in Multi-View Image Sets

[![Code](https://img.shields.io/badge/Code-222222.svg?style=for-the-badge&logo=github)](https://github.com/IDLabMedia/DeformView-DEFECt3R)
[![arXiv](https://img.shields.io/badge/arXiv-2609.31247-b31b1b.svg?style=for-the-badge)](https://arxiv.org/abs/2609.31247)
[![ACM MM DFF 2026](https://img.shields.io/badge/ACM%20MM%20DFF-2026-blue.svg?style=for-the-badge)](https://doi.org/10.1145/3840473.3840513)
[![IDLab-MEDIA](https://img.shields.io/badge/IDLab--MEDIA-0888ef.svg?style=for-the-badge)](https://media.idlab.ugent.be/)

Project page for **DeformView** (dataset) and **DEFECt3R** (method), presented at the 2nd Deepfake Forensics Workshop (DFF) at ACM Multimedia 2026.

## Structure

```
index.html              the whole page
static/css/index.css    styling (colour tokens at the top follow the poster palette)
static/js/index.js      qualitative grid, pose switch, DINO-only peek, sticky offsets, copy button
visuals/                figures and LaTeX sources
  JPEG/                 images used in the qualitative comparison
  poster/               figures cropped from the poster (hero, dataset, method)
```

Plain HTML/CSS/JS, no build step. Bulma, Font Awesome, Academicons and Google Fonts are loaded from CDNs.

## Preview locally

Open `index.html` in a browser, or serve the folder:

```bash
python -m http.server 8000
```

## Notes

- **Qualitative examples:** each row is an empty `<div class="example-row" data-pair="pair_XXXXX_...">` in `index.html`. The JS fills in the five columns from `visuals/JPEG/`, using `<pair>_<suffix>.jpg` (suffixes are listed in `COLUMNS` in `index.js`).
- **Colours:** pair types, views and methods each have a CSS variable in `:root` (e.g. `--positive`, `--view1`, `--defect3r`).
- **Before going public:** check the BibTeX against the ACM Digital Library entry once it is online.
- **Analytics:** need to add analytics to page.

This page is adapted from the [Nerfies](https://nerfies.github.io) project page.
