import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "À propos - CanarisTech",
  description:
    "Découvrez l'histoire, la mission et les valeurs de CanarisTech. Expert en distribution d'équipements électroniques et technologies haut de gamme.",
};

export default function AProposPage() {
  return (
    <main className="w-full pt-20 bg-surface-container-lowest min-h-screen">
      <div className="flex flex-col w-full">
        {/* Top Intro / Hero Section */}
        <section className="relative overflow-hidden bg-surface-container-lowest py-16 md:py-24">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-fixed/30 rounded-full blur-3xl pointer-events-none -mr-40 -mt-20"></div>
          <div className="absolute bottom-0 left-10 w-96 h-96 bg-surface-container/60 rounded-full blur-2xl pointer-events-none -mb-32"></div>
          <div className="relative max-w-container mx-auto px-5 lg:px-16 flex flex-col items-center text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-surface-container text-primary font-label-sm text-label-sm mb-6 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              Qui sommes-nous ?
            </div>
            <h1 className="font-display-lg text-display-lg text-on-surface tracking-tight max-w-4xl mx-auto mb-6">
              CANARISTECH : L&apos;Excellence Technologique à Votre Portée
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl mx-auto leading-relaxed">
              Pionnier dans la distribution d&apos;équipements électroniques et
              de technologies de pointe, nous connectons les particuliers et
              entreprises aux meilleurs outils high-tech du marché avec une
              expérience d&apos;achat simplifiée.
            </p>
            {/* Quick Trust Indicators */}
            <div className="mt-10 flex flex-wrap items-center justify-center gap-6 md:gap-12 text-on-surface-variant font-label-sm text-label-sm">
              <div className="flex items-center gap-2">
                <span
                  className="material-symbols-outlined text-primary text-[20px]"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  verified
                </span>
                <span>Matériel 100% Original</span>
              </div>
              <div className="flex items-center gap-2">
                <span
                  className="material-symbols-outlined text-primary text-[20px]"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  local_shipping
                </span>
                <span>Expédition Express &amp; Sécurisée</span>
              </div>
              <div className="flex items-center gap-2">
                <span
                  className="material-symbols-outlined text-primary text-[20px]"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  support_agent
                </span>
                <span>Support Dédié 7j/7</span>
              </div>
            </div>
          </div>
        </section>

        {/* Story & High-Tech Showcase Section */}
        <section className="py-16 md:py-20 bg-surface">
          <div className="max-w-container mx-auto px-5 lg:px-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Visual Column */}
              <div className="lg:col-span-6 relative">
                <div className="relative bg-surface-container-lowest rounded-xl overflow-hidden shadow-xl group">
                  <div className="aspect-[4/3] w-full relative overflow-hidden">
                    <img
                      alt="Curated minimalist desktop setup with laptop, smartphone, headphones and smartwatch"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuAXpuZzrPO_wFCZm3LtW8Kyq13Y6cPAQ07dGsA9Byz2w3AR_jjHOw4DSVEJieANxOLsVDiUN0AWMNbkqKBRHlYa5oUw4TccZGOTwz_QwomtgCSiMva9TXyAS2kzsGr6HVF4CNpbEVrJMwkG90pX5EhXlJIDF2QAi4Mtw8zz8XrcOx932hUN0mc1cxfXBTJWKJSKY0J9VOgEqWUmvMS3oUxE2Cg_NphC2TN-OAjsSfBzNizRwuVjChEgKw"
                    />
                  </div>
                  {/* Floating Badge Overlay */}
                  <div className="absolute bottom-6 left-6 right-6 p-4 rounded-lg bg-surface-container-lowest/90 backdrop-blur-md shadow-md flex items-center justify-between">
                    <div>
                      <span className="block font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">
                        Norme Haute Exigence
                      </span>
                      <span className="font-headline-md text-headline-md font-bold text-on-surface">
                        Produits Sélectionnés
                      </span>
                    </div>
                    <div className="w-12 h-12 rounded-full bg-primary-container text-on-primary flex items-center justify-center shrink-0 shadow-sm">
                      <span className="material-symbols-outlined text-[24px]">
                        workspace_premium
                      </span>
                    </div>
                  </div>
                </div>
                {/* Backing subtle offset card for architectural depth */}
                <div className="absolute -bottom-4 -right-4 w-full h-full bg-primary/5 rounded-xl -z-10 hidden sm:block"></div>
              </div>

              {/* Story Content Column */}
              <div className="lg:col-span-6 flex flex-col justify-center gap-6">
                <div className="inline-flex items-center gap-2 text-primary font-label-sm text-label-sm">
                  <span className="material-symbols-outlined text-[18px]">
                    history_edu
                  </span>
                  <span>NOTRE VISION &amp; ENGAGEMENT</span>
                </div>
                <h2 className="font-headline-md text-headline-md md:font-display-lg md:text-display-lg text-on-surface font-bold tracking-tight">
                  Notre Histoire &amp; Notre Mission
                </h2>
                <div className="flex flex-col gap-4 text-on-surface-variant font-body-md text-body-md leading-relaxed">
                  <p>
                    Fondée par des passionnés de l&apos;écosystème numérique,{" "}
                    <strong className="text-on-surface font-semibold">
                      CANARISTECH
                    </strong>{" "}
                    est née d&apos;un constat sans équivoque : accéder aux
                    technologies haut de gamme (Apple, Samsung, Dell,
                    accessoires spécialisés) reste souvent complexe, opaque ou
                    incertain.
                  </p>
                  <p>
                    Notre mission est de démocratiser le matériel
                    d&apos;exception avec une exigence intransigeante sur
                    l&apos;authenticité et la traçabilité. Chaque terminal
                    bénéficie d&apos;une garantie constructeur effective et
                    d&apos;un contrôle rigoureux avant son expédition.
                  </p>
                  <p>
                    Parce que le temps de nos clients est précieux, nous avons
                    aboli les tunnels de commande désuets : bénéficiez
                    d&apos;une interaction humaine directe, d&apos;un devis
                    instantané et d&apos;une validation express{" "}
                    <strong className="text-on-surface font-semibold">
                      directement sur WhatsApp
                    </strong>{" "}
                    avec nos conseillers techniques.
                  </p>
                </div>
                <div className="pt-4 flex flex-wrap items-center gap-4">
                  <div className="flex items-center gap-3 p-4 rounded-lg bg-surface-container-low flex-1 min-w-[200px]">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-[22px]">
                        verified_user
                      </span>
                    </div>
                    <div>
                      <span className="block font-label-sm text-label-sm font-bold text-on-surface">
                        Garantie 100% Officielle
                      </span>
                      <span className="block font-body-md text-body-md text-on-surface-variant text-xs">
                        Prise en charge intégrale
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-4 rounded-lg bg-surface-container-low flex-1 min-w-[200px]">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-[22px]">
                        bolt
                      </span>
                    </div>
                    <div>
                      <span className="block font-label-sm text-label-sm font-bold text-on-surface">
                        Canal WhatsApp Direct
                      </span>
                      <span className="block font-body-md text-body-md text-on-surface-variant text-xs">
                        Commandes en 2 minutes
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Metrics / Chiffres Clés */}
        <section className="py-14 bg-surface-container-lowest">
          <div className="max-w-container mx-auto px-5 lg:px-16">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Card 1 */}
              <div className="p-8 rounded-xl bg-surface-container-low flex flex-col items-start hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-lg bg-surface-container text-primary flex items-center justify-center mb-4">
                  <span className="material-symbols-outlined text-[28px]">
                    groups
                  </span>
                </div>
                <span className="font-display-lg text-display-lg font-bold text-primary mb-1">
                  10,000+
                </span>
                <span className="font-headline-md text-headline-md text-on-surface font-semibold mb-2">
                  Clients Satisfaits
                </span>
                <p className="font-body-md text-body-md text-on-surface-variant text-sm">
                  Particuliers exigeants et structures professionnelles équipés à
                  ce jour.
                </p>
              </div>

              {/* Card 2 */}
              <div className="p-8 rounded-xl bg-surface-container-low flex flex-col items-start hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-lg bg-surface-container text-primary flex items-center justify-center mb-4">
                  <span className="material-symbols-outlined text-[28px]">
                    verified
                  </span>
                </div>
                <span className="font-display-lg text-display-lg font-bold text-primary mb-1">
                  100%
                </span>
                <span className="font-headline-md text-headline-md text-on-surface font-semibold mb-2">
                  Certifiés &amp; Authentiques
                </span>
                <p className="font-body-md text-body-md text-on-surface-variant text-sm">
                  Produits scellés d&apos;origine sous garanties fabricants
                  irrévocables.
                </p>
              </div>

              {/* Card 3 */}
              <div className="p-8 rounded-xl bg-surface-container-low flex flex-col items-start hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-lg bg-surface-container text-primary flex items-center justify-center mb-4">
                  <span className="material-symbols-outlined text-[28px]">
                    schedule
                  </span>
                </div>
                <span className="font-display-lg text-display-lg font-bold text-primary mb-1">
                  24/48h
                </span>
                <span className="font-headline-md text-headline-md text-on-surface font-semibold mb-2">
                  Délai Moyen
                </span>
                <p className="font-body-md text-body-md text-on-surface-variant text-sm">
                  Logistique optimisée pour des livraisons rapides et sécurisées
                  en main propre.
                </p>
              </div>

              {/* Card 4 */}
              <div className="p-8 rounded-xl bg-surface-container-low flex flex-col items-start hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-lg bg-surface-container text-primary flex items-center justify-center mb-4">
                  <span className="material-symbols-outlined text-[28px]">
                    thumb_up
                  </span>
                </div>
                <span className="font-display-lg text-display-lg font-bold text-primary mb-1">
                  99.2%
                </span>
                <span className="font-headline-md text-headline-md text-on-surface font-semibold mb-2">
                  Taux de Satisfaction
                </span>
                <p className="font-body-md text-body-md text-on-surface-variant text-sm">
                  Évalué en continu grâce à notre protocole de suivi
                  post-livraison.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Nos Valeurs Fondamentales */}
        <section className="py-16 md:py-24 bg-surface">
          <div className="max-w-container mx-auto px-5 lg:px-16">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
              <div>
                <span className="text-primary font-label-sm text-label-sm uppercase tracking-wider block mb-2">
                  Notre Philosophie
                </span>
                <h2 className="font-display-lg text-display-lg text-on-surface font-bold">
                  Nos Valeurs Fondamentales
                </h2>
              </div>
              <p className="font-body-md text-body-md text-on-surface-variant max-w-md mt-4 md:mt-0">
                Les principes directeurs qui régissent chaque interaction, de la
                sélection méticuleuse du matériel jusqu&apos;à l&apos;accompagnement
                d&apos;usage.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Value 1 */}
              <div className="bg-surface-container-lowest p-8 rounded-xl shadow-sm hover:shadow-lg transition-all flex flex-col justify-between">
                <div>
                  <div className="w-14 h-14 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-6">
                    <span className="material-symbols-outlined text-[32px]">
                      check_circle
                    </span>
                  </div>
                  <h3 className="font-headline-md text-headline-md font-bold text-on-surface mb-3">
                    Authenticité &amp; Qualité
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                    Aucun compromis sur la provenance de nos appareils. Nous ne
                    traitons qu&apos;avec les circuits officiels garantissant des
                    produits neufs et authentifiés.
                  </p>
                </div>
                <div className="mt-6 pt-4 flex items-center text-primary font-label-sm text-label-sm">
                  <span>Traçabilité certifiée</span>
                  <span className="material-symbols-outlined text-[18px] ml-1">
                    arrow_forward
                  </span>
                </div>
              </div>

              {/* Value 2 */}
              <div className="bg-surface-container-lowest p-8 rounded-xl shadow-sm hover:shadow-lg transition-all flex flex-col justify-between">
                <div>
                  <div className="w-14 h-14 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-6">
                    <span className="material-symbols-outlined text-[32px]">
                      forum
                    </span>
                  </div>
                  <h3 className="font-headline-md text-headline-md font-bold text-on-surface mb-3">
                    Proximité &amp; Simplicité
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                    Pas de barrière technologique ni de formulaires interminables.
                    Commandez directement en quelques secondes via notre
                    passerelle WhatsApp dédiée.
                  </p>
                </div>
                <div className="mt-6 pt-4 flex items-center text-primary font-label-sm text-label-sm">
                  <span>Zéro friction</span>
                  <span className="material-symbols-outlined text-[18px] ml-1">
                    arrow_forward
                  </span>
                </div>
              </div>

              {/* Value 3 */}
              <div className="bg-surface-container-lowest p-8 rounded-xl shadow-sm hover:shadow-lg transition-all flex flex-col justify-between">
                <div>
                  <div className="w-14 h-14 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-6">
                    <span className="material-symbols-outlined text-[32px]">
                      psychology
                    </span>
                  </div>
                  <h3 className="font-headline-md text-headline-md font-bold text-on-surface mb-3">
                    Conseil d&apos;Expert
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                    Une équipe passionnée disponible 7j/7 pour vous guider selon
                    votre budget, votre workflow pro ou vos exigences de
                    divertissement.
                  </p>
                </div>
                <div className="mt-6 pt-4 flex items-center text-primary font-label-sm text-label-sm">
                  <span>Accompagnement humain</span>
                  <span className="material-symbols-outlined text-[18px] ml-1">
                    arrow_forward
                  </span>
                </div>
              </div>

              {/* Value 4 */}
              <div className="bg-surface-container-lowest p-8 rounded-xl shadow-sm hover:shadow-lg transition-all flex flex-col justify-between">
                <div>
                  <div className="w-14 h-14 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-6">
                    <span className="material-symbols-outlined text-[32px]">
                      headset_mic
                    </span>
                  </div>
                  <h3 className="font-headline-md text-headline-md font-bold text-on-surface mb-3">
                    SAV Réactif
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                    Accompagnement technique à la configuration, assistance au
                    démarrage et prise en charge express pour toute demande
                    après-vente.
                  </p>
                </div>
                <div className="mt-6 pt-4 flex items-center text-primary font-label-sm text-label-sm">
                  <span>Assistance active</span>
                  <span className="material-symbols-outlined text-[18px] ml-1">
                    arrow_forward
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pourquoi Choisir CANARISTECH (Bento Feature Showcase) */}
        <section className="py-16 md:py-20 bg-surface-container-lowest">
          <div className="max-w-container mx-auto px-5 lg:px-16">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-primary font-label-sm text-label-sm uppercase tracking-wider block mb-2">
                Avantages Concrets
              </span>
              <h2 className="font-display-lg text-display-lg text-on-surface font-bold mb-4">
                Pourquoi Choisir CANARISTECH ?
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Nous redéfinissons les standards du commerce high-tech en
                éliminant les intermédiaires superflus pour vous garantir la
                meilleure expérience possible.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Feature 1 */}
              <div className="p-8 rounded-xl bg-surface-container-low flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-lg bg-surface-container-lowest text-primary flex items-center justify-center mb-6 shadow-sm">
                    <span className="material-symbols-outlined text-[26px]">
                      inventory_2
                    </span>
                  </div>
                  <h3 className="font-headline-md text-headline-md font-bold text-on-surface mb-3">
                    Stock Réel &amp; Disponible
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    Nos disponibilités affichées sont synchronisées avec nos
                    entrepôts. Pas de mauvaise surprise ni d&apos;attente imprévue
                    après confirmation.
                  </p>
                </div>
                <ul className="mt-6 space-y-2 text-on-surface font-label-sm text-label-sm">
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary text-[18px]">
                      check
                    </span>
                    Disponibilité immédiate vérifiée
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary text-[18px]">
                      check
                    </span>
                    Réservation instantanée via WhatsApp
                  </li>
                </ul>
              </div>

              {/* Feature 2 */}
              <div className="p-8 rounded-xl bg-surface-container-low flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-lg bg-surface-container-lowest text-primary flex items-center justify-center mb-6 shadow-sm">
                    <span className="material-symbols-outlined text-[26px]">
                      fact_check
                    </span>
                  </div>
                  <h3 className="font-headline-md text-headline-md font-bold text-on-surface mb-3">
                    Tests Qualité Avant Envoi
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    Chaque produit fait l&apos;objet d&apos;une vérification minutieuse
                    des scellés, de l&apos;état de l&apos;emballage et de l&apos;intégrité de
                    ses composants avant son départ.
                  </p>
                </div>
                <ul className="mt-6 space-y-2 text-on-surface font-label-sm text-label-sm">
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary text-[18px]">
                      check
                    </span>
                    Scellés constructeurs intacts
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary text-[18px]">
                      check
                    </span>
                    Audit visuel et traçabilité du numéro de série
                  </li>
                </ul>
              </div>

              {/* Feature 3 */}
              <div className="p-8 rounded-xl bg-surface-container-low flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-lg bg-surface-container-lowest text-primary flex items-center justify-center mb-6 shadow-sm">
                    <span className="material-symbols-outlined text-[26px]">
                      security
                    </span>
                  </div>
                  <h3 className="font-headline-md text-headline-md font-bold text-on-surface mb-3">
                    Acheminement Sécurisé
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    Nos colis sont manipulés avec précaution dans des
                    conditionnements antichoc blindés, avec remise personnalisée
                    contre signature.
                  </p>
                </div>
                <ul className="mt-6 space-y-2 text-on-surface font-label-sm text-label-sm">
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary text-[18px]">
                      check
                    </span>
                    Colis renforcé &amp; scellé
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary text-[18px]">
                      check
                    </span>
                    Option de paiement à la remise (selon zone)
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Interactive Testimonial / Trust Quote Section */}
        <section className="py-14 bg-surface">
          <div className="max-w-container mx-auto px-5 lg:px-16">
            <div className="p-8 md:p-12 rounded-xl bg-surface-container-lowest shadow-sm flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="flex items-start gap-5 max-w-2xl">
                <div className="w-14 h-14 rounded-full bg-primary-fixed text-primary flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[30px]">
                    format_quote
                  </span>
                </div>
                <div>
                  <p className="font-headline-md text-headline-md text-on-surface font-semibold mb-2">
                    « Nous concevons la relation technologique comme un
                    partenariat de confiance durable, où la réactivité humaine
                    compte autant que la performance de la puce. »
                  </p>
                  <span className="font-label-sm text-label-sm text-on-surface-variant">
                    La Direction Générale • CANARISTECH
                  </span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row items-center gap-4 w-full md:w-auto shrink-0">
                <a
                  className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 rounded-lg bg-surface-container text-on-surface font-button-text text-button-text hover:bg-surface-container-high transition-colors"
                  href="/boutique"
                >
                  Voir le catalogue
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* WhatsApp Call to Action Banner */}
        <section className="py-16 md:py-24 bg-surface-container-lowest relative overflow-hidden">
          {/* Subtle backdrop element */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5 pointer-events-none"></div>
          <div className="relative max-w-container mx-auto px-5 lg:px-16">
            <div className="bg-inverse-surface text-inverse-on-surface rounded-xl p-8 md:p-16 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-10">
              <div className="max-w-2xl text-center lg:text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container-highest/20 text-primary-fixed text-label-sm font-label-sm mb-4">
                  <span className="w-2 h-2 rounded-full bg-[#25D366] animate-ping"></span>
                  Conseillers en ligne actuellement
                </div>
                <h2 className="font-display-lg text-display-lg font-bold text-surface-container-lowest mb-4">
                  Prêt à équiper votre quotidien ou votre entreprise ?
                </h2>
                <p className="font-body-lg text-body-lg text-outline-variant">
                  Nos conseillers sont disponibles dès maintenant pour vous
                  orienter vers le meilleur choix et établir un devis immédiat.
                </p>
              </div>
              <div className="flex flex-col items-center sm:items-end gap-3 shrink-0">
                <a
                  className="group inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20ba59] text-surface-container-lowest font-button-text text-button-text px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5 text-center"
                  href="https://wa.me/?text=Bonjour%20CANARISTECH%2C%20j%27aimerais%20connaitre%20vos%20services."
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span className="material-symbols-outlined text-[24px]">
                    chat
                  </span>
                  <span>Discuter avec un conseiller WhatsApp</span>
                </a>
                <div className="flex items-center gap-2 text-outline-variant font-label-sm text-label-sm">
                  <span className="material-symbols-outlined text-[16px] text-[#25D366]">
                    bolt
                  </span>
                  <span>Réponse en moins de 5 minutes</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
