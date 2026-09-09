import type { Metadata } from "next";
import type { CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";
import { getProductsHome } from "@/data/products";

export const metadata: Metadata = {
  title: "High-tech premium au Cameroun",
  description:
    "Découvrez les smartphones, ordinateurs et accessoires sélectionnés par CanarisTech.",
};

const categories = [
  ["smartphone", "Smartphones"],
  ["laptop_mac", "Ordinateurs"],
  ["tablet_mac", "Tablettes"],
  ["headphones", "Écouteurs"],
  ["watch", "Montres"],
  ["cable", "Accessoires"],
  ["tv", "Téléviseurs"],
  ["sports_esports", "Gaming"],
] as const;

const products = getProductsHome();

const Icon = ({
  children,
  className = "",
  style,
}: {
  children: string;
  className?: string;
  style?: CSSProperties;
}) => (
  <span aria-hidden="true" className={`material-symbols-outlined ${className}`} style={style}>
    {children}
  </span>
);

export default function Home() {
  return (
    <main>
      <section className="relative overflow-hidden border-b border-outline-variant/20 bg-gradient-to-b from-[#eff4ff] via-white to-[#f8f9ff] py-14 lg:py-20">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-16">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="z-10 space-y-6 text-left lg:col-span-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary-container">
                <span className="h-2 w-2 rounded-full bg-primary-container animate-pulse"></span>
                Nouveau catalogue 2024-2025
              </div>

              <h1 className="text-4xl font-extrabold leading-[1.15] tracking-tight text-[#0b1c30] md:text-5xl lg:text-[54px]">
                La technologie d&apos;exception à votre portée.
              </h1>

              <p className="max-w-xl text-base leading-relaxed text-[#434656] md:text-lg">
                Votre spécialiste high-tech de confiance. Smartphones scellés,
                ordinateurs d&apos;élite Apple et PC, tablettes et accessoires
                certifiés 100% neufs &amp; authentiques avec garantie officielle.
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <Link
                  href="#boutique"
                  className="inline-flex items-center gap-2 rounded-xl bg-primary-container px-6 py-3.5 text-base font-semibold text-white shadow-md shadow-primary-container/20 transition-all duration-200 hover:bg-primary hover:shadow-lg active:scale-95"
                >
                  <span>Découvrir la boutique</span>
                  <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
                </Link>

                <a
                  href="https://wa.me/"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="inline-flex items-center gap-2.5 rounded-xl bg-[#25D366] px-6 py-3.5 text-base font-semibold text-white shadow-md shadow-[#25D366]/25 transition-all duration-200 hover:bg-[#1DA851] hover:shadow-lg active:scale-95"
                >
                  <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766 0-3.18-2.587-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.007c.106.005.249-.04.39.299.144.347.491 1.2.534 1.288.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.303c-.087.087-.179.182-.077.357.101.174.449.741.964 1.2.662.59 1.221.773 1.394.86.173.086.274.072.376-.044.101-.116.433-.506.549-.679.116-.174.231-.145.39-.087s1.011.477 1.184.564.289.13.332.203c.043.072.043.419-.101.824z" />
                  </svg>
                  <span>Commander sur WhatsApp</span>
                </a>
              </div>

              <div className="grid grid-cols-3 gap-3 border-t border-outline-variant/30 pt-4">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[20px] text-primary">
                    verified
                  </span>
                  <span className="text-xs font-semibold text-[#0b1c30]">
                    Matériel scellé garanti
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[20px] text-primary">
                    local_shipping
                  </span>
                  <span className="text-xs font-semibold text-[#0b1c30]">
                    Livraison rapide &amp; sûre
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[20px] text-[#25D366]">
                    chat
                  </span>
                  <span className="text-xs font-semibold text-[#0b1c30]">
                    Devis WhatsApp 2 min
                  </span>
                </div>
              </div>
            </div>

            <div className="relative lg:col-span-6">
              <div className="group relative mx-auto overflow-hidden rounded-2xl border border-white/80 bg-white shadow-2xl">
                <img
                  alt="Bannière d'exception CANARISTECH - Ordinateurs portables, smartphones haut de gamme, casques audio et montres connectées"
                  className="h-auto w-full object-cover transition-transform duration-500 group-hover:scale-102"
                  src="https://lh3.googleusercontent.com/aida/AEtjO1WQsyh1r7kZhD8MuuUWe9xBpJgPT-hyOhLf8R0anNAvEbi9zqMCd88NAAOiZiW9-M3houGsoAcRetudrhnkyXEDvvfwzIAI_X-bVAD6xXmrcSVynhsp5vVqrOWQdN33L96B4HZNNCcR0iWU_G7cqy3H_cDFmdj8WEqklBh5PTw88qRMPtlOmuAWxuWe1Jb53dRlh3dVhJlUYQRBGqYdvaJqeqVgP7POlANTnL2V_u-EYyUhVnddnuMAS4_j"
                />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-xl border border-outline-variant/20 bg-white/95 p-3.5 shadow-lg backdrop-blur-md">
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary-container">
                      <span className="material-symbols-outlined text-[22px]">new_releases</span>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-[#0b1c30]">
                        Arrivage Officiel 2024
                      </p>
                      <p className="text-[11px] text-[#434656]">
                        Disponibilité immédiate en stock
                      </p>
                    </div>
                  </div>
                  <span className="rounded-md bg-primary/10 px-2.5 py-1 text-xs font-bold text-primary-container">
                    Stock vérifié
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-20 mx-auto -mt-6 max-w-[1280px] px-6 lg:px-16">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          <div className="flex items-start gap-4 rounded-xl border border-outline-variant/40 bg-white p-5 shadow-sm transition-shadow hover:shadow-md">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary-container">
              <span className="material-symbols-outlined text-[26px]">verified_user</span>
            </div>
            <div>
              <h3 className="text-sm font-bold text-[#0b1c30]">100% Authentiques</h3>
              <p className="mt-1 text-xs leading-snug text-[#434656]">
                Produits d&apos;origine certifiés neufs avec garantie constructeur
                officielle.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 rounded-xl border border-outline-variant/40 bg-white p-5 shadow-sm transition-shadow hover:shadow-md">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary-container">
              <span className="material-symbols-outlined text-[26px]">payments</span>
            </div>
            <div>
              <h3 className="text-sm font-bold text-[#0b1c30]">Prix Compétitifs</h3>
              <p className="mt-1 text-xs leading-snug text-[#434656]">
                Tarification transparente en FCFA sans frais cachés ni surprises.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 rounded-xl border border-outline-variant/40 bg-white p-5 shadow-sm transition-shadow hover:shadow-md">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary-container">
              <span className="material-symbols-outlined text-[26px]">local_shipping</span>
            </div>
            <div>
              <h3 className="text-sm font-bold text-[#0b1c30]">Livraison Express</h3>
              <p className="mt-1 text-xs leading-snug text-[#434656]">
                Expédition ultra-rapide et remise en main propre sécurisée.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 rounded-xl border border-outline-variant/40 bg-white p-5 shadow-sm transition-shadow hover:shadow-md">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#25D366]/15 text-[#25D366]">
              <span className="material-symbols-outlined text-[26px]">support_agent</span>
            </div>
            <div>
              <h3 className="text-sm font-bold text-[#0b1c30]">Assistance WhatsApp 7j/7</h3>
              <p className="mt-1 text-xs leading-snug text-[#434656]">
                Conseillers experts dédiés et réponses instantanées pour votre commande.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1280px] px-6 py-16 lg:px-16">
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-primary-container">
              Univers High-Tech
            </span>
            <h2 className="mt-1 text-2xl font-extrabold text-[#0b1c30] md:text-3xl">
              Catégories populaires
            </h2>
          </div>
          <Link
            href="/categories"
            className="inline-flex items-center gap-1 text-sm font-semibold text-primary-container hover:underline"
          >
            Toutes les catégories
            <span className="material-symbols-outlined text-[18px]">chevron_right</span>
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-3.5 md:grid-cols-4 lg:grid-cols-8">
          {[
            ["smartphone", "Smartphones", "iPhone & Galaxy"],
            ["laptop_mac", "Ordinateurs", "MacBook & Pro"],
            ["tablet_mac", "Tablettes", "iPad & Tab S"],
            ["headphones", "Écouteurs & Audio", "AirPods & ANC"],
            ["watch", "Montres", "Apple Watch"],
            ["cable", "Accessoires", "Chargeurs GaN"],
            ["tv", "Écrans & TV", "Moniteurs 4K"],
            ["sports_esports", "Gaming", "PS5 & Setups"],
          ].map(([icon, name, subtitle]) => (
            <Link
              key={name}
              href="/categories"
              className="group flex flex-col items-center justify-center rounded-xl border border-outline-variant/30 bg-white p-4 text-center transition-all duration-200 hover:-translate-y-1 hover:border-primary-container hover:shadow-md"
            >
              <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-surface-container-low text-primary-container transition-colors group-hover:bg-primary-container group-hover:text-white">
                <span className="material-symbols-outlined text-[28px]">{icon}</span>
              </div>
              <span className="text-xs font-bold text-[#0b1c30] transition-colors group-hover:text-primary-container">
                {name}
              </span>
              <span className="mt-0.5 text-[10px] text-[#434656]">{subtitle}</span>
            </Link>
          ))}
        </div>
      </section>

      <section id="boutique" className="mx-auto max-w-[1280px] px-6 py-8 lg:px-16">
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-primary-container">
              Sélection Premium
            </span>
            <h2 className="mt-1 text-2xl font-extrabold text-[#0b1c30] md:text-3xl">
              Produits populaires &amp; Nouveautés
            </h2>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-medium text-[#434656]">
              Tous nos produits sont neufs, sous blister d&apos;origine scellé.
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <article
              key={product.id}
              className="group flex flex-col overflow-hidden rounded-2xl border border-outline-variant/30 bg-white transition-all duration-300 hover:shadow-xl"
            >
              <div className="relative flex h-64 items-center justify-center overflow-hidden border-b border-outline-variant/20 bg-[#f8f9fc] p-6">
                <Image
                  alt={product.name}
                  className="max-h-full object-contain transition-transform duration-300 group-hover:scale-105 drop-shadow-md"
                  src={product.image}
                  width={360}
                  height={256}
                />
                {product.promo && (
                  <span className="absolute left-3.5 top-3.5 rounded-md bg-error px-2.5 py-1 text-[11px] font-bold text-white shadow-sm">
                    Promo -{product.promo}%
                  </span>
                )}
                <button
                  aria-label="Ajouter aux favoris"
                  className="absolute right-3.5 top-3.5 flex h-8 w-8 items-center justify-center rounded-full bg-white/80 text-[#434656] shadow-sm transition-colors hover:bg-white hover:text-error"
                  type="button"
                >
                  <span className="material-symbols-outlined text-[18px]">favorite</span>
                </button>
              </div>

              <div className="flex flex-1 flex-col p-5">
                <div className="mb-1.5 flex items-center justify-between gap-2">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-primary-container">
                    {product.status ?? product.brand}
                  </span>
                  <div className="flex items-center text-xs font-semibold text-amber-500">
                    <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                      star
                    </span>
                    <span className="ml-1 text-[#0b1c30]">{product.rating}</span>
                    <span className="ml-1 text-[11px] text-[#434656]">
                      (Avis vérifiés)
                    </span>
                  </div>
                </div>

                <h3 className="text-lg font-bold text-[#0b1c30] transition-colors group-hover:text-primary-container">
                  {product.name}
                </h3>

                <p className="mt-1 mb-4 text-xs text-[#434656]">
                  {product.description}
                </p>

                <div className="mt-auto border-t border-outline-variant/20 pt-3">
                  <div className="mb-3 flex items-baseline gap-2">
                    <span className="text-2xl font-black text-primary-container">
                      {new Intl.NumberFormat("fr-FR").format(product.price)} FCFA
                    </span>
                    {product.promo && (
                      <span className="text-sm text-outline line-through">
                        {new Intl.NumberFormat("fr-FR").format(product.price + 60000)} FCFA
                      </span>
                    )}
                  </div>

                  <div className="grid grid-cols-5 gap-2">
                    <Link
                      href={`https://wa.me/?text=${encodeURIComponent(
                        `Bonjour CANARISTECH, je souhaite commander le ${product.name} (${new Intl.NumberFormat("fr-FR").format(product.price)} FCFA)`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="col-span-4 flex items-center justify-center gap-1.5 rounded-lg bg-[#25D366] px-3 py-2.5 text-xs font-semibold text-white shadow-sm transition-all hover:bg-[#1DA851] active:scale-98"
                    >
                      <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                        <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766 0-3.18-2.587-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.007c.106.005.249-.04.39.299.144.347.491 1.2.534 1.288.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.303c-.087.087-.179.182-.077.357.101.174.449.741.964 1.2.662.59 1.221.773 1.394.86.173.086.274.072.376-.044.101-.116.433-.506.549-.679.116-.174.231-.145.39-.087s1.011.477 1.184.564.289.13.332.203c.043.072.043.419-.101.824z" />
                      </svg>
                      <span>Commander sur WhatsApp</span>
                    </Link>

                    <Link
                      href={`/produit/${product.slug}`}
                      aria-label="Voir les détails"
                      className="col-span-1 flex items-center justify-center rounded-lg border border-outline-variant/50 text-[#0b1c30] transition-colors hover:border-primary-container hover:text-primary-container"
                    >
                      <span className="material-symbols-outlined text-[18px]">visibility</span>
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1280px] px-6 py-12 lg:px-16">
        <div className="flex flex-col items-center justify-between gap-8 overflow-hidden rounded-3xl bg-gradient-to-r from-[#0b1c30] via-[#162740] to-[#002f8a] p-8 text-white shadow-2xl md:p-12 lg:flex-row lg:p-14">
          <div className="max-w-2xl space-y-4 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary-container/40 bg-primary-container/30 px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary-fixed">
              <span className="material-symbols-outlined text-[16px] text-amber-400">
                local_fire_department
              </span>
              Offres Limitées
            </div>
            <h2 className="text-3xl font-extrabold leading-tight tracking-tight md:text-4xl lg:text-5xl">
              Les meilleures offres tech du moment
            </h2>
            <p className="text-sm leading-relaxed text-surface-variant/80 md:text-base">
              Bénéficiez de réductions exclusives allant jusqu&apos;à -25% sur nos
              stocks d&apos;ordinateurs portables et packs smartphones + accessoires.
              Disponibilité immédiate en stock.
            </p>
          </div>

          <div className="shrink-0">
            <Link
              href="#boutique"
              className="inline-flex items-center justify-center rounded-xl bg-primary-container px-8 py-4 text-base font-bold text-white shadow-lg shadow-primary-container/40 transition-all duration-200 hover:bg-primary hover:scale-102 active:scale-98"
            >
              Voir les promotions
            </Link>
          </div>
        </div>
      </section>

      <section className="my-10 mx-auto max-w-[1280px] rounded-3xl border-y border-outline-variant/20 bg-white px-6 py-16 lg:px-16">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-wider text-primary-container">
            Expérience Client Simplifiée
          </span>
          <h2 className="mt-1.5 text-2xl font-extrabold text-[#0b1c30] md:text-3xl lg:text-4xl">
            Comment commander en toute simplicité ?
          </h2>
          <p className="mt-2 text-sm text-[#434656]">
            Un processus fluide, direct et sécurisé sans obligation de paiement en
            ligne risqué.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="flex flex-col items-center rounded-2xl border border-outline-variant/30 bg-[#f8f9ff] p-7 text-center">
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-xl font-black text-primary-container shadow-sm">
              1
            </div>
            <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-white text-primary-container shadow-xs">
              <span className="material-symbols-outlined text-[22px]">devices</span>
            </div>
            <h3 className="mb-2 text-base font-bold text-[#0b1c30]">
              Choisissez votre équipement
            </h3>
            <p className="text-xs leading-relaxed text-[#434656]">
              Parcourez notre catalogue et repérez l&apos;appareil certifié de votre
              choix selon vos exigences et votre budget.
            </p>
          </div>

          <div className="flex flex-col items-center rounded-2xl border border-outline-variant/30 bg-[#f8f9ff] p-7 text-center">
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#25D366]/15 text-xl font-black text-[#25D366] shadow-sm">
              2
            </div>
            <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#25D366] shadow-xs">
              <span className="material-symbols-outlined text-[22px]">send</span>
            </div>
            <h3 className="mb-2 text-base font-bold text-[#0b1c30]">
              Cliquez sur « Commander sur WhatsApp »
            </h3>
            <p className="text-xs leading-relaxed text-[#434656]">
              Votre message prérempli avec la référence exacte du produit s&apos;ouvre
              instantanément avec un conseiller disponible.
            </p>
          </div>

          <div className="flex flex-col items-center rounded-2xl border border-outline-variant/30 bg-[#f8f9ff] p-7 text-center">
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-xl font-black text-primary-container shadow-sm">
              3
            </div>
            <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-white text-primary-container shadow-xs">
              <span className="material-symbols-outlined text-[22px]">handshake</span>
            </div>
            <h3 className="mb-2 text-base font-bold text-[#0b1c30]">
              Échangez &amp; Recevez en main propre
            </h3>
            <p className="text-xs leading-relaxed text-[#434656]">
              Concluez les modalités de livraison express sécurisée et vérifiez
              l&apos;emballage scellé à la réception.
            </p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <a
            href="https://wa.me/"
            rel="noopener noreferrer"
            target="_blank"
            className="inline-flex items-center gap-3 rounded-xl bg-[#25D366] px-8 py-4 text-base font-bold text-white shadow-lg shadow-[#25D366]/25 transition-all duration-200 hover:bg-[#1DA851] active:scale-95"
          >
            <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
              <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766 0-3.18-2.587-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.007c.106.005.249-.04.39.299.144.347.491 1.2.534 1.288.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.303c-.087.087-.179.182-.077.357.101.174.449.741.964 1.2.662.59 1.221.773 1.394.86.173.086.274.072.376-.044.101-.116.433-.506.549-.679.116-.174.231-.145.39-.087s1.011.477 1.184.564.289.13.332.203c.043.072.043.419-.101.824z" />
            </svg>
            <span>Échanger avec un conseiller WhatsApp</span>
          </a>
        </div>
      </section>
    </main>
  );
}

