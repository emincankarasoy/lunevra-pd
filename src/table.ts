import type { Perfume, Collection } from "./data";

const ARROW_ICON = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17l9.2-9.2M17 17V7H7"/></svg>`;

const GENDER_ICON: Record<string, string> = {
  erkek: `<svg class="gender-icon erkek" viewBox="0 0 24 24" fill="currentColor"><path d="M9 2a2 2 0 1 1 0 4 2 2 0 0 1 0-4zm3 7H6a1 1 0 0 0-1 1v5h2v8h4v-8h2v-5a1 1 0 0 0-1-1z"/></svg>`,
  kadin: `<svg class="gender-icon kadin" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a2 2 0 1 1 0 4 2 2 0 0 1 0-4zm4 9l-2.5-5h-5L6 11l1.8.9L9 9.5V15H7v2h3v5h2v-5h3v-2h-2V9.5l1.2 2.4L16 11z"/></svg>`,
  unisex: `<svg class="gender-icon unisex" viewBox="0 0 40 24" fill="currentColor"><path d="M9 2a2 2 0 1 1 0 4 2 2 0 0 1 0-4zm3 7H6a1 1 0 0 0-1 1v5h2v8h4v-8h2v-5a1 1 0 0 0-1-1z"/><path d="M28 2a2 2 0 1 1 0 4 2 2 0 0 1 0-4zm4 9l-2.5-5h-5L22 11l1.8.9L25 9.5V15h-2v2h3v5h2v-5h3v-2h-2V9.5l1.2 2.4L32 11z"/></svg>`,
};

function escapeHtml(text: string): string {
  const el = document.createElement("span");
  el.textContent = text;
  return el.innerHTML;
}

function collectionBadge(collection: Collection): string {
  return collection === "privee"
    ? `<span class="col-badge privee">Privée</span>`
    : `<span class="col-badge essentielle">Essentielle</span>`;
}

export function renderTable(perfumes: Perfume[], collection: Collection, page: number, perPage: number): string {
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

  const totalPages = Math.ceil(perfumes.length / perPage);
  const start = (page - 1) * perPage;
  const paged = perfumes.slice(start, start + perPage);

  const rows = paged
    .map((p) => {
      const displayName = collection === "privee" ? (p.priveeName ?? p.essentielleName) : p.essentielleName;
      return `
    <tr>
      <td>
        <div class="perfume-name">${escapeHtml(displayName)}</div>
      </td>
      <td>
        <div class="similar-scent">${escapeHtml(p.similarTo)}</div>
        <div class="brand-name">${escapeHtml(p.similarBrand)}</div>
      </td>
      <td>
        <span class="perfume-tags">${collectionBadge(collection)}${GENDER_ICON[p.gender]}</span>
      </td>
      <td>
        <a class="product-link" href="${escapeHtml(p.productUrl)}" target="_top" rel="noopener">
          İncele ${ARROW_ICON}
        </a>
      </td>
    </tr>`;
    })
    .join("");

  const pagination = totalPages > 1 ? renderPagination(page, totalPages) : "";

  return `
    <div class="table-wrapper">
      <table class="perfume-table">
        <thead>
          <tr>
            <th>Lunévra Parfüm</th>
            <th>Benzer Koku</th>
            <th>Detay</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          ${rows}
        </tbody>
      </table>
    </div>
    ${pagination}`;
}

function renderPagination(current: number, total: number): string {
  const pages: string[] = [];
  for (let i = 1; i <= total; i++) {
    pages.push(
      `<button class="page-btn${i === current ? " active" : ""}" data-page="${i}">${i}</button>`
    );
  }
  return `
    <div class="pagination">
      <button class="page-btn page-prev" data-page="${current - 1}" ${current === 1 ? "disabled" : ""}>‹</button>
      ${pages.join("")}
      <button class="page-btn page-next" data-page="${current + 1}" ${current === total ? "disabled" : ""}>›</button>
    </div>`;
}
