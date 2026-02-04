import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();

  const navItems = [
    { label: t('nav.theVilla'), href: "#about" },
    { label: t('nav.gallery'), href: "#gallery" },
    { label: t('nav.amenities'), href: "#amenities" },
    { label: t('nav.location'), href: "#location" },
    { label: t('nav.info'), href: "#info" },
    { label: t('nav.contact'), href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="bg-background/80 backdrop-blur-md border-b border-border/50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <a href="#" className="flex items-center gap-2">
              <span className="font-serif text-2xl md:text-3xl font-semibold text-primary">
                {t('brand.name')}
              </span>
            </a>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-8">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            {/* CTA Buttons */}
            <div className="hidden md:flex items-center gap-4">
              <Button variant="ghost" size="sm" className="gap-2">
                <Phone className="w-4 h-4" />
                <span className="hidden xl:inline">+66 123 456 789</span>
              </Button>
              <a
                href="#contact"
                className="inline-flex items-center justify-center h-10 px-4 rounded-md font-medium text-sm bg-gradient-ocean text-primary-foreground hover:opacity-90 transition-opacity"
              >
                {t('nav.bookNow')}
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-foreground"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-background border-b border-border overflow-hidden"
          >
            <nav className="container mx-auto px-4 py-4 flex flex-col gap-2">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="py-3 text-lg font-medium text-foreground hover:text-primary transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <div className="pt-4 border-t border-border mt-2">
                <a
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  className="block w-full text-center py-3 rounded-md font-medium text-sm bg-gradient-ocean text-primary-foreground"
                >
                  {t('nav.bookNow')}
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
