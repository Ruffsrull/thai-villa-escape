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
  { icon: Waves, name: "Private infinity pool", description: "10x5 meters" },
  { icon: Wifi, name: "Fast WiFi", description: "100 Mbit/s" },
  { icon: Wind, name: "Air conditioning", description: "In all rooms" },
  { icon: Car, name: "Free parking", description: "2 cars" },
  { icon: Utensils, name: "Fully equipped kitchen", description: "Modern appliances" },
  { icon: Tv, name: "Smart TV", description: "Netflix & streaming" },
  { icon: ShowerHead, name: "4 bathrooms", description: "With rain shower" },
  { icon: TreePine, name: "Tropical garden", description: "Private area" },
  { icon: Sun, name: "Sun terrace", description: "With sun loungers" },
  { icon: Coffee, name: "Espresso machine", description: "Nespresso" },
  { icon: Lock, name: "Secure safe", description: "In each bedroom" },
  { icon: Shirt, name: "Washing machine", description: "& tumble dryer" },
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
            Amenities
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-4">
            Everything You Need
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Villa Siam is equipped with everything for a comfortable and luxurious stay
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
