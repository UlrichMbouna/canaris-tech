"use client";

import { useEffect } from "react";

interface PromoProduct {
  id: string;
  name: string;
  category: "smartphones" | "laptops" | "audio" | "accessoires";
  image: string;
  discount: string;
  rating: string;
  reviews: string;
  price: string;
  originalPrice: string;
  savings: string;
  whatsappLink: string;
  description: string;
  badge: string;
}

const PROMO_PRODUCTS: PromoProduct[] = [
  {
    id: "1",
    name: "iPhone 15 Pro Max 256Go",
    category: "smartphones",
    image:
      "https://lh3.googleusercontent.com/aida/AEtjO1Xi1K_yLZsQ0IlQ7k91ZdNmttcWhbeHM9aWcgbjpNLRLFngjGcTEt_S8TGzmpBjrdkI6mCvQoE9oq8Qm05N_Ag1oHfbzlkLkDeuGrqWBwCl3mEG9dvj3OhD9E7-p814bfaflPaURw9-qTOjEGvQZzMIeyiCTgGAQU-KqNhy9VxmLRsKf79PX0Oa4R5GAUfNAmttmn-QBs4pbAL2M6NssQM1y80QGz5mO8qomc8YaXv7CTddc2VrsmBjpXE",
    discount: "-11%",
    rating: "4.9",
    reviews: "42",
    price: "850 000 FCFA",
    originalPrice: "950 000 FCFA",
    savings: "Économie 100 000 FCFA",
    whatsappLink:
      "https://wa.me/?text=Bonjour%20CANARISTECH%2C%20je%20souhaite%20commander%20l%27iPhone%2015%20Pro%20Max%20256Go%20en%20promotion%20%C3%A0%20850.000%20FCFA",
    description:
      "Puce A17 Pro ultra puissante, châssis en titane aéronautique, objectif téléobjectif 5x et port USB-C 3.0.",
    badge: "En Stock",
  },
  {
    id: "2",
    name: "MacBook Pro 16\" M3 Max",
    category: "laptops",
    image:
      "https://lh3.googleusercontent.com/aida/AEtjO1WjClVzq3kpMVDHQo3To8RJ62FkC7Bt4qvfmChKsGU9PTofFYNwk_e1td2djuPawB0d2c3zHztf2MJzBBa0hebr7g1Xe3tYfcbNVQ1IMrNum7rV7RD09_RUqeFxFTa6_hgUzHLqUvdUtkpIYf03-6XyuTDT023tHInNcIrUDeOR_my3twwxJewR-Wbr3am2XfHw_VBIwWZ9DIDV9EqOXIcgrQAbVywdTGIBVgO67w3jX-NoPvrb135Wqz8",
    discount: "-15%",
    rating: "5.0",
    reviews: "19",
    price: "2 850 000 FCFA",
    originalPrice: "3 200 000 FCFA",
    savings: "Économie 350 000 FCFA",
    whatsappLink:
      "https://wa.me/?text=Bonjour%20CANARISTECH%2C%20je%20souhaite%20commander%20le%20MacBook%20Pro%2016%20M3%20Max%20en%20promotion%20%C3%A0%202.850.000%20FCFA",
    description:
      "CPU 14 cœurs, GPU 30 cœurs, 36 Go mémoire unifiée, écran Liquid Retina XDR exceptionnel pour créatifs.",
    badge: "Top Vente Pro",
  },
  {
    id: "3",
    name: "MacBook Air M2 15\"",
    category: "laptops",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD1Qs5NDCanNAKiPVlWPLKDEGUQsvIcL19k6f8m-BWfPCdtOglrg_I0Hd_M82HE84AVZ8PdYLLE7n25gHdk5ZNmMKcQ59vUkYO8VH2qTQZzgsoCaBvxY0093lpvkPPBkBWiUhwhO7r9luUV7I2UAn-TNPe6zUE8Ty6eymUrcsOUiLCCEOtoo18QCTuqoUUGPrzlGD29Urryc6GKeEkw5zTkXUSL3PAhCSebPUsWetGANsdtQIV8vhW1DQ",
    discount: "-17%",
    rating: "4.8",
    reviews: "34",
    price: "950 000 FCFA",
    originalPrice: "1 150 000 FCFA",
    savings: "Économie 200 000 FCFA",
    whatsappLink:
      "https://wa.me/?text=Bonjour%20CANARISTECH%2C%20je%20souhaite%20commander%20le%20MacBook%20Air%20M2%2015%20en%20promotion%20%C3%A0%20950.000%20FCFA",
    description:
      "Design sans ventilateur silencieux, autonomie record jusqu'à 18 heures, écran immersif Liquid Retina.",
    badge: "Ultra Fin",
  },
  {
    id: "4",
    name: "Casque Sans Fil ANC Studio Pro",
    category: "audio",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC_JCAvr57-ZSuG329dMjJakc3XXOocMNUrACvnaizamY-YteIc19JSgdl_v-WWef4WM05cwBGE88l_9Hwh1NZ3G3oinRZf7xmBvzMINjnAUjvGBtd4hkYNNelfDWW-Jof_AJ-n9N0AauM4siMrEKksHiJqqJNhBIAC1aZXHzVuWngL8jF_zFQMT-mVXcknvJNqC9W6tzpYxglbjc0yN9A8UQyvut2VO1XTWvNmYvgSert89a5jV83yJQ",
    discount: "-33%",
    rating: "4.7",
    reviews: "56",
    price: "120 000 FCFA",
    originalPrice: "180 000 FCFA",
    savings: "Économie 60 000 FCFA",
    whatsappLink:
      "https://wa.me/?text=Bonjour%20CANARISTECH%2C%20je%20souhaite%20commander%20le%20Casque%20Sans%20Fil%20ANC%20Studio%20en%20promotion%20%C3%A0%20120.000%20FCFA",
    description:
      "Réduction active du bruit adaptative hybride, son spatialisé 360 et jusqu'à 40h d'écoute continue.",
    badge: "Audio Hi-Res",
  },
  {
    id: "5",
    name: "Smartwatch Ultra Tech Pro",
    category: "accessoires",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB0IYV9WT2j4_z-Fn3wj2wQtTTnFKRGwzfS7JgdIJvh_NdTsaNfGs1v-xs91XIbQtnkWvLl-ELMJZ1JdvWkFFesq4eHxp72uT9MxGX4SUv_CzvImsEdAllT4R_LI7YCQUgfCl9ml9LKKxAtnccTDrUmys8TEpmYkIosbktAsOvhWX3K3N3u0-pTkc7_figOKBaglSyMvUJWnbG2ZWcvZc-r-YD3IC1A-8Dlxhg1jXTeyR2n0rf7DyX34w",
    discount: "-34%",
    rating: "4.9",
    reviews: "28",
    price: "99 000 FCFA",
    originalPrice: "150 000 FCFA",
    savings: "Économie 51 000 FCFA",
    whatsappLink:
      "https://wa.me/?text=Bonjour%20CANARISTECH%2C%20je%20souhaite%20commander%20la%20Smartwatch%20Ultra%20Tech%20Pro%20en%20promotion%20%C3%A0%2099.000%20FCFA",
    description:
      "Boîtier titane étanche 50m, capteurs santé avancés ECG et oxymètre, autonomie de 7 jours en veille.",
    badge: "GPS + Cellular",
  },
  {
    id: "6",
    name: "Pack Chargeur 65W GaN + Câble",
    category: "accessoires",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCBcqV-MOg5xZ4taXS0uOq5RfPyxKrsxPVaRszvLbJ0idKtmTcNXaM9geEUkKZLoRYuwCYXbfk_hoLKPKXPG2BYWHmYZWid1JEza-KVSpN94K59DBXiKoPx-6tM0sxBzTrNsYnD0pFGf6ktvyk5yPPcUIfHkGKL2nlEo_lm03bEfTiqIL-CaYroTKscnhjO67jCVY6Oc_BaVir0kfnmdSzVK6VcIh3xhn5QGaIQk2Zek9JLbxMixS-7nw",
    discount: "-38%",
    rating: "4.9",
    reviews: "89",
    price: "28 000 FCFA",
    originalPrice: "45 000 FCFA",
    savings: "Économie 17 000 FCFA",
    whatsappLink:
      "https://wa.me/?text=Bonjour%20CANARISTECH%2C%20je%20souhaite%20commander%20le%20Pack%20Chargeur%20Rapide%2065W%20GaN%20en%20promotion%20%C3%A0%2028.000%20FCFA",
    description:
      "Technologie GaN III compacte, recharge simultanée pour PC portable et téléphone, câble renforcé 100W 2m.",
    badge: "Charge Rapide",
  },
];

