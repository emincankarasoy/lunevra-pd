import "./style.css";
import { filterPerfumes } from "./data";
import type { Collection, Season, ScentFamily } from "./data";
import { renderTable } from "./table";

const SEARCH_ICON = `<svg class="search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>`;

const app = document.getElementById("app")!;
const PER_PAGE = 8;

let activeCollection: Collection = "essentielle";
let activeGender: "erkek" | "kadin" | null = null;
let activeSeason: Season | null = null;
let activeScent: ScentFamily | null = null;
let currentPage = 1;
let currentQuery = "";

const genderOptions: { value: "erkek" | "kadin"; label: string }[] = [
  { value: "erkek", label: "Erkek" },
  { value: "kadin", label: "Kadın" },
];

const seasonOptions: { value: Season; label: string }[] = [
  { value: "ilkbahar-yaz", label: "İlkbahar / Yaz" },
  { value: "sonbahar-kis", label: "Sonbahar / Kış" },
  { value: "tum-mevsimler", label: "Tüm Mevsimler" },
];

const scentOptions: { value: ScentFamily; label: string }[] = [
  { value: "taze", label: "Taze" },
  { value: "odunsu", label: "Odunsu" },
  { value: "tatli", label: "Tatlı" },
  { value: "ciceksi", label: "Çiçeksi" },
  { value: "baharatli", label: "Baharatlı" },
  { value: "meyveli", label: "Meyveli" },
];

function renderFilterGroup(
  label: string,
  options: { value: string; label: string }[],
  active: string | null,
  dataAttr: string,
): string {
  const btns = options
    .map(
      (o) =>
        `<button class="filter-chip${o.value === active ? " active" : ""}" data-${dataAttr}="${o.value}">${o.label}</button>`
    )
    .join("");
  return `<div class="filter-group"><span class="filter-label">${label}</span>${btns}</div>`;
}

function render() {
  const q = currentQuery.trim().toLowerCase();

  let filtered = filterPerfumes(activeCollection, activeGender, activeSeason, activeScent);

  if (q) {
    filtered = filtered.filter(
      (p) =>
        p.essentielleName.toLowerCase().includes(q) ||
        (p.priveeName && p.priveeName.toLowerCase().includes(q)) ||
        p.similarTo.toLowerCase().includes(q) ||
        p.similarBrand.toLowerCase().includes(q)
    );
  }

  const resultCount = q
    ? `<p class="result-count">${filtered.length} sonuç bulundu</p>`
    : "";

  const collectionDesc = activeCollection === "essentielle"
    ? "Sevdiğiniz parfümlerin uygun fiyatlı muadilleri. Günlük kullanım için ideal."
    : "Premium içeriklerle hazırlanan özel koleksiyon. Orijinaline en yakın deneyim.";

  app.innerHTML = `
    <div class="collection-toggle">
      <button class="collection-btn${activeCollection === "essentielle" ? " active" : ""}" data-col="essentielle">Essentielle</button>
      <button class="collection-btn${activeCollection === "privee" ? " active" : ""}" data-col="privee">Privée</button>
    </div>
    <p class="collection-desc">${collectionDesc}</p>

    <div class="filters">
      ${renderFilterGroup("Cinsiyet", genderOptions, activeGender, "gender")}
      ${renderFilterGroup("Mevsim", seasonOptions, activeSeason, "season")}
      ${renderFilterGroup("Koku Ailesi", scentOptions, activeScent, "scent")}
    </div>

    <div class="search-container">
      ${SEARCH_ICON}
      <input
        type="text"
        class="search-input"
        placeholder="Parfüm adı veya marka ara..."
        value="${currentQuery}"
        autocomplete="off"
      />
    </div>

    ${resultCount}
    ${renderTable(filtered, activeCollection, currentPage, PER_PAGE)}
  `;

  // Collection toggle
  app.querySelectorAll<HTMLButtonElement>(".collection-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      activeCollection = btn.dataset.col as Collection;
      currentPage = 1;
      render();
    });
  });

  // Gender filter
  app.querySelectorAll<HTMLButtonElement>("[data-gender]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const val = btn.dataset.gender as "erkek" | "kadin";
      activeGender = activeGender === val ? null : val;
      currentPage = 1;
      render();
    });
  });

  // Season filter
  app.querySelectorAll<HTMLButtonElement>("[data-season]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const val = btn.dataset.season as Season;
      activeSeason = activeSeason === val ? null : val;
      currentPage = 1;
      render();
    });
  });

  // Scent filter
  app.querySelectorAll<HTMLButtonElement>("[data-scent]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const val = btn.dataset.scent as ScentFamily;
      activeScent = activeScent === val ? null : val;
      currentPage = 1;
      render();
    });
  });

  // Search
  const input = app.querySelector<HTMLInputElement>(".search-input")!;
  input.addEventListener("input", () => {
    currentQuery = input.value;
    currentPage = 1;
    render();
    const el = app.querySelector<HTMLInputElement>(".search-input")!;
    el.focus();
    el.setSelectionRange(el.value.length, el.value.length);
  });

  // Pagination
  app.querySelectorAll<HTMLButtonElement>(".page-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const page = Number(btn.dataset.page);
      if (page >= 1) {
        currentPage = page;
        render();
        app.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });
}

render();
