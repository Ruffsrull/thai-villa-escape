import { Facebook, Instagram, Mail } from "lucide-react";
import { useTranslation } from "react-i18next";
import { LanguageSwitcher } from "./LanguageSwitcher";

export function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-foreground text-primary-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <h3 className="font-serif text-3xl font-medium mb-4">{t('brand.name')}</h3>
            <p className="text-primary-foreground/70 max-w-md mb-6">
              {t('footer.description')}
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
                href="mailto:info@capevilla.com"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">{t('footer.quickLinks')}</h4>
            <ul className="space-y-3">
              <li>
                <a href="#about" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  {t('footer.aboutVilla')}
                </a>
              </li>
              <li>
                <a href="#gallery" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  {t('nav.gallery')}
                </a>
              </li>
              <li>
                <a href="#amenities" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  {t('nav.amenities')}
                </a>
              </li>
              <li>
                <a href="#location" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  {t('nav.location')}
                </a>
              </li>
              <li>
                <a href="#contact" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  {t('nav.contact')}
                </a>
              </li>
            </ul>
          </div>

          {/* Languages */}
          <div>
            <h4 className="font-semibold text-lg mb-4">{t('footer.language')}</h4>
            <LanguageSwitcher />
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/50 text-sm">
            {t('footer.copyright', { year: new Date().getFullYear() })}
          </p>
          <div className="flex gap-6 text-sm text-primary-foreground/50">
            <a href="#" className="hover:text-primary-foreground/80 transition-colors">
              {t('footer.privacyPolicy')}
            </a>
            <a href="#" className="hover:text-primary-foreground/80 transition-colors">
              {t('footer.bookingTerms')}
            </a>
            <a href="#" className="hover:text-primary-foreground/80 transition-colors">
              {t('footer.gdpr')}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
