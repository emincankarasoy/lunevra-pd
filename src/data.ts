export type Gender = "erkek" | "kadin" | "unisex";
export type Collection = "essentielle" | "privee";

export interface Perfume {
  id: number;
  essentielleName: string;
  priveeName: string | null;
  similarTo: string;
  similarBrand: string;
  gender: Gender;
  productUrl: string;
}

export const perfumes: Perfume[] = [
  // ---- ERKEK ----
  { id: 1, essentielleName: "Heritage", priveeName: "Indompté", similarTo: "Sauvage", similarBrand: "Dior", gender: "erkek", productUrl: "#" },
  { id: 2, essentielleName: "Devotion", priveeName: "Éclat Absolu", similarTo: "Le Male Elixir", similarBrand: "Jean Paul Gaultier", gender: "erkek", productUrl: "#" },
  { id: 3, essentielleName: "Alliance", priveeName: "Essence d'Amour", similarTo: "Stronger with You Intensely", similarBrand: "Emporio Armani", gender: "erkek", productUrl: "#" },
  { id: 4, essentielleName: "Salient", priveeName: "Mystère", similarTo: "Y Eau de Parfum", similarBrand: "Yves Saint Laurent", gender: "erkek", productUrl: "#" },
  { id: 5, essentielleName: "Passion", priveeName: "Nuit d'Éros", similarTo: "Eros", similarBrand: "Versace", gender: "erkek", productUrl: "#" },
  { id: 6, essentielleName: "Bourbon", priveeName: "Poussière d'Étoile", similarTo: "Althair", similarBrand: "Parfums de Marly", gender: "erkek", productUrl: "#" },
  { id: 7, essentielleName: "Marine", priveeName: "Vent de Liberté", similarTo: "Bleu De Chanel", similarBrand: "Chanel", gender: "erkek", productUrl: "#" },
  { id: 8, essentielleName: "Refined", priveeName: "Écho d'Homme", similarTo: "Reflection Man", similarBrand: "Amouage", gender: "erkek", productUrl: "#" },
  { id: 9, essentielleName: "Zenith", priveeName: "Victorieux", similarTo: "Invictus", similarBrand: "Paco Rabanne", gender: "erkek", productUrl: "#" },
  { id: 10, essentielleName: "Celeste", priveeName: "Marque Éternelle", similarTo: "Code Profumo", similarBrand: "Armani", gender: "erkek", productUrl: "#" },
  { id: 11, essentielleName: "Paragon", priveeName: "L'Impérial", similarTo: "Aventus", similarBrand: "Creed", gender: "erkek", productUrl: "#" },
  { id: 12, essentielleName: "Grande", priveeName: "Monsieur Élégant", similarTo: "Gentleman", similarBrand: "Givenchy", gender: "erkek", productUrl: "#" },
  { id: 13, essentielleName: "Piquant", priveeName: "Élixir Vanillé", similarTo: "Tobacco Vanille", similarBrand: "Tom Ford", gender: "erkek", productUrl: "#" },
  { id: 14, essentielleName: "Magnate", priveeName: null, similarTo: "Imagination", similarBrand: "Louis Vuitton", gender: "erkek", productUrl: "#" },
  { id: 15, essentielleName: "Verdant", priveeName: null, similarTo: "Torino 21", similarBrand: "Xerjoff", gender: "erkek", productUrl: "#" },
  { id: 16, essentielleName: "Arcane", priveeName: null, similarTo: "Le Beau Le Parfum", similarBrand: "Jean Paul Gaultier", gender: "erkek", productUrl: "#" },
  { id: 17, essentielleName: "Regnant", priveeName: null, similarTo: "Bois Imperial", similarBrand: "Essential Parfums", gender: "erkek", productUrl: "#" },

  // ---- UNISEX (hem erkek hem kadın tablarında görünür) ----
  { id: 18, essentielleName: "Halcyon", priveeName: "Nuit Élysée", similarTo: "Naxos", similarBrand: "Xerjoff", gender: "unisex", productUrl: "#" },
  { id: 19, essentielleName: "Gourme", priveeName: "Ivresse d'Or", similarTo: "Khamrah", similarBrand: "Lattafa", gender: "unisex", productUrl: "#" },
  { id: 20, essentielleName: "Dynasty", priveeName: "Séduction Nocturne", similarTo: "Layton", similarBrand: "Parfums de Marly", gender: "unisex", productUrl: "#" },
  { id: 21, essentielleName: "Mirage", priveeName: "Magie Noire", similarTo: "Kirke", similarBrand: "Tiziana Terenzi", gender: "unisex", productUrl: "#" },
  { id: 22, essentielleName: "Ethereal", priveeName: "Améthyste Pourpre", similarTo: "Baccarat Rouge 540", similarBrand: "Maison Francis Kurkdjian", gender: "unisex", productUrl: "#" },
  { id: 23, essentielleName: "Antique", priveeName: "Atlantide Perdue", similarTo: "Cappadocia", similarBrand: "Simone Andreoli", gender: "unisex", productUrl: "#" },

  // ---- KADIN ----
  { id: 24, essentielleName: "Sublime", priveeName: null, similarTo: "Erba Pura", similarBrand: "Xerjoff", gender: "kadin", productUrl: "#" },
  { id: 25, essentielleName: "Candour", priveeName: null, similarTo: "My Way", similarBrand: "Giorgio Armani", gender: "kadin", productUrl: "#" },
  { id: 26, essentielleName: "Elysian", priveeName: null, similarTo: "Fleur Narcotique", similarBrand: "Ex Nihilo", gender: "kadin", productUrl: "#" },
  { id: 27, essentielleName: "Amoret", priveeName: null, similarTo: "Bombshell", similarBrand: "Victoria's Secret", gender: "kadin", productUrl: "#" },
  { id: 28, essentielleName: "Crystal", priveeName: null, similarTo: "Bright Crystal", similarBrand: "Versace", gender: "kadin", productUrl: "#" },
  { id: 29, essentielleName: "Veloute", priveeName: null, similarTo: "Eau Tendre", similarBrand: "Chanel", gender: "kadin", productUrl: "#" },
  { id: 30, essentielleName: "Radiant", priveeName: "Charme Absolu", similarTo: "Goddess", similarBrand: "Burberry", gender: "kadin", productUrl: "#" },
  { id: 31, essentielleName: "Nomadic", priveeName: "Libre Lumière", similarTo: "Libre", similarBrand: "Yves Saint Laurent", gender: "kadin", productUrl: "#" },
  { id: 32, essentielleName: "Pristine", priveeName: "Muse Intemporelle", similarTo: "Coco Mademoiselle", similarBrand: "Chanel", gender: "kadin", productUrl: "#" },
  { id: 33, essentielleName: "Melliflu", priveeName: "Caramel Blanc", similarTo: "Eclaire", similarBrand: "Lattafa", gender: "kadin", productUrl: "#" },
  { id: 34, essentielleName: "Dualism", priveeName: "Douce Demoiselle", similarTo: "Good Girl", similarBrand: "Carolina Herrera", gender: "kadin", productUrl: "#" },
  { id: 35, essentielleName: "Captive", priveeName: "Fleur de Bonheur", similarTo: "La Vie Est Belle", similarBrand: "Lancôme", gender: "kadin", productUrl: "#" },
];

export function filterPerfumes(
  collection: Collection,
  gender: "erkek" | "kadin",
): Perfume[] {
  return perfumes.filter((p) => {
    if (collection === "privee" && !p.priveeName) return false;
    const genderMatch = p.gender === gender || p.gender === "unisex";
    return genderMatch;
  });
}
