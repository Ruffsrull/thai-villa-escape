import { motion, useInView } from "framer-motion";
import { useRef } from "react";
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

const amenities = [
  { icon: Waves, name: "Privat infinity pool", description: "10x5 meter" },
  { icon: Wifi, name: "Snabbt WiFi", description: "100 Mbit/s" },
  { icon: Wind, name: "Luftkonditionering", description: "I alla rum" },
  { icon: Car, name: "Gratis parkering", description: "2 bilar" },
  { icon: Utensils, name: "Fullt utrustat kök", description: "Modern utrustning" },
  { icon: Tv, name: "Smart TV", description: "Netflix & streaming" },
  { icon: ShowerHead, name: "4 badrum", description: "Med regndusch" },
  { icon: TreePine, name: "Tropisk trädgård", description: "Privat område" },
  { icon: Sun, name: "Solterrass", description: "Med solstolar" },
  { icon: Coffee, name: "Espressomaskin", description: "Nespresso" },
  { icon: Lock, name: "Säkert kassaskåp", description: "I varje sovrum" },
  { icon: Shirt, name: "Tvättmaskin", description: "& torktumlare" },
];

export function Amenities() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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
            Bekvämligheter
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-4">
            Allt du behöver
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Villa Siam är utrustad med allt för en bekväm och lyxig vistelse
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {amenities.map((amenity, index) => (
            <motion.div
              key={amenity.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="group p-6 bg-card rounded-2xl border border-border hover:border-ocean/30 hover:shadow-medium transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-ocean/10 flex items-center justify-center mb-4 group-hover:bg-ocean/20 transition-colors">
                <amenity.icon className="w-6 h-6 text-ocean" />
              </div>
              <h3 className="font-semibold text-foreground mb-1">{amenity.name}</h3>
              <p className="text-sm text-muted-foreground">{amenity.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
