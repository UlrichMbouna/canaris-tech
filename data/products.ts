export type Product = {
  id: string;
  slug: string;
  name: string;
  description: string;
  price: number;
  category: "Smartphones" | "Laptops" | "Tablettes" | "Accessoires";
  brand: "Apple" | "Samsung" | "Dell" | "HP";
  image: string;
  status?: "Nouveau" | "Rupture";
  rating: string;
  promo?: boolean;
  images: string[];
  specs: Array<{ icon: string; text: string }>;
  storage: string[];
  colors: Array<{ name: string; hex: string }>;
  description_long: string;
};

export const products: Product[] = [
  {
    id: "1",
    slug: "iphone-15-pro",
    name: "iPhone 15 Pro",
    description: "256Go, Titane Naturel",
    price: 750000,
    category: "Smartphones",
    brand: "Apple",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuABsJARh_uEFu5GF04uRpW7JTb_D28hwRFyKcm9ezmwCpQhk3ZH-MGKAOb93X-1qwKzrFfCCxfBIiH9q8NrPFgBPtaUdROiVLvDqq-u0K1lTHm48Zj7cAso7bo2yKGomacjRIiK0ZLD0vGBEZe0ifhIAtaZVHFcWwHk8lrrHalJDRUn3ISFPIsrYEY7Kd5tGWL9JEg42L4z_w3K8s-WHE0n5T4WcAX8rXrv0UVjPtbnaT5LRDc2wVybkg",
    rating: "4.8",
    promo: true,
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuABsJARh_uEFu5GF04uRpW7JTb_D28hwRFyKcm9ezmwCpQhk3ZH-MGKAOb93X-1qwKzrFfCCxfBIiH9q8NrPFgBPtaUdROiVLvDqq-u0K1lTHm48Zj7cAso7bo2yKGomacjRIiK0ZLD0vGBEZe0ifhIAtaZVHFcWwHk8lrrHalJDRUn3ISFPIsrYEY7Kd5tGWL9JEg42L4z_w3K8s-WHE0n5T4WcAX8rXrv0UVjPtbnaT5LRDc2wVybkg",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD6-XX9jriUFxNr5B2y6rULWHfNlKpIpLDmzyY4GyUtYVw3RczYUMr8AU2k6KCfgv0RVMvt5D2JD3gLqrwWhfuiWlLA0hgF7faFdk-m1cUhq6EOwl0yqfjpL2KmZvGQ99DlxaOGDBs4DDEifRL2SGqQ1x_3KNxNjqpq4Sp4DNc4gYNW_ixnsUHNT3QToDbm_H-2z17fZfhz2jbAHWG2XQxGo8Y4UXT1AGmrTjFs0g7mORWorgsgPAQqeQ",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuADVTGj5nd6MhP8y0rnew3o-F3X_KlrA8tG2PP131wNyluRWaiDzMoKUj9E7YYlFVHORo9qwU97WhcJLG6Jhs2dzX6oBxuETsRdfR9IAVgeFX6_-0REzKuFZ6Ny2U21FN8xzOxvt0AYres5FOXZW9Xe7o-kD4fOy-AvearVOu1Tsnj3o2-g3NoiGJ5RI56bIHorSZxIXtUS8hkd_BEbKVJnwvQSP7fy4_bvLt2OBbWLV1UO-zRu4RF3fw",
    ],
    specs: [
      { icon: "memory", text: "Puce A17 Pro" },
      { icon: "camera", text: "Système photo pro 48 Mpx" },
      { icon: "smartphone", text: "Écran Super Retina XDR 6.1\"" },
      { icon: "battery_full", text: "Jusqu'à 23h de lecture vidéo" },
    ],
    storage: ["128 Go", "256 Go", "512 Go"],
    colors: [
      { name: "Titane naturel", hex: "#B5B6B8" },
      { name: "Titane noir", hex: "#3B3F45" },
      { name: "Titane blanc", hex: "#F3F4F6" },
      { name: "Titane bleu", hex: "#273449" },
    ],
    description_long:
      "Découvrez le nouvel iPhone 15 Pro, forgé en titane, avec la puce A17 Pro redéfinissant les performances graphiques, un bouton Action personnalisable et le système photo le plus puissant jamais vu sur iPhone.",
  },
  {
    id: "2",
    slug: "iphone-15-pro-max",
    name: "iPhone 15 Pro Max",
    description: "256Go, Titane Naturel",
    price: 850000,
    category: "Smartphones",
    brand: "Apple",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuABsJARh_uEFu5GF04uRpW7JTb_D28hwRFyKcm9ezmwCpQhk3ZH-MGKAOb93X-1qwKzrFfCCxfBIiH9q8NrPFgBPtaUdROiVLvDqq-u0K1lTHm48Zj7cAso7bo2yKGomacjRIiK0ZLD0vGBEZe0ifhIAtaZVHFcWwHk8lrrHalJDRUn3ISFPIsrYEY7Kd5tGWL9JEg42L4z_w3K8s-WHE0n5T4WcAX8rXrv0UVjPtbnaT5LRDc2wVybkg",
    rating: "4.9",
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuABsJARh_uEFu5GF04uRpW7JTb_D28hwRFyKcm9ezmwCpQhk3ZH-MGKAOb93X-1qwKzrFfCCxfBIiH9q8NrPFgBPtaUdROiVLvDqq-u0K1lTHm48Zj7cAso7bo2yKGomacjRIiK0ZLD0vGBEZe0ifhIAtaZVHFcWwHk8lrrHalJDRUn3ISFPIsrYEY7Kd5tGWL9JEg42L4z_w3K8s-WHE0n5T4WcAX8rXrv0UVjPtbnaT5LRDc2wVybkg",
    ],
    specs: [
      { icon: "memory", text: "Puce A17 Pro" },
      { icon: "camera", text: "Système photo pro 48 Mpx" },
      { icon: "smartphone", text: "Écran Super Retina XDR 6.7\"" },
      { icon: "battery_full", text: "Jusqu'à 29h de lecture vidéo" },
    ],
    storage: ["256 Go", "512 Go", "1 To"],
    colors: [
      { name: "Titane naturel", hex: "#B5B6B8" },
      { name: "Titane noir", hex: "#3B3F45" },
      { name: "Titane blanc", hex: "#F3F4F6" },
      { name: "Titane bleu", hex: "#273449" },
    ],
    description_long:
      "Le iPhone 15 Pro Max combine innovation et puissance avec un écran plus grand pour les créateurs.",
  },
  {
    id: "3",
    slug: "macbook-pro-16",
    name: "MacBook Pro 16\"",
    description: "64Go RAM, 2To SSD, Gris Sidéral",
    price: 1500000,
    category: "Laptops",
    brand: "Apple",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDJDkAyuEU0kfBBXf0uKgppeyK3a9GPdVEkWk7QeQQ5NLDsm7ozdNRa0SvVz_W_wlcR85lhxcTYmxG5MYhSYG3WXLj1MoXdI_WDZWy4TSrJ_lI7jPpsglA9bzb_JWGX1lMxWJWpLGdk-3v7WAFWs-Jo5gD_J3b7PDz5hksYtJJUhkunS6Mg5AsTl_BjHjo6Yhor-hwHzk1hubq9VmNGNyB6JQ3lBapNFXs5E-OndFxLVB9uIqOoLKC7BA",
    rating: "4.9",
    promo: false,
    status: "Nouveau",
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDJDkAyuEU0kfBBXf0uKgppeyK3a9GPdVEkWk7QeQQ5NLDsm7ozdNRa0SvVz_W_wlcR85lhxcTYmxG5MYhSYG3WXLj1MoXdI_WDZWy4TSrJ_lI7jPpsglA9bzb_JWGX1lMxWJWpLGdk-3v7WAFWs-Jo5gD_J3b7PDz5hksYtJJUhkunS6Mg5AsTl_BjHjo6Yhor-hwHzk1hubq9VmNGNyB6JQ3lBapNFXs5E-OndFxLVB9uIqOoLKC7BA",
    ],
    specs: [
      { icon: "memory", text: "Puce M3 Max 12-core" },
      { icon: "storage", text: "SSD jusqu'à 2To" },
      { icon: "display", text: "Écran Retina 16 pouces" },
      { icon: "battery_full", text: "Jusqu'à 20h d'autonomie" },
    ],
    storage: ["512 Go", "1 To", "2 To"],
    colors: [
      { name: "Gris sidéral", hex: "#4A4A4A" },
      { name: "Argent", hex: "#E8E8E8" },
      { name: "Or", hex: "#D4AF37" },
      { name: "Noir espace", hex: "#2A2A2A" },
    ],
    description_long:
      "Puissance, innovation et design – le MacBook Pro 16\" est conçu pour les créateurs professionnels.",
  },
  {
    id: "4",
    slug: "galaxy-s24-ultra",
    name: "Galaxy S24 Ultra",
    description: "256Go, Titane Noir",
    price: 790000,
    category: "Smartphones",
    brand: "Samsung",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuABsJARh_uEFu5GF04uRpW7JTb_D28hwRFyKcm9ezmwCpQhk3ZH-MGKAOb93X-1qwKzrFfCCxfBIiH9q8NrPFgBPtaUdROiVLvDqq-u0K1lTHm48Zj7cAso7bo2yKGomacjRIiK0ZLD0vGBEZe0ifhIAtaZVHFcWwHk8lrrHalJDRUn3ISFPIsrYEY7Kd5tGWL9JEg42L4z_w3K8s-WHE0n5T4WcAX8rXrv0UVjPtbnaT5LRDc2wVybkg",
    rating: "4.7",
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuABsJARh_uEFu5GF04uRpW7JTb_D28hwRFyKcm9ezmwCpQhk3ZH-MGKAOb93X-1qwKzrFfCCxfBIiH9q8NrPFgBPtaUdROiVLvDqq-u0K1lTHm48Zj7cAso7bo2yKGomacjRIiK0ZLD0vGBEZe0ifhIAtaZVHFcWwHk8lrrHalJDRUn3ISFPIsrYEY7Kd5tGWL9JEg42L4z_w3K8s-WHE0n5T4WcAX8rXrv0UVjPtbnaT5LRDc2wVybkg",
    ],
    specs: [
      { icon: "memory", text: "Snapdragon 8 Gen 3" },
      { icon: "camera", text: "Système photo 200 Mpx" },
      { icon: "smartphone", text: "Écran Dynamic AMOLED 6.8\"" },
      { icon: "battery_full", text: "Batterie 5000 mAh" },
    ],
    storage: ["256 Go", "512 Go"],
    colors: [
      { name: "Titane noir", hex: "#1A1A1A" },
      { name: "Titane gris", hex: "#808080" },
      { name: "Titane violet", hex: "#9370DB" },
    ],
    description_long:
      "Le Galaxy S24 Ultra redéfinit les standards des smartphones haut de gamme avec son appareil photo révolutionnaire.",
  },
];

export function getProduct(slug: string) {
  return products.find((p) => p.slug === slug);
}

export function getProductsHome() {
  return products.slice(0, 2);
}