export default function PromoClient() {
  useEffect(() => {
    // Tab Filtering Logic
    const filterBtns = document.querySelectorAll(".promo-tab-btn");
    const cards = document.querySelectorAll(".deal-card");

    filterBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        filterBtns.forEach((b) => {
          b.classList.remove("bg-primary-container", "text-on-primary", "shadow-sm");
          b.classList.add("bg-surface-container", "text-on-surface");
        });

        btn.classList.remove("bg-surface-container", "text-on-surface");
        btn.classList.add("bg-primary-container", "text-on-primary", "shadow-sm");

        const category = btn.getAttribute("data-filter");

        cards.forEach((card) => {
          if (
            category === "all" ||
            card.getAttribute("data-category") === category
          ) {
            (card as HTMLElement).style.display = "flex";
          } else {
            (card as HTMLElement).style.display = "none";
          }
        });
      });
    });

    // Countdown Timer Logic
    let hours = 14;
    let minutes = 27;
    let seconds = 37;

    const hEl = document.getElementById("cd-hours");
    const mEl = document.getElementById("cd-minutes");
    const sEl = document.getElementById("cd-seconds");

    if (hEl && mEl && sEl) {
      const countdown = setInterval(() => {
        if (seconds > 0) {
          seconds--;
        } else {
          seconds = 59;
          if (minutes > 0) {
            minutes--;
          } else {
            minutes = 59;
            if (hours > 0) {
              hours--;
            }
          }
        }
        hEl.textContent = hours.toString().padStart(2, "0");
        mEl.textContent = minutes.toString().padStart(2, "0");
        sEl.textContent = seconds.toString().padStart(2, "0");
      }, 1000);

      return () => clearInterval(countdown);
    }
  }, []);

  return (
    <>
      {/* Filter / Category Tabs */}
      <section className="w-full mx-auto max-w-container px-5 mb-8 lg:px-16">
        <div className="flex items-center justify-between gap-4 pb-4 overflow-x-auto scrollbar-none">
          <div className="flex items-center gap-2.5 shrink-0" id="promo-filters">
            <button
              className="promo-tab-btn active px-5 py-2.5 rounded-full font-label-sm text-label-sm font-semibold bg-primary-container text-on-primary shadow-sm transition-all"
              data-filter="all"
              type="button"
            >
              Toutes les promos (6)
            </button>
            <button
              className="promo-tab-btn px-5 py-2.5 rounded-full font-label-sm text-label-sm font-semibold bg-surface-container text-on-surface hover:bg-surface-container-high transition-all"
              data-filter="smartphones"
              type="button"
            >
              Smartphones (-20% à -35%)
            </button>
            <button
              className="promo-tab-btn px-5 py-2.5 rounded-full font-label-sm text-label-sm font-semibold bg-surface-container text-on-surface hover:bg-surface-container-high transition-all"
              data-filter="laptops"
              type="button"
            >
              Laptops &amp; PC (-15% à -30%)
            </button>
            <button
              className="promo-tab-btn px-5 py-2.5 rounded-full font-label-sm text-label-sm font-semibold bg-surface-container text-on-surface hover:bg-surface-container-high transition-all"
              data-filter="audio"
              type="button"
            >
              Écouteurs &amp; Audio
            </button>
            <button
              className="promo-tab-btn px-5 py-2.5 rounded-full font-label-sm text-label-sm font-semibold bg-surface-container text-on-surface hover:bg-surface-container-high transition-all"
              data-filter="accessoires"
              type="button"
            >
              Accessoires &amp; Objets Connectés
            </button>
          </div>
          <div className="hidden xl:flex items-center gap-2 text-outline font-label-sm text-label-sm shrink-0">
            <span className="material-symbols-outlined text-[18px]">
              verified
            </span>
            Tarifs vérifiés en temps réel
          </div>
        </div>
      </section>

      {/* Product Deals Grid */}
      <section className="w-full mx-auto max-w-container px-5 mb-16 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="deals-grid">
          {PROMO_PRODUCTS.map((product) => (
            <article
              key={product.id}
              className="deal-card flex flex-col bg-surface-container-lowest rounded-xl p-6 shadow-[0_4px_24px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_32px_rgba(0,0,0,0.08)] transition-all duration-300"
              data-category={product.category}
            >
              <div className="flex items-center justify-between mb-4">
                <span className="bg-error/10 text-error font-label-sm text-label-sm px-2.5 py-1 rounded-md font-bold">
                  {product.discount} REMISE
                </span>
                <div className="flex items-center gap-1 text-on-surface font-label-sm text-label-sm">
                  <span
                    className="material-symbols-outlined text-[18px] text-amber-500"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    star
                  </span>
                  <span className="font-bold">{product.rating}</span>
                  <span className="text-outline font-normal">
                    ({product.reviews})
                  </span>
                </div>
              </div>

              <div className="relative w-full h-64 bg-surface-container-low rounded-lg p-4 flex items-center justify-center overflow-hidden mb-6">
                <img
                  alt={product.name}
                  className="object-contain max-h-56 w-auto transition-transform duration-300 hover:scale-105"
                  src={product.image}
                />
                <span className="absolute bottom-3 left-3 bg-surface-container-lowest/90 backdrop-blur-sm text-on-surface-variant font-label-sm text-label-sm px-2.5 py-0.5 rounded-full">
                  {product.badge}
                </span>
              </div>

              <div className="flex flex-col flex-1">
                <span className="text-primary font-label-sm text-label-sm uppercase font-semibold tracking-wider">
                  {product.category === "smartphones"
                    ? "Smartphone Apple"
                    : product.category === "laptops"
                      ? "Station Mobile Pro"
                      : product.category === "audio"
                        ? "Audio & Sans Fil"
                        : "Accessoires"}
                </span>
                <h3 className="font-headline-md text-headline-md font-bold text-on-surface tracking-tight mt-1 mb-2">
                  {product.name}
                </h3>
                <p className="font-body-md text-body-md text-outline line-clamp-2 mb-4">
                  {product.description}
                </p>

                <div className="mt-auto pt-4 flex flex-col gap-4">
                  <div className="flex items-baseline justify-between">
                    <div className="flex flex-col">
                      <span className="font-display-lg-mobile text-display-lg-mobile font-bold text-primary tracking-tight">
                        {product.price}
                      </span>
                      <div className="flex items-center gap-2">
                        <span className="font-body-md text-body-md text-outline line-through">
                          {product.originalPrice}
                        </span>
                        <span className="font-label-sm text-label-sm text-error font-semibold">
                          {product.savings}
                        </span>
                      </div>
                    </div>
                  </div>
                  <a
                    className="w-full inline-flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#1ebd59] text-inverse-surface font-button-text text-button-text py-3 rounded-lg shadow-sm transition-colors"
                    href={product.whatsappLink}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <span className="material-symbols-outlined text-[20px] text-inverse-surface">
                      chat
                    </span>
                    Commander sur WhatsApp
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Value Propositions Banner */}
      <section className="w-full mx-auto max-w-container px-5 mb-16 lg:px-16">
        <div className="bg-surface-container-low rounded-xl p-8 md:p-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Pillar 1 */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-surface-container-lowest shadow-sm flex items-center justify-center shrink-0 text-primary">
                <span className="material-symbols-outlined text-[28px]">
                  verified
                </span>
              </div>
              <div className="flex flex-col gap-1">
                <h4 className="font-headline-md text-headline-md font-bold text-on-surface">
                  100% Produits Authentiques
                </h4>
                <p className="font-body-md text-body-md text-outline">
                  Tous nos articles sont neufs, scellés d&apos;origine constructeur et
                  accompagnés d&apos;une garantie officielle de 12 mois.
                </p>
              </div>
            </div>

            {/* Pillar 2 */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-surface-container-lowest shadow-sm flex items-center justify-center shrink-0 text-primary">
                <span className="material-symbols-outlined text-[28px]">
                  local_shipping
                </span>
              </div>
              <div className="flex flex-col gap-1">
                <h4 className="font-headline-md text-headline-md font-bold text-on-surface">
                  Livraison Express Sécurisée
                </h4>
                <p className="font-body-md text-body-md text-outline">
                  Livraison à domicile et en point relais. Option de paiement à
                  la réception ou transfert électronique sécurisé.
                </p>
              </div>
            </div>

            {/* Pillar 3 */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-surface-container-lowest shadow-sm flex items-center justify-center shrink-0 text-primary">
                <span className="material-symbols-outlined text-[28px]">
                  support_agent
                </span>
              </div>
              <div className="flex flex-col gap-1">
                <h4 className="font-headline-md text-headline-md font-bold text-on-surface">
                  Assistance WhatsApp Dédiée
                </h4>
                <p className="font-body-md text-body-md text-outline">
                  Une équipe technique locale disponible 7j/7 pour vous
                  conseiller, confirmer vos stocks et gérer vos commandes
                  instantanément.
                </p>
              </div>
            </div>
          </div>

          {/* Direct Assistance Callout */}
          <div className="bg-surface-container-lowest rounded-lg p-6 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-[#25D366]/10 text-[#25D366] flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-[24px]">
                  forum
                </span>
              </div>
              <div>
                <h5 className="font-headline-md text-headline-md text-on-surface font-semibold">
                  Une question sur nos promotions en cours ?
                </h5>
                <p className="font-body-md text-body-md text-outline">
                  Demandez des photos supplémentaires, une configuration spéciale
                  ou négociez pour les commandes en volume.
                </p>
              </div>
            </div>
            <a
              className="shrink-0 inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1ebd59] text-inverse-surface font-button-text text-button-text px-6 py-3 rounded-lg shadow-sm transition-all"
              href="https://wa.me/?text=Bonjour%20CANARISTECH%2C%20j%27ai%20une%20question%20concernant%20les%20offres%20en%20promotion."
              rel="noopener noreferrer"
              target="_blank"
            >
              <span className="material-symbols-outlined text-[20px] text-inverse-surface">
                chat
              </span>
              Discuter avec un conseiller
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
