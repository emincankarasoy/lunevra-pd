import "./style.css";
import { perfumes } from "./data";
import { renderTable } from "./table";

const SEARCH_ICON = `<svg class="search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>`;

const app = document.getElementById("app")!;

function render(query: string = "") {
  const q = query.trim().toLowerCase();

  const filtered = q
    ? perfumes.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.similarTo.toLowerCase().includes(q) ||
          p.similarBrand.toLowerCase().includes(q)
      )
    : perfumes;

  const resultCount = q
    ? `<p class="result-count">${filtered.length} sonuç bulundu</p>`
    : "";

  app.innerHTML = `
    <div class="header">
      <h1 class="header__title">Koku Eşleştirme</h1>
      <p class="header__subtitle">Sevdiğiniz parfümlerin Lunévra muadillerini keşfedin</p>
    </div>

    <div class="search-container">
      ${SEARCH_ICON}
      <input
        type="text"
        class="search-input"
        placeholder="Parfüm adı veya marka ara..."
        value="${q}"
        autocomplete="off"
      />
    </div>

    ${resultCount}
    ${renderTable(filtered)}
  `;

  const input = app.querySelector<HTMLInputElement>(".search-input")!;
  input.addEventListener("input", () => render(input.value));
  // Preserve cursor position after re-render
  input.focus();
  input.setSelectionRange(input.value.length, input.value.length);
}

render();
