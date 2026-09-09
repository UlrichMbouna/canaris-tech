import Link from "next/link";

const Icon = ({ children, className = "" }: { children: string; className?: string }) => (
  <span aria-hidden="true" className={`material-symbols-outlined ${className}`}>
    {children}
  </span>
);

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-container px-5 py-14 lg:px-16 min-h-screen flex flex-col">
      <Link href="/" className="inline-flex items-center gap-2 text-primary hover:underline font-semibold mb-8">
        <Icon className="text-[20px]">arrow_back</Icon>
        Retourner à l'accueil
      </Link>

      <div className="mb-8 text-center md:text-left">
        <h1 className="font-display-lg text-display-lg text-on-surface mb-3">Contactez-nous</h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
          Notre équipe d'experts est à votre disposition pour vous accompagner dans vos projets technologiques. Écrivez-nous ou venez nous rendre visite.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 flex-grow">
        {/* Left Column: Info & Map */}
        <div className="md:col-span-5 flex flex-col gap-8">
          {/* Contact Details Card */}
          <div className="bg-surface-container-lowest rounded-xl p-8 shadow-sm border border-outline-variant/30">
            <h2 className="font-headline-md text-headline-md mb-4 text-on-surface">Coordonnées</h2>
            <ul className="flex flex-col gap-4 font-body-md text-body-md text-on-surface-variant">
              <li className="flex items-start gap-3">
                <Icon className="text-primary-container">location_on</Icon>
                <div>
                  <strong className="text-on-surface block mb-1">Adresse</strong>
                  123 Avenue de la Technologie
                  <br />
                  Quartier des Affaires
                  <br />
                  Ville, Pays 12345
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Icon className="text-primary-container">phone</Icon>
                <div>
                  <strong className="text-on-surface mr-2">Téléphone:</strong> +1 (555) 123-4567
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Icon className="text-primary-container">mail</Icon>
                <div>
                  <strong className="text-on-surface mr-2">Email:</strong> contact@canaristech.com
                </div>
              </li>
              <li className="flex items-start gap-3 mt-3 pt-3 border-t border-outline-variant/20">
                <Icon className="text-primary-container">schedule</Icon>
                <div>
                  <strong className="text-on-surface block mb-1">Heures d'ouverture</strong>
                  Lundi - Vendredi : 9h00 - 18h00
                  <br />
                  Samedi : 10h00 - 14h00
                </div>
              </li>
            </ul>

            {/* Prominent WhatsApp CTA */}
            <div className="mt-8">
              <a
                href="https://wa.me/?text=Bonjour%20CanarisTech%2C%20j%27aimerais%20avoir%20plus%20d%27informations."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1EBE5A] text-white rounded-lg px-6 py-4 font-button-text text-button-text transition-all duration-200 shadow-sm active:scale-95"
              >
                <svg
                  fill="currentColor"
                  height="24"
                  viewBox="0 0 24 24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"></path>
                </svg>
                Discuter sur WhatsApp
              </a>
            </div>
          </div>

          {/* Map Placeholder */}
          <div className="h-64 rounded-xl overflow-hidden shadow-sm border border-outline-variant/30 relative bg-surface-container flex items-center justify-center">
            <img
              className="absolute inset-0 w-full h-full object-cover opacity-80"
              alt="Carte de localisation"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBkAC_uFjDFmd1bl6TniNZtL92XjIs-5OF6k0_cjmqhD0uhemYdEpNspHVZvpOiPA8g7UsQHpSdiuUf44-XrB2w-khPVCN_lJIefpqyCrHhUabMhP_Brn8aWtrklze5Qd3sln3ETpniFQ30oWDl1MiqBqkUbduF8a_0YyavgjKjcG6LztC4i5hwoMcZs11dLhTyY7hlpQrLoilOt2pIgHyTUxH3B6Pvst9ALbCL3Ctggw9CjUvUKoMdpA"
            />
            <div className="z-10 bg-surface/90 backdrop-blur-sm px-4 py-2 rounded-lg font-label-sm text-label-sm text-on-surface shadow-sm border border-outline-variant/20 flex items-center gap-2">
              <Icon className="text-primary-container" style={{ fontVariationSettings: "'FILL' 1" }}>
                location_on
              </Icon>
              Carte (Emplacement)
            </div>
          </div>
        </div>

        {/* Right Column: Form */}
        <div className="md:col-span-7">
          <div className="bg-surface-container-lowest rounded-xl p-8 shadow-sm border border-outline-variant/30 h-full">
            <h2 className="font-headline-md text-headline-md mb-4 text-on-surface">Envoyez-nous un message</h2>
            <form className="flex flex-col gap-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1">
                  <label className="font-label-sm text-label-sm text-on-surface-variant" htmlFor="firstName">
                    Prénom
                  </label>
                  <input
                    className="bg-surface-container border border-outline-variant/30 focus:border-primary focus:ring-1 focus:ring-primary rounded-lg p-3 font-body-md text-body-md text-on-surface outline-none transition-all"
                    id="firstName"
                    placeholder="Jean"
                    type="text"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="font-label-sm text-label-sm text-on-surface-variant" htmlFor="lastName">
                    Nom
                  </label>
                  <input
                    className="bg-surface-container border border-outline-variant/30 focus:border-primary focus:ring-1 focus:ring-primary rounded-lg p-3 font-body-md text-body-md text-on-surface outline-none transition-all"
                    id="lastName"
                    placeholder="Dupont"
                    type="text"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1">
                <label className="font-label-sm text-label-sm text-on-surface-variant" htmlFor="email">
                  Adresse Email
                </label>
                <input
                  className="bg-surface-container border border-outline-variant/30 focus:border-primary focus:ring-1 focus:ring-primary rounded-lg p-3 font-body-md text-body-md text-on-surface outline-none transition-all"
                  id="email"
                  placeholder="jean.dupont@exemple.com"
                  type="email"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="font-label-sm text-label-sm text-on-surface-variant" htmlFor="subject">
                  Sujet
                </label>
                <div className="relative">
                  <select
                    className="w-full bg-surface-container border border-outline-variant/30 focus:border-primary focus:ring-1 focus:ring-primary rounded-lg p-3 font-body-md text-body-md text-on-surface outline-none transition-all appearance-none"
                    id="subject"
                  >
                    <option disabled selected value="">
                      Sélectionnez un sujet
                    </option>
                    <option value="sales">Ventes & Devis</option>
                    <option value="support">Support Technique</option>
                    <option value="partnership">Partenariat</option>
                    <option value="other">Autre</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-on-surface-variant">
                    <Icon>expand_more</Icon>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-1 flex-grow">
                <label className="font-label-sm text-label-sm text-on-surface-variant" htmlFor="message">
                  Message
                </label>
                <textarea
                  className="bg-surface-container border border-outline-variant/30 focus:border-primary focus:ring-1 focus:ring-primary rounded-lg p-3 font-body-md text-body-md text-on-surface outline-none transition-all resize-none"
                  id="message"
                  placeholder="Comment pouvons-nous vous aider ?"
                  rows={5}
                ></textarea>
              </div>

              <button
                className="mt-3 w-full bg-primary-container hover:bg-primary text-on-primary rounded-lg py-4 font-button-text text-button-text transition-all duration-200 shadow-sm active:scale-95 flex items-center justify-center gap-2"
                type="submit"
              >
                Envoyer le message
                <Icon className="text-sm">send</Icon>
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
