import { useTranslation } from 'react-i18next';

const languages = [
  { code: 'en', label: 'EN' },
  { code: 'se', label: 'SE' },
  { code: 'no', label: 'NO' },
  { code: 'de', label: 'DE' },
  { code: 'fr', label: 'FR' },
];

export function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const getCurrentLanguage = () => {
    const lang = i18n.language;
    // Normalize language codes
    if (lang.startsWith('sv')) return 'se';
    if (lang.startsWith('nb') || lang.startsWith('nn')) return 'no';
    if (lang.startsWith('en')) return 'en';
    if (lang.startsWith('de')) return 'de';
    if (lang.startsWith('fr')) return 'fr';
    return 'en';
  };

  const currentLang = getCurrentLanguage();

  return (
    <div className="flex flex-wrap gap-2">
      {languages.map((lang) => (
        <button
          key={lang.code}
          onClick={() => i18n.changeLanguage(lang.code)}
          className={`px-3 py-1.5 rounded-full text-sm transition-colors ${
            currentLang === lang.code
              ? 'bg-ocean text-primary-foreground'
              : 'bg-primary-foreground/10 text-primary-foreground/70 hover:bg-primary-foreground/20'
          }`}
        >
          {lang.label}
        </button>
      ))}
    </div>
  );
}
