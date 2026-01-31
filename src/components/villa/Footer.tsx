import { Facebook, Instagram, Mail } from "lucide-react";

const languages = [
  { code: "SE", label: "Svenska" },
  { code: "NO", label: "Norsk" },
  { code: "EN", label: "English" },
  { code: "DE", label: "Deutsch" },
  { code: "FR", label: "Français" },
];

export function Footer() {
  return (
    <footer className="bg-foreground text-primary-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <h3 className="font-serif text-3xl font-medium mb-4">Villa Siam</h3>
            <p className="text-primary-foreground/70 max-w-md mb-6">
              En exklusiv thailändsk villa med privat pool och fantastisk havsutsikt. 
              Din drömresa börjar här.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="mailto:info@villasiam.com"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Snabblänkar</h4>
            <ul className="space-y-3">
              <li>
                <a href="#about" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  Om villan
                </a>
              </li>
              <li>
                <a href="#gallery" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  Galleri
                </a>
              </li>
              <li>
                <a href="#amenities" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  Bekvämligheter
                </a>
              </li>
              <li>
                <a href="#location" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  Läge
                </a>
              </li>
              <li>
                <a href="#contact" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  Kontakt
                </a>
              </li>
            </ul>
          </div>

          {/* Languages */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Språk</h4>
            <div className="flex flex-wrap gap-2">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  className={`px-3 py-1.5 rounded-full text-sm transition-colors ${
                    lang.code === "SE"
                      ? "bg-ocean text-primary-foreground"
                      : "bg-primary-foreground/10 text-primary-foreground/70 hover:bg-primary-foreground/20"
                  }`}
                >
                  {lang.code}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/50 text-sm">
            © {new Date().getFullYear()} Villa Siam. Alla rättigheter förbehållna.
          </p>
          <div className="flex gap-6 text-sm text-primary-foreground/50">
            <a href="#" className="hover:text-primary-foreground/80 transition-colors">
              Integritetspolicy
            </a>
            <a href="#" className="hover:text-primary-foreground/80 transition-colors">
              Bokningsvillkor
            </a>
            <a href="#" className="hover:text-primary-foreground/80 transition-colors">
              GDPR
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
