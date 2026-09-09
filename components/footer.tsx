import Link from "next/link";

export function Footer() {
  return (
    <footer className="w-full border-t border-outline-variant/10 bg-[#0b1c30] pt-16 pb-12 text-white">
      <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-10 px-6 md:grid-cols-2 lg:grid-cols-5 lg:px-16">
        <div className="space-y-4 lg:col-span-2">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary-container text-xl font-black text-white">
              C
            </div>
            <span className="text-2xl font-black tracking-tight text-white">
              CANARISTECH
            </span>
          </div>

          <p className="max-w-sm text-xs leading-relaxed text-surface-variant/70">
            Votre référence high-tech en électronique premium : smartphones scellés,
            ordinateurs portables haut de gamme, accessoires authentiques et
            assistance directe 7j/7 via WhatsApp.
          </p>

          <div className="pt-2">
            <a
              className="inline-flex items-center gap-2 rounded-lg border border-[#25D366]/40 bg-[#25D366]/20 px-3.5 py-2 text-xs font-semibold text-[#25D366] transition-all hover:bg-[#25D366] hover:text-white"
              href="https://wa.me/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766 0-3.18-2.587-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.007c.106.005.249-.04.39.299.144.347.491 1.2.534 1.288.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.303c-.087.087-.179.182-.077.357.101.174.449.741.964 1.2.662.59 1.221.773 1.394.86.173.086.274.072.376-.044.101-.116.433-.506.549-.679.116-.174.231-.145.39-.087s1.011.477 1.184.564.289.13.332.203c.043.072.043.419-.101.824z" />
              </svg>
              <span>Assistance WhatsApp Active</span>
            </a>
          </div>
        </div>

        <div>
          <h4 className="mb-4 text-xs font-bold uppercase tracking-wider text-white">
            Catalogue
          </h4>
          <ul className="space-y-2.5 text-xs text-surface-variant/70">
            <li>
              <Link href="/boutique" className="transition-colors hover:text-white">
                Smartphones scellés
              </Link>
            </li>
            <li>
              <Link href="/boutique" className="transition-colors hover:text-white">
                Ordinateurs MacBook &amp; PC
              </Link>
            </li>
            <li>
              <Link href="/boutique" className="transition-colors hover:text-white">
                Tablettes &amp; iPad
              </Link>
            </li>
            <li>
              <Link href="/boutique" className="transition-colors hover:text-white">
                Audio &amp; Écouteurs sans fil
              </Link>
            </li>
            <li>
              <Link href="/boutique" className="transition-colors hover:text-white">
                Montres connectées
              </Link>
            </li>
            <li>
              <Link href="/boutique" className="transition-colors hover:text-white">
                Accessoires &amp; Chargeurs GaN
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-xs font-bold uppercase tracking-wider text-white">
            Services &amp; Garanties
          </h4>
          <ul className="space-y-2.5 text-xs text-surface-variant/70">
            <li>
              <Link href="/a-propos" className="transition-colors hover:text-white">
                Authenticité garantie 100%
              </Link>
            </li>
            <li>
              <Link href="/contact" className="transition-colors hover:text-white">
                Modalités de livraison
              </Link>
            </li>
            <li>
              <Link href="/contact" className="transition-colors hover:text-white">
                Service Après-Vente (SAV)
              </Link>
            </li>
            <li>
              <Link href="/contact" className="transition-colors hover:text-white">
                Paiement à la livraison
              </Link>
            </li>
            <li>
              <Link href="/contact" className="transition-colors hover:text-white">
                Suivi de commande
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-xs font-bold uppercase tracking-wider text-white">
            Informations
          </h4>
          <ul className="space-y-2.5 text-xs text-surface-variant/70">
            <li>
              <Link href="/a-propos" className="transition-colors hover:text-white">
                Politique de confidentialité
              </Link>
            </li>
            <li>
              <Link href="/contact" className="transition-colors hover:text-white">
                Conditions Générales de Vente
              </Link>
            </li>
            <li>
              <Link href="/a-propos" className="transition-colors hover:text-white">
                Mentions légales
              </Link>
            </li>
            <li>
              <Link href="/contact" className="transition-colors hover:text-white">
                Contact &amp; Showroom
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-12 flex max-w-[1280px] flex-col items-center justify-between gap-4 border-t border-white/10 px-6 pt-6 text-xs text-surface-variant/50 sm:flex-row lg:px-16">
        <p>© 2024 CANARISTECH. Tous droits réservés. Produits neufs garantis constructeur.</p>
        <p className="flex items-center gap-2">
          <span>Développé pour l&apos;excellence tech</span>
          <span>•</span>
          <span className="font-medium text-white">Prix en Franc CFA (FCFA)</span>
        </p>
      </div>
    </footer>
  );
}
