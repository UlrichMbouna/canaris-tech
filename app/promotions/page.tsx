import type { Metadata } from "next";
import PromoClient from "./promo-client";

export const metadata: Metadata = {
  title: "Promotions - CanarisTech",
  description: "Découvrez nos meilleures offres et remises jusqu'à -40% sur nos produits high-tech.",
};

export default function PromotionsPage() {
  return (
    <main className="bg-surface">
      {/* Top Highlight Anchor & Header Section */}
      <section className="w-full mx-auto max-w-container px-5 pt-10 pb-8 lg:px-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6">
          <div className="flex flex-col gap-3 max-w-3xl">
            <div className="inline-flex items-center gap-2 self-start bg-primary/10 text-primary px-3.5 py-1.5 rounded-full font-label-sm text-label-sm uppercase tracking-wider">
              <span className="material-symbols-outlined text-[16px]">
                local_fire_department
              </span>
              Offres Limitées
            </div>
            <h1 className="font-display-lg text-display-lg text-on-surface tracking-tight leading-tight">
              Les Meilleures Promotions High-Tech
            </h1>
            <p className="font-body-lg text-body-lg text-outline leading-relaxed max-w-2xl">
              Profitez de remises exclusives jusqu&apos;à -40% sur une sélection
              de smartphones, ordinateurs et accessoires certifiés. Commandez
              directement via WhatsApp avec un tarif préférentiel garanti.
            </p>
          </div>
          {/* Quick Trust Indicators */}
          <div className="flex items-center gap-6 self-start md:self-end bg-surface-container-low px-5 py-3.5 rounded-xl text-on-surface">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary-container text-on-primary flex items-center justify-center">
                <span className="material-symbols-outlined text-[20px]">
                  verified_user
                </span>
              </div>
              <div className="flex flex-col">
                <span className="font-label-sm text-label-sm text-on-surface">
                  Garantie 12 Mois
                </span>
                <span className="font-label-sm text-label-sm text-outline font-normal">
                  Sur tout le catalogue
                </span>
              </div>
            </div>
            <div className="w-px h-8 bg-outline-variant"></div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                <span className="material-symbols-outlined text-[20px]">
                  rocket_launch
                </span>
              </div>
              <div className="flex flex-col">
                <span className="font-label-sm text-label-sm text-on-surface">
                  Stock Limité
                </span>
                <span className="font-label-sm text-label-sm text-outline font-normal">
                  Expédition en 24h
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Flash Sale Hero Banner */}
      <section className="w-full mx-auto max-w-container px-5 mb-12 lg:px-16">
        <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-inverse-surface via-[#18263a] to-inverse-surface text-inverse-on-surface p-8 md:p-12 shadow-xl">
          <div className="absolute -right-20 -bottom-20 w-96 h-96 bg-primary/20 rounded-full blur-3xl pointer-events-none"></div>
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Content Column */}
            <div className="lg:col-span-7 flex flex-col gap-5">
              <div className="flex flex-wrap items-center gap-3">
                <span className="bg-error text-on-error font-label-sm text-label-sm px-3 py-1 rounded-full uppercase tracking-wider font-semibold">
                  Vente Flash
                </span>
                <div className="flex items-center gap-2 bg-surface-container-highest/10 px-3 py-1 rounded-full text-inverse-on-surface font-label-sm text-label-sm">
                  <span className="material-symbols-outlined text-[16px] text-primary-fixed">
                    timer
                  </span>
                  <span>Fin de l&apos;offre dans :</span>
                  <div
                    className="font-semibold text-primary-fixed tracking-wider"
                    id="flash-countdown"
                  >
                    <span id="cd-hours">14</span>h{" "}
                    <span id="cd-minutes">27</span>m{" "}
                    <span id="cd-seconds">37</span>s
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-primary-fixed font-label-sm text-label-sm uppercase tracking-wider font-semibold">
                  Offre Exceptionnelle du Moment
                </span>
                <h2 className="font-headline-md text-headline-md text-surface-container-lowest font-bold leading-tight">
                  Pack Ultime : MacBook Pro M3 Max + Hub USB-C Pro + Housse
                  Cuir
                </h2>
                <p className="font-body-md text-body-md text-outline-variant max-w-xl">
                  Équipez votre studio ou entreprise avec le summum de la
                  performance Apple. Bénéficiez d&apos;une réduction immédiate de 25% et de
                  la livraison prioritaire offerte.
                </p>
              </div>
              <div className="flex flex-wrap items-baseline gap-4 pt-1">
                <span className="font-display-lg text-display-lg text-surface-container-lowest font-bold">
                  2 950 000 FCFA
                </span>
                <span className="font-body-lg text-body-lg text-outline-variant line-through">
                  3 930 000 FCFA
                </span>
                <span className="bg-primary text-on-primary font-label-sm text-label-sm px-2.5 py-1 rounded-md font-semibold">
                  -25% Économie
                </span>
              </div>
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  className="inline-flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#1ebd59] text-inverse-surface font-button-text text-button-text px-7 py-3.5 rounded-lg transition-all transform hover:-translate-y-0.5 shadow-md"
                  href="https://wa.me/?text=Bonjour%20CANARISTECH%2C%20je%20souhaite%20commander%20le%20Pack%20Ultime%20MacBook%20Pro%20M3%20Max%20en%20Vente%20Flash%20%C3%A0%202.950.000%20FCFA"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span className="material-symbols-outlined text-[20px] text-inverse-surface">
                    chat
                  </span>
                  Commander sur WhatsApp
                </a>
                <a
                  className="inline-flex items-center justify-center gap-2 bg-surface-container-highest/10 hover:bg-surface-container-highest/20 text-inverse-on-surface font-button-text text-button-text px-6 py-3.5 rounded-lg transition-colors"
                  href="/boutique"
                >
                  Voir la fiche détaillée
                  <span className="material-symbols-outlined text-[18px]">
                    arrow_forward
                  </span>
                </a>
              </div>
            </div>

            {/* Visual Column */}
            <div className="lg:col-span-5 flex justify-center items-center relative">
              <div className="relative w-full max-w-md aspect-4/3 rounded-xl overflow-hidden bg-surface-container-highest/5 p-4 flex items-center justify-center">
                <img
                  alt="Pack MacBook Pro Ultra Tech CANARISTECH"
                  className="object-contain max-h-72 w-full drop-shadow-2xl transition-transform duration-500 hover:scale-105"
                  src="https://lh3.googleusercontent.com/aida/AEtjO1WjClVzq3kpMVDHQo3To8RJ62FkC7Bt4qvfmChKsGU9PTofFYNwk_e1td2djuPawB0d2c3zHztf2MJzBBa0hebr7g1Xe3tYfcbNVQ1IMrNum7rV7RD09_RUqeFxFTa6_hgUzHLqUvdUtkpIYf03-6XyuTDT023tHInNcIrUDeOR_my3twwxJewR-Wbr3am2XfHw_VBIwWZ9DIDV9EqOXIcgrQAbVywdTGIBVgO67w3jX-NoPvrb135Wqz8"
                />
                <div className="absolute top-3 right-3 bg-surface-container-lowest/95 text-on-surface px-3 py-1.5 rounded-lg shadow-sm font-label-sm text-label-sm font-semibold flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-error animate-ping"></span>
                  Plus que 3 packs
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <PromoClient />
    </main>
  );
}
