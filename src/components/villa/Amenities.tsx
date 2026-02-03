import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useTranslation } from "react-i18next";
import {
  Waves,
  Wifi,
  Wind,
  Car,
  Utensils,
  Tv,
  ShowerHead,
  TreePine,
  Sun,
  Coffee,
  Lock,
  Shirt,
} from "lucide-react";

export function Amenities() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useTranslation();

  const amenities = [
    { icon: Waves, name: t('amenities.items.privatePool'), description: "10x5 meters" },
    { icon: Wifi, name: t('amenities.items.fiberInternet'), description: "High-speed fiber" },
    { icon: Wind, name: t('amenities.items.airConditioning'), description: "In all rooms" },
    { icon: Car, name: t('amenities.items.freeParking'), description: "2 cars" },
    { icon: Utensils, name: t('amenities.items.fullyEquippedKitchen'), description: "Modern appliances" },
    { icon: Tv, name: t('amenities.items.flatscreenTV'), description: "Netflix & streaming" },
    { icon: ShowerHead, name: "4 bathrooms", description: "With rain shower" },
    { icon: TreePine, name: t('amenities.items.tropicalGarden'), description: "Private area" },
    { icon: Sun, name: t('amenities.items.sunLoungers'), description: "Sun terrace" },
    { icon: Coffee, name: "Espresso machine", description: "Nespresso" },
    { icon: Lock, name: "Secure safe", description: "In each bedroom" },
    { icon: Shirt, name: t('amenities.items.washingMachine'), description: "& tumble dryer" },
  ];

  return (
    <section id="amenities" className="py-24 md:py-32 bg-background" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-ocean font-medium text-sm tracking-widest uppercase mb-4 block">
            {t('amenities.label')}
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-4">
            {t('amenities.title')}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t('amenities.description')}
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {amenities.map((amenity, index) => (
            <motion.div
              key={amenity.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="group p-4 md:p-6 bg-card rounded-2xl border border-border hover:border-ocean/30 hover:shadow-medium transition-all duration-300"
            >
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-ocean/10 flex items-center justify-center mb-3 md:mb-4 group-hover:bg-ocean/20 transition-colors">
                <amenity.icon className="w-5 h-5 md:w-6 md:h-6 text-ocean" />
              </div>
              <h3 className="font-semibold text-foreground mb-1 text-sm md:text-base">{amenity.name}</h3>
              <p className="text-xs md:text-sm text-muted-foreground">{amenity.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
