export type Gender = "erkek" | "kadin" | "unisex";
export type Collection = "essentielle" | "privee";
export type Season = "ilkbahar-yaz" | "sonbahar-kis" | "tum-mevsimler";
export type ScentFamily = "taze" | "odunsu" | "tatli" | "ciceksi" | "baharatli" | "meyveli";

export interface Perfume {
  id: number;
  essentielleName: string;
  priveeName: string | null;
  similarTo: string;
  similarBrand: string;
  gender: Gender;
  season: Season;
  scentFamily: ScentFamily;
  productUrl: string;
  priveeProductUrl: string | null;
  featured?: boolean;
}

export const perfumes: Perfume[] = [
  // ---- ERKEK ----
  { id: 1, essentielleName: "Heritage", priveeName: "Indompté", similarTo: "Sauvage", similarBrand: "Dior", gender: "erkek", season: "tum-mevsimler", scentFamily: "taze", productUrl: "https://lunevra.com.tr/heritage-eau-de-toilette", priveeProductUrl: "https://lunevra.com.tr/indompte-eau-de-toilette" },
  { id: 2, essentielleName: "Devotion", priveeName: "Éclat Absolu", similarTo: "Le Male Elixir", similarBrand: "Jean Paul Gaultier", gender: "erkek", season: "sonbahar-kis", scentFamily: "tatli", productUrl: "https://lunevra.com.tr/devotion-eau-de-parfum", priveeProductUrl: "https://lunevra.com.tr/eclat-absolu-eau-de-parfum" },
  { id: 3, essentielleName: "Alliance", priveeName: "Essence d'Amour", similarTo: "Stronger with You Intensely", similarBrand: "Emporio Armani", gender: "erkek", season: "sonbahar-kis", scentFamily: "tatli", productUrl: "https://lunevra.com.tr/alliance-eau-de-parfum", priveeProductUrl: "https://lunevra.com.tr/essence-d-amour-eau-de-parfum" },
  { id: 4, essentielleName: "Salient", priveeName: "Mystère", similarTo: "Y Eau de Parfum", similarBrand: "Yves Saint Laurent", gender: "erkek", season: "ilkbahar-yaz", scentFamily: "taze", productUrl: "https://lunevra.com.tr/salient-eau-de-parfum", priveeProductUrl: "https://lunevra.com.tr/mystere-eau-de-parfum" },
  { id: 5, essentielleName: "Passion", priveeName: "Nuit d'Éros", similarTo: "Eros", similarBrand: "Versace", gender: "erkek", season: "ilkbahar-yaz", scentFamily: "taze", productUrl: "https://lunevra.com.tr/passion-eau-de-toilette", priveeProductUrl: "https://lunevra.com.tr/nuit-d-eros-eau-de-toilette" },
  { id: 6, essentielleName: "Bourbon", priveeName: "Poussière d'Étoile", similarTo: "Althair", similarBrand: "Parfums de Marly", gender: "erkek", season: "sonbahar-kis", scentFamily: "tatli", productUrl: "https://lunevra.com.tr/bourbon-eau-de-parfum", priveeProductUrl: "https://lunevra.com.tr/poussiere-d-etoile-eau-de-parfum" },
  { id: 7, essentielleName: "Marine", priveeName: "Vent de Liberté", similarTo: "Bleu De Chanel", similarBrand: "Chanel", gender: "erkek", season: "tum-mevsimler", scentFamily: "odunsu", productUrl: "https://lunevra.com.tr/marine-eau-de-toilette", priveeProductUrl: "https://lunevra.com.tr/vent-de-liberte-eau-de-toilette" },
  { id: 8, essentielleName: "Refined", priveeName: "Écho d'Homme", similarTo: "Reflection Man", similarBrand: "Amouage", gender: "erkek", season: "ilkbahar-yaz", scentFamily: "taze", productUrl: "https://lunevra.com.tr/refined-eau-de-parfum", priveeProductUrl: "https://lunevra.com.tr/echo-d-homme-eau-de-parfum" },
  { id: 9, essentielleName: "Zenith", priveeName: "Victorieux", similarTo: "Invictus", similarBrand: "Paco Rabanne", gender: "erkek", season: "ilkbahar-yaz", scentFamily: "taze", productUrl: "https://lunevra.com.tr/zenith-eau-de-toilette", priveeProductUrl: "https://lunevra.com.tr/victorieux-eau-de-toilette" },
  { id: 10, essentielleName: "Celeste", priveeName: "Marque Éternelle", similarTo: "Code Profumo", similarBrand: "Armani", gender: "erkek", season: "sonbahar-kis", scentFamily: "baharatli", productUrl: "https://lunevra.com.tr/celeste-eau-de-parfum", priveeProductUrl: "https://lunevra.com.tr/marque-eternelle-eau-de-parfum" },
  { id: 11, essentielleName: "Paragon", priveeName: "L'Impérial", similarTo: "Aventus", similarBrand: "Creed", gender: "erkek", season: "ilkbahar-yaz", scentFamily: "meyveli", productUrl: "https://lunevra.com.tr/paragon-eau-de-parfum", priveeProductUrl: "https://lunevra.com.tr/l-imperial-eau-de-parfum" },
  { id: 12, essentielleName: "Grande", priveeName: "Monsieur Élégant", similarTo: "Gentleman", similarBrand: "Givenchy", gender: "erkek", season: "tum-mevsimler", scentFamily: "odunsu", productUrl: "https://lunevra.com.tr/grande-eau-de-parfum", priveeProductUrl: "https://lunevra.com.tr/monsieur-elegant-eau-de-parfum" },
  { id: 13, essentielleName: "Piquant", priveeName: "Élixir Vanillé", similarTo: "Tobacco Vanille", similarBrand: "Tom Ford", gender: "erkek", season: "sonbahar-kis", scentFamily: "tatli", productUrl: "https://lunevra.com.tr/piquant-eau-de-parfum", priveeProductUrl: "https://lunevra.com.tr/elixir-vanille-eau-de-parfum" },
  { id: 14, essentielleName: "Magnate", priveeName: null, similarTo: "Imagination", similarBrand: "Louis Vuitton", gender: "erkek", season: "ilkbahar-yaz", scentFamily: "taze", productUrl: "https://lunevra.com.tr/magnate-eau-de-parfum", priveeProductUrl: null, featured: true },
  { id: 15, essentielleName: "Verdant", priveeName: null, similarTo: "Torino 21", similarBrand: "Xerjoff", gender: "erkek", season: "ilkbahar-yaz", scentFamily: "taze", productUrl: "https://lunevra.com.tr/verdant-eau-de-parfum", priveeProductUrl: null },
  { id: 16, essentielleName: "Arcane", priveeName: null, similarTo: "Le Beau Le Parfum", similarBrand: "Jean Paul Gaultier", gender: "erkek", season: "ilkbahar-yaz", scentFamily: "tatli", productUrl: "https://lunevra.com.tr/arcane-eau-de-parfum", priveeProductUrl: null, featured: true },
  { id: 17, essentielleName: "Regnant", priveeName: null, similarTo: "Bois Imperial", similarBrand: "Essential Parfums", gender: "erkek", season: "tum-mevsimler", scentFamily: "odunsu", productUrl: "https://lunevra.com.tr/regnant-eau-de-parfum", priveeProductUrl: null },

  // ---- KADIN ----
  { id: 24, essentielleName: "Sublime", priveeName: null, similarTo: "Erba Pura", similarBrand: "Xerjoff", gender: "kadin", season: "ilkbahar-yaz", scentFamily: "meyveli", productUrl: "https://lunevra.com.tr/sublime-eau-de-parfum", priveeProductUrl: null },
  { id: 30, essentielleName: "Radiant", priveeName: "Charme Absolu", similarTo: "Goddess", similarBrand: "Burberry", gender: "kadin", season: "sonbahar-kis", scentFamily: "tatli", productUrl: "https://lunevra.com.tr/radiant-eau-de-parfum", priveeProductUrl: "https://lunevra.com.tr/charme-absolu-eau-de-parfum" },
  { id: 25, essentielleName: "Candour", priveeName: null, similarTo: "My Way", similarBrand: "Giorgio Armani", gender: "kadin", season: "ilkbahar-yaz", scentFamily: "ciceksi", productUrl: "https://lunevra.com.tr/candour-eau-de-parfum", priveeProductUrl: null, featured: true },
  { id: 31, essentielleName: "Nomadic", priveeName: "Libre Lumière", similarTo: "Libre", similarBrand: "Yves Saint Laurent", gender: "kadin", season: "tum-mevsimler", scentFamily: "ciceksi", productUrl: "https://lunevra.com.tr/nomadic-eau-de-parfum", priveeProductUrl: "https://lunevra.com.tr/libre-lumiere-eau-de-parfum" },
  { id: 26, essentielleName: "Elysian", priveeName: null, similarTo: "Fleur Narcotique", similarBrand: "Ex Nihilo", gender: "kadin", season: "ilkbahar-yaz", scentFamily: "ciceksi", productUrl: "https://lunevra.com.tr/elysian-eau-de-parfum", priveeProductUrl: null, featured: true },
  { id: 32, essentielleName: "Pristine", priveeName: "Muse Intemporelle", similarTo: "Coco Mademoiselle", similarBrand: "Chanel", gender: "kadin", season: "tum-mevsimler", scentFamily: "ciceksi", productUrl: "https://lunevra.com.tr/pristine-eau-de-parfum", priveeProductUrl: "https://lunevra.com.tr/muse-intemporelle-eau-de-parfum" },
  { id: 27, essentielleName: "Amoret", priveeName: null, similarTo: "Bombshell", similarBrand: "Victoria's Secret", gender: "kadin", season: "ilkbahar-yaz", scentFamily: "meyveli", productUrl: "https://lunevra.com.tr/amoret-eau-de-parfum", priveeProductUrl: null },
  { id: 33, essentielleName: "Melliflu", priveeName: "Caramel Blanc", similarTo: "Eclaire", similarBrand: "Lattafa", gender: "kadin", season: "sonbahar-kis", scentFamily: "tatli", productUrl: "https://lunevra.com.tr/melliflu-eau-de-parfum", priveeProductUrl: "https://lunevra.com.tr/caramel-blanc-eau-de-parfum" },
  { id: 28, essentielleName: "Crystal", priveeName: "Cristal Lumineux", similarTo: "Bright Crystal", similarBrand: "Versace", gender: "kadin", season: "ilkbahar-yaz", scentFamily: "ciceksi", productUrl: "https://lunevra.com.tr/crystal-eau-de-toilette", priveeProductUrl: "https://lunevra.com.tr/cristal-lumineux-eau-de-toilette" },
  { id: 34, essentielleName: "Dualism", priveeName: "Douce Demoiselle", similarTo: "Good Girl", similarBrand: "Carolina Herrera", gender: "kadin", season: "sonbahar-kis", scentFamily: "tatli", productUrl: "https://lunevra.com.tr/dualism-eau-de-parfum", priveeProductUrl: "https://lunevra.com.tr/douce-demoiselle-eau-de-parfum" },
  { id: 29, essentielleName: "Veloute", priveeName: "Tendresse Infinie", similarTo: "Eau Tendre", similarBrand: "Chanel", gender: "kadin", season: "ilkbahar-yaz", scentFamily: "ciceksi", productUrl: "https://lunevra.com.tr/veloute-eau-de-toilette", priveeProductUrl: "https://lunevra.com.tr/tendresse-infinie-eau-de-toilette" },
  { id: 35, essentielleName: "Captive", priveeName: "Fleur de Bonheur", similarTo: "La Vie Est Belle", similarBrand: "Lancôme", gender: "kadin", season: "tum-mevsimler", scentFamily: "tatli", productUrl: "https://lunevra.com.tr/captive-eau-de-parfum", priveeProductUrl: "https://lunevra.com.tr/fleur-de-bonheur-eau-de-parfum" },

  // ---- UNISEX ----
  { id: 18, essentielleName: "Halcyon", priveeName: "Nuit Élysée", similarTo: "Naxos", similarBrand: "Xerjoff", gender: "unisex", season: "sonbahar-kis", scentFamily: "tatli", productUrl: "https://lunevra.com.tr/halcyon-eau-de-parfum", priveeProductUrl: "https://lunevra.com.tr/nuit-elysee-eau-de-parfum" },
  { id: 19, essentielleName: "Gourme", priveeName: "Ivresse d'Or", similarTo: "Khamrah", similarBrand: "Lattafa", gender: "unisex", season: "sonbahar-kis", scentFamily: "tatli", productUrl: "https://lunevra.com.tr/gourme-eau-de-parfum", priveeProductUrl: "https://lunevra.com.tr/ivresse-d-or-eau-de-parfum" },
  { id: 20, essentielleName: "Dynasty", priveeName: "Séduction Nocturne", similarTo: "Layton", similarBrand: "Parfums de Marly", gender: "unisex", season: "sonbahar-kis", scentFamily: "baharatli", productUrl: "https://lunevra.com.tr/dynasty-eau-de-parfum", priveeProductUrl: "https://lunevra.com.tr/seduction-nocturne-eau-de-parfum" },
  { id: 21, essentielleName: "Mirage", priveeName: "Magie Noire", similarTo: "Kirke", similarBrand: "Tiziana Terenzi", gender: "unisex", season: "ilkbahar-yaz", scentFamily: "meyveli", productUrl: "https://lunevra.com.tr/mirage-extrait-de-parfum", priveeProductUrl: "https://lunevra.com.tr/magie-noire-extrait-de-parfum" },
  { id: 22, essentielleName: "Ethereal", priveeName: "Améthyste Pourpre", similarTo: "Baccarat Rouge 540", similarBrand: "Maison Francis Kurkdjian", gender: "unisex", season: "tum-mevsimler", scentFamily: "tatli", productUrl: "https://lunevra.com.tr/ethereal-eau-de-parfum", priveeProductUrl: "https://lunevra.com.tr/amethyste-pourpre-eau-de-parfum" },
  { id: 23, essentielleName: "Antique", priveeName: "Atlantide Perdue", similarTo: "Cappadocia", similarBrand: "Memo Paris", gender: "unisex", season: "tum-mevsimler", scentFamily: "odunsu", productUrl: "https://lunevra.com.tr/antique-eau-de-parfum", priveeProductUrl: "https://lunevra.com.tr/atlantide-perdue-eau-de-parfum" },
];

export function filterPerfumes(
  collection: Collection,
  gender: "erkek" | "kadin" | null,
  season: Season | null,
  scentFamily: ScentFamily | null,
): Perfume[] {
  const filtered = perfumes.filter((p) => {
    if (collection === "privee" && !p.priveeName) return false;
    if (gender) {
      const genderMatch = p.gender === gender || p.gender === "unisex";
      if (!genderMatch) return false;
    }
    if (season && p.season !== season && p.season !== "tum-mevsimler") return false;
    if (scentFamily && p.scentFamily !== scentFamily) return false;
    return true;
  });
  return filtered.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
}
