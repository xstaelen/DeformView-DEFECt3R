# Project page $-$ Geometric Inconsistency Localization in Multi-View Image Sets

[![Project page](https://img.shields.io/badge/Project%20page-3F98BD.svg?style=for-the-badge&logo=data:image/svg%2bxml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48cGF0aCBmaWxsPSJ3aGl0ZSIgZD0iTTM1MiAyNTZjMCAyMi4yLTEuMiA0My42LTMuMyA2NEgxNjMuM2MtMi4yLTIwLjQtMy4zLTQxLjgtMy4zLTY0czEuMi00My42IDMuMy02NEgzNDguN2MyLjIgMjAuNCAzLjMgNDEuOCAzLjMgNjR6bTI4LjgtNjRINTAzLjljNS4zIDIwLjUgOC4xIDQxLjkgOC4xIDY0cy0yLjggNDMuNS04LjEgNjRIMzgwLjhjMi4xLTIwLjYgMy4yLTQyIDMuMi02NHMtMS4xLTQzLjQtMy4yLTY0em0xMTIuNi0zMkgzNzYuN2MtMTAtNjMuOS0yOS44LTExNy40LTU1LjMtMTUxLjZjNzguMyAyMC43IDE0MiA3Ny41IDE3MS45IDE1MS42em0tMTQ5LjEgMEgxNjcuN2M2LjEtMzYuNCAxNS41LTY4LjYgMjctOTQuN2MxMC41LTIzLjYgMjIuMi00MC43IDMzLjUtNTEuNUMyMzkuNCAzLjIgMjQ4LjcgMCAyNTYgMHMxNi42IDMuMiAyNy44IDEzLjhjMTEuMyAxMC44IDIzIDI3LjkgMzMuNSA1MS41YzExLjYgMjYgMjAuOSA1OC4yIDI3IDk0Ljd6bS0yMDkgMEgxOC42QzQ4LjYgODUuOSAxMTIuMiAyOS4xIDE5MC42IDguNEMxNjUuMSA0Mi42IDE0NS4zIDk2LjEgMTM1LjMgMTYwek04LjEgMTkySDEzMS4yYy0yLjEgMjAuNi0zLjIgNDItMy4yIDY0czEuMSA0My40IDMuMiA2NEg4LjFDMi44IDI5OS41IDAgMjc4LjEgMCAyNTZzMi44LTQzLjUgOC4xLTY0ek0xOTQuNyA0NDYuNmMtMTEuNi0yNi0yMC45LTU4LjItMjctOTQuNkgzNDQuM2MtNi4xIDM2LjQtMTUuNSA2OC42LTI3IDk0LjZjLTEwLjUgMjMuNi0yMi4yIDQwLjctMzMuNSA1MS41QzI3Mi42IDUwOC44IDI2My4zIDUxMiAyNTYgNTEycy0xNi42LTMuMi0yNy44LTEzLjhjLTExLjMtMTAuOC0yMy0yNy45LTMzLjUtNTEuNXpNMTM1LjMgMzUyYzEwIDYzLjkgMjkuOCAxMTcuNCA1NS4zIDE1MS42QzExMi4yIDQ4Mi45IDQ4LjYgNDI2LjEgMTguNiAzNTJIMTM1LjN6bTM1OC4xIDBjLTMwIDc0LjEtOTMuNiAxMzAuOS0xNzEuOSAxNTEuNmMyNS41LTM0LjIgNDUuMi04Ny43IDU1LjMtMTUxLjZINDkzLjR6Ii8%2BPC9zdmc%2B)](https://xstaelen.github.io/DeformView-DEFECt3R/)
[![Code](https://img.shields.io/badge/Code-3F98BD.svg?style=for-the-badge&logo=github)](https://github.com/IDLabMedia/DeformView-DEFECt3R)
[![Paper](https://img.shields.io/badge/Paper-DFF%20%40%20ACMMM%202026-037F70.svg?style=for-the-badge)](https://doi.org/10.1145/3840473.3840513)
[![arXiv](https://img.shields.io/badge/arXiv-2609.31247-037F70.svg?style=for-the-badge)](https://arxiv.org/abs/2609.31247)
[![IDLab-MEDIA](https://img.shields.io/badge/IDLab--MEDIA-222222.svg?style=for-the-badge)](https://media.idlab.ugent.be/)

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
