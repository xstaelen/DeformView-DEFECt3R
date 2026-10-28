document.documentElement.classList.add('js');

// Qualitative grid: image paths per column, for both pose settings
const IMG_DIR = './visuals/JPEG/';
const COLUMNS = [
  { cls: 'view1',    alt: 'View 1',       mastr: 'r1_img1',              gt: 'r1_img1' },
  { cls: 'view2',    alt: 'View 2',       mastr: 'r1_img2',              gt: 'r1_img2' },
  { cls: 'gt',       alt: 'Ground truth', mastr: 'r2_gt_mastr',          gt: 'r3_gt_gt' },
  { cls: 'met3r',    alt: 'MEt3R',        mastr: 'r2_metr_mastr',        gt: 'r3_metr_gt' },
  { cls: 'defect3r', alt: 'DEFECt3R',     mastr: 'r2_m1_dino_mastr',     gt: 'r3_m2_dino_gt',
    dinoOnly: 'r4_m3_dino_mastr_only' },
];

document.querySelectorAll('.example-row[data-pair]').forEach(row => {
  const pair = row.dataset.pair;
  row.innerHTML = COLUMNS.map(c => {
    const src = `${IMG_DIR}${pair}_${c.mastr}.jpg`;
    const gt  = `${IMG_DIR}${pair}_${c.gt}.jpg`;
    const peek = c.dinoOnly
      ? `<span class="variant-badge">DINO only</span>` +
        `<div class="card-pills"><span class="peek-pill" data-alt="${IMG_DIR}${pair}_${c.dinoOnly}.jpg" title="Peek DINO only" aria-label="Peek DINO only"><i class="fas fa-eye"></i><span class="peek-text">Peek DINO only</span></span></div>`
      : '';
    return `<div class="comparison-card ${c.cls}"><img class="main-img" src="${src}" data-mastr="${src}" data-gt="${gt}" alt="${c.alt}">${peek}</div>`;
  }).join('');
});

// Pose toggle: swap every image between MASt3R-estimated and ground-truth poses
const qualitative = document.querySelector('.qualitative');
document.querySelectorAll('.pose-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const pose = btn.dataset.pose;
    document.querySelectorAll('.pose-btn').forEach(b => b.classList.toggle('is-active', b === btn));
    if (!qualitative) return;
    qualitative.dataset.pose = pose;
    qualitative.querySelectorAll('.main-img').forEach(img => { img.src = img.dataset[pose]; });
    qualitative.querySelectorAll('.feature-note').forEach(note => { note.textContent = note.dataset[pose]; });
  });
});

// "Peek DINO only" pill: hover to preview the DEFECt3R variant without MASt3R features
document.querySelectorAll('.peek-pill[data-alt]').forEach(pill => {
  const card = pill.closest('.comparison-card');
  const img  = card && card.querySelector('.main-img');
  if (!img) return;

  pill.addEventListener('mouseenter', () => {
    img.src = pill.dataset.alt;
    card.classList.add('peeking');
  });
  pill.addEventListener('mouseleave', () => {
    img.src = img.dataset[qualitative ? qualitative.dataset.pose : 'mastr'];
    card.classList.remove('peeking');
  });
});

// Sticky offsets: the grid header sits below the navbar, the pair-type label below the grid header
const nav = document.querySelector('.top-nav');
const stickyHead = document.querySelector('.sticky-head');
function updateNavLayout() {
  if (!nav) return;
  // center brand and links once the links no longer fit next to the brand
  const brand = nav.querySelector('.navbar-brand');
  const menu  = nav.querySelector('.navbar-menu');
  nav.classList.remove('is-wrapped');
  if (brand && menu && menu.offsetTop >= brand.offsetTop + brand.offsetHeight - 1) nav.classList.add('is-wrapped');
}
function updateStickyOffsets() {
  updateNavLayout();
  if (nav) document.documentElement.style.setProperty('--nav-h', `${nav.offsetHeight}px`);
  if (qualitative && stickyHead) qualitative.style.setProperty('--head-h', `${stickyHead.offsetHeight}px`);
}
updateStickyOffsets();
window.addEventListener('resize', updateStickyOffsets);
window.addEventListener('load', updateStickyOffsets);

// Pair-type labels: click to align that group just below the sticky header
document.querySelectorAll('.pair-group-head .model-divider').forEach(label => {
  const group = label.closest('.pair-group');
  label.setAttribute('role', 'button');
  label.setAttribute('tabindex', '0');
  const go = () => group.scrollIntoView({ behavior: 'smooth', block: 'start' });
  label.addEventListener('click', go);
  label.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); go(); }
  });
});

// "Citation" in the navbar: show the takeaways together with the citation
const citationLink = document.querySelector('.top-nav a[href="#citation"]');
const takeaways = document.querySelector('.takeaways');
if (citationLink && takeaways) {
  citationLink.addEventListener('click', e => {
    e.preventDefault();
    takeaways.scrollIntoView({ behavior: 'smooth', block: 'start' });
    history.replaceState(null, '', '#citation');
  });
}

// Citation copy button
const copyBtn = document.querySelector('.copy-btn');
if (copyBtn) {
  copyBtn.addEventListener('click', async () => {
    const text = document.querySelector('.bibtex-block code').textContent;
    try {
      await navigator.clipboard.writeText(text);
    } catch (e) {
      // fallback for browsers that block the clipboard API (e.g. some file:// pages)
      const area = document.createElement('textarea');
      area.value = text;
      document.body.appendChild(area);
      area.select();
      document.execCommand('copy');
      area.remove();
    }
    copyBtn.classList.add('copied');
    copyBtn.innerHTML = '<i class="fas fa-check"></i>';
    setTimeout(() => {
      copyBtn.classList.remove('copied');
      copyBtn.innerHTML = '<i class="far fa-copy"></i>';
    }, 1600);
  });
}
