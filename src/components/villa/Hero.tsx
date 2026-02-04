import { motion } from "framer-motion";
import { Users, Bed, Waves, Wifi, MapPin } from "lucide-react";
import { useTranslation } from "react-i18next";
import poolSunset from "@/assets/pool-sunset.jpg";

export function Hero() {
  const { t } = useTranslation();

  const quickFacts = [
    { icon: Users, label: t('hero.guests') },
    { icon: Bed, label: t('hero.bedrooms') },
    { icon: Waves, label: t('hero.privatePool') },
    { icon: Wifi, label: t('hero.fiberInternet') },
  ];

  return (
    <section className="relative min-h-screen flex items-end pb-20 pt-32 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={poolSunset}
          alt="Cape Villa pool at sunset"
          className="w-full h-full object-cover"
        />
        <div 
          className="absolute inset-0"
          style={{ background: "linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.5) 100%)" }}
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center gap-2 text-primary-foreground/80 mb-4"
          >
            <MapPin className="w-4 h-4" />
            <span className="text-sm font-medium tracking-wide uppercase">
              {t('hero.location')}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-serif text-5xl md:text-7xl lg:text-8xl font-medium text-primary-foreground mb-6 leading-tight"
          >
            {t('brand.name')}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-xl font-light"
          >
            {t('hero.tagline')}
          </motion.p>

          {/* Quick Facts */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-wrap gap-4 mb-10"
          >
            {quickFacts.map((fact, index) => (
              <div
                key={index}
                className="flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm px-4 py-2 rounded-full border border-primary-foreground/20"
              >
                <fact.icon className="w-4 h-4 text-primary-foreground" />
                <span className="text-sm text-primary-foreground font-medium">
                  {fact.label}
                </span>
              </div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="#contact"
              className="inline-flex items-center justify-center bg-primary-foreground text-primary hover:bg-primary-foreground/90 text-base font-medium px-8 py-4 rounded-full shadow-strong transition-colors"
            >
              {t('nav.bookNow')}
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center border-2 border-primary-foreground/50 text-primary-foreground hover:bg-primary-foreground/10 text-base font-medium px-8 py-4 rounded-full backdrop-blur-sm transition-colors"
            >
              {t('nav.sendInquiry')}
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-primary-foreground/60"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-primary-foreground/40 rounded-full flex justify-center pt-2"
        >
          <div className="w-1.5 h-1.5 bg-primary-foreground/60 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
