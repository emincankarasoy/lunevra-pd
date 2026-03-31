import "./style.css";
import { filterPerfumes } from "./data";
import type { Collection } from "./data";
import { renderTable } from "./table";

const SEARCH_ICON = `<svg class="search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>`;

const app = document.getElementById("app")!;

const PER_PAGE = 8;

type Tab = { collection: Collection; gender: "erkek" | "kadin"; label: string };
const tabs: Tab[] = [
  { collection: "essentielle", gender: "erkek", label: "Essentielle Erkek" },
  { collection: "essentielle", gender: "kadin", label: "Essentielle Kadın" },
  { collection: "privee", gender: "erkek", label: "Privée Erkek" },
  { collection: "privee", gender: "kadin", label: "Privée Kadın" },
];

let activeTab = 0;
let currentPage = 1;
let currentQuery = "";

function render() {
  const tab = tabs[activeTab];
  const q = currentQuery.trim().toLowerCase();

  let filtered = filterPerfumes(tab.collection, tab.gender);

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

  const tabButtons = tabs
    .map(
      (t, i) =>
        `<button class="tab-btn${i === activeTab ? " active" : ""}" data-tab="${i}">${t.label}</button>`
    )
    .join("");

  app.innerHTML = `
    <div class="tabs">
      ${tabButtons}
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
    ${renderTable(filtered, tab.collection, currentPage, PER_PAGE)}
  `;

  // Tab events
  app.querySelectorAll<HTMLButtonElement>(".tab-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      activeTab = Number(btn.dataset.tab);
      currentPage = 1;
      render();
    });
  });

  // Search event
  const input = app.querySelector<HTMLInputElement>(".search-input")!;
  input.addEventListener("input", () => {
    currentQuery = input.value;
    currentPage = 1;
    render();
    const el = app.querySelector<HTMLInputElement>(".search-input")!;
    el.focus();
    el.setSelectionRange(el.value.length, el.value.length);
  });

  // Pagination events
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
