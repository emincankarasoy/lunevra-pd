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
}

export const perfumes: Perfume[] = [
  // ---- ERKEK ----
  { id: 1, essentielleName: "Heritage", priveeName: "Indompté", similarTo: "Sauvage", similarBrand: "Dior", gender: "erkek", season: "tum-mevsimler", scentFamily: "taze", productUrl: "#" },
  { id: 2, essentielleName: "Devotion", priveeName: "Éclat Absolu", similarTo: "Le Male Elixir", similarBrand: "Jean Paul Gaultier", gender: "erkek", season: "sonbahar-kis", scentFamily: "tatli", productUrl: "#" },
  { id: 3, essentielleName: "Alliance", priveeName: "Essence d'Amour", similarTo: "Stronger with You Intensely", similarBrand: "Emporio Armani", gender: "erkek", season: "sonbahar-kis", scentFamily: "tatli", productUrl: "#" },
  { id: 4, essentielleName: "Salient", priveeName: "Mystère", similarTo: "Y Eau de Parfum", similarBrand: "Yves Saint Laurent", gender: "erkek", season: "ilkbahar-yaz", scentFamily: "taze", productUrl: "#" },
  { id: 5, essentielleName: "Passion", priveeName: "Nuit d'Éros", similarTo: "Eros", similarBrand: "Versace", gender: "erkek", season: "ilkbahar-yaz", scentFamily: "taze", productUrl: "#" },
  { id: 6, essentielleName: "Bourbon", priveeName: "Poussière d'Étoile", similarTo: "Althair", similarBrand: "Parfums de Marly", gender: "erkek", season: "sonbahar-kis", scentFamily: "tatli", productUrl: "#" },
  { id: 7, essentielleName: "Marine", priveeName: "Vent de Liberté", similarTo: "Bleu De Chanel", similarBrand: "Chanel", gender: "erkek", season: "tum-mevsimler", scentFamily: "odunsu", productUrl: "#" },
  { id: 8, essentielleName: "Refined", priveeName: "Écho d'Homme", similarTo: "Reflection Man", similarBrand: "Amouage", gender: "erkek", season: "ilkbahar-yaz", scentFamily: "taze", productUrl: "#" },
  { id: 9, essentielleName: "Zenith", priveeName: "Victorieux", similarTo: "Invictus", similarBrand: "Paco Rabanne", gender: "erkek", season: "ilkbahar-yaz", scentFamily: "taze", productUrl: "#" },
  { id: 10, essentielleName: "Celeste", priveeName: "Marque Éternelle", similarTo: "Code Profumo", similarBrand: "Armani", gender: "erkek", season: "sonbahar-kis", scentFamily: "baharatli", productUrl: "#" },
  { id: 11, essentielleName: "Paragon", priveeName: "L'Impérial", similarTo: "Aventus", similarBrand: "Creed", gender: "erkek", season: "ilkbahar-yaz", scentFamily: "meyveli", productUrl: "#" },
  { id: 12, essentielleName: "Grande", priveeName: "Monsieur Élégant", similarTo: "Gentleman", similarBrand: "Givenchy", gender: "erkek", season: "tum-mevsimler", scentFamily: "odunsu", productUrl: "#" },
  { id: 13, essentielleName: "Piquant", priveeName: "Élixir Vanillé", similarTo: "Tobacco Vanille", similarBrand: "Tom Ford", gender: "erkek", season: "sonbahar-kis", scentFamily: "tatli", productUrl: "#" },
  { id: 14, essentielleName: "Magnate", priveeName: null, similarTo: "Imagination", similarBrand: "Louis Vuitton", gender: "erkek", season: "ilkbahar-yaz", scentFamily: "taze", productUrl: "#" },
  { id: 15, essentielleName: "Verdant", priveeName: null, similarTo: "Torino 21", similarBrand: "Xerjoff", gender: "erkek", season: "ilkbahar-yaz", scentFamily: "taze", productUrl: "#" },
  { id: 16, essentielleName: "Arcane", priveeName: null, similarTo: "Le Beau Le Parfum", similarBrand: "Jean Paul Gaultier", gender: "erkek", season: "ilkbahar-yaz", scentFamily: "tatli", productUrl: "#" },
  { id: 17, essentielleName: "Regnant", priveeName: null, similarTo: "Bois Imperial", similarBrand: "Essential Parfums", gender: "erkek", season: "tum-mevsimler", scentFamily: "odunsu", productUrl: "#" },

  // ---- KADIN ----
  { id: 24, essentielleName: "Sublime", priveeName: null, similarTo: "Erba Pura", similarBrand: "Xerjoff", gender: "kadin", season: "ilkbahar-yaz", scentFamily: "meyveli", productUrl: "#" },
  { id: 30, essentielleName: "Radiant", priveeName: "Charme Absolu", similarTo: "Goddess", similarBrand: "Burberry", gender: "kadin", season: "sonbahar-kis", scentFamily: "tatli", productUrl: "#" },
  { id: 25, essentielleName: "Candour", priveeName: null, similarTo: "My Way", similarBrand: "Giorgio Armani", gender: "kadin", season: "ilkbahar-yaz", scentFamily: "ciceksi", productUrl: "#" },
  { id: 31, essentielleName: "Nomadic", priveeName: "Libre Lumière", similarTo: "Libre", similarBrand: "Yves Saint Laurent", gender: "kadin", season: "tum-mevsimler", scentFamily: "ciceksi", productUrl: "#" },
  { id: 26, essentielleName: "Elysian", priveeName: null, similarTo: "Fleur Narcotique", similarBrand: "Ex Nihilo", gender: "kadin", season: "ilkbahar-yaz", scentFamily: "ciceksi", productUrl: "#" },
  { id: 32, essentielleName: "Pristine", priveeName: "Muse Intemporelle", similarTo: "Coco Mademoiselle", similarBrand: "Chanel", gender: "kadin", season: "tum-mevsimler", scentFamily: "ciceksi", productUrl: "#" },
  { id: 27, essentielleName: "Amoret", priveeName: null, similarTo: "Bombshell", similarBrand: "Victoria's Secret", gender: "kadin", season: "ilkbahar-yaz", scentFamily: "meyveli", productUrl: "#" },
  { id: 33, essentielleName: "Melliflu", priveeName: "Caramel Blanc", similarTo: "Eclaire", similarBrand: "Lattafa", gender: "kadin", season: "sonbahar-kis", scentFamily: "tatli", productUrl: "#" },
  { id: 28, essentielleName: "Crystal", priveeName: null, similarTo: "Bright Crystal", similarBrand: "Versace", gender: "kadin", season: "ilkbahar-yaz", scentFamily: "ciceksi", productUrl: "#" },
  { id: 34, essentielleName: "Dualism", priveeName: "Douce Demoiselle", similarTo: "Good Girl", similarBrand: "Carolina Herrera", gender: "kadin", season: "sonbahar-kis", scentFamily: "tatli", productUrl: "#" },
  { id: 29, essentielleName: "Veloute", priveeName: null, similarTo: "Eau Tendre", similarBrand: "Chanel", gender: "kadin", season: "ilkbahar-yaz", scentFamily: "ciceksi", productUrl: "#" },
  { id: 35, essentielleName: "Captive", priveeName: "Fleur de Bonheur", similarTo: "La Vie Est Belle", similarBrand: "Lancôme", gender: "kadin", season: "tum-mevsimler", scentFamily: "tatli", productUrl: "#" },

  // ---- UNISEX ----
  { id: 18, essentielleName: "Halcyon", priveeName: "Nuit Élysée", similarTo: "Naxos", similarBrand: "Xerjoff", gender: "unisex", season: "sonbahar-kis", scentFamily: "tatli", productUrl: "#" },
  { id: 19, essentielleName: "Gourme", priveeName: "Ivresse d'Or", similarTo: "Khamrah", similarBrand: "Lattafa", gender: "unisex", season: "sonbahar-kis", scentFamily: "tatli", productUrl: "#" },
  { id: 20, essentielleName: "Dynasty", priveeName: "Séduction Nocturne", similarTo: "Layton", similarBrand: "Parfums de Marly", gender: "unisex", season: "sonbahar-kis", scentFamily: "baharatli", productUrl: "#" },
  { id: 21, essentielleName: "Mirage", priveeName: "Magie Noire", similarTo: "Kirke", similarBrand: "Tiziana Terenzi", gender: "unisex", season: "ilkbahar-yaz", scentFamily: "meyveli", productUrl: "#" },
  { id: 22, essentielleName: "Ethereal", priveeName: "Améthyste Pourpre", similarTo: "Baccarat Rouge 540", similarBrand: "Maison Francis Kurkdjian", gender: "unisex", season: "tum-mevsimler", scentFamily: "tatli", productUrl: "#" },
  { id: 23, essentielleName: "Antique", priveeName: "Atlantide Perdue", similarTo: "Cappadocia", similarBrand: "Simone Andreoli", gender: "unisex", season: "tum-mevsimler", scentFamily: "odunsu", productUrl: "#" },
];

export function filterPerfumes(
  collection: Collection,
  gender: "erkek" | "kadin" | null,
  season: Season | null,
  scentFamily: ScentFamily | null,
): Perfume[] {
  return perfumes.filter((p) => {
    if (collection === "privee" && !p.priveeName) return false;
    if (gender) {
      const genderMatch = p.gender === gender || p.gender === "unisex";
      if (!genderMatch) return false;
    }
    if (season && p.season !== season && p.season !== "tum-mevsimler") return false;
    if (scentFamily && p.scentFamily !== scentFamily) return false;
    return true;
  });
}
