import type { Perfume } from "./data";

const ARROW_ICON = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17l9.2-9.2M17 17V7H7"/></svg>`;

function escapeHtml(text: string): string {
  const el = document.createElement("span");
  el.textContent = text;
  return el.innerHTML;
}

export function renderTable(perfumes: Perfume[]): string {
  if (perfumes.length === 0) {
    return `
      <div class="empty-state">
        <svg class="empty-state__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="11" cy="11" r="8"/>
          <path d="m21 21-4.3-4.3"/>
        </svg>
        <p class="empty-state__text">Aramanızla eşleşen parfüm bulunamadı.</p>
      </div>`;
  }

  const rows = perfumes
    .map(
      (p) => `
    <tr>
      <td>
        <div class="perfume-name">${escapeHtml(p.name)}</div>
      </td>
      <td>
        <div class="similar-scent">${escapeHtml(p.similarTo)}</div>
        <div class="brand-name">${escapeHtml(p.similarBrand)}</div>
      </td>
      <td>
        <a class="product-link" href="${escapeHtml(p.productUrl)}" target="_top" rel="noopener">
          İncele ${ARROW_ICON}
        </a>
      </td>
    </tr>`
    )
    .join("");

  return `
    <div class="table-wrapper">
      <table class="perfume-table">
        <thead>
          <tr>
            <th>Lunévra Parfüm</th>
            <th>Benzer Koku</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          ${rows}
        </tbody>
      </table>
    </div>`;
}
