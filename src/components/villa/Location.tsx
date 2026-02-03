import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Plane, UtensilsCrossed, ShoppingBag, Palmtree, Ship, Waves } from "lucide-react";

const distances = [
  { icon: Plane, name: "U-Tapao Airport", distance: "45 min", detail: "50 km" },
  { icon: Palmtree, name: "Mae Phim Beach", distance: "5 min", detail: "Walking distance" },
  { icon: Ship, name: "Koh Samet Ferry", distance: "25 min", detail: "Ban Phe pier" },
  { icon: UtensilsCrossed, name: "Beach Restaurants", distance: "5 min", detail: "60+ options" },
  { icon: ShoppingBag, name: "Tesco Lotus", distance: "15 min", detail: "Klaeng" },
  { icon: Waves, name: "Koh Mun Nai", distance: "30 min", detail: "Snorkeling island" },
];

export function Location() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="location" className="py-24 md:py-32 bg-secondary/30" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="text-ocean font-medium text-sm tracking-widest uppercase mb-4 block">
              Location
            </span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-6 leading-tight">
              Cape Mae Phim, Rayong
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Villa Siam is located in the peaceful Cape Mae Phim area, one of Thailand's 
              best-kept secrets. Just 2.5 hours from Bangkok, this serene coastal retreat 
              offers pristine beaches, excellent seafood restaurants, and easy access to 
              Koh Samet and other beautiful islands. The area is popular with Thai families 
              and expats seeking a quieter alternative to Pattaya.
            </p>

            <div className="flex items-start gap-3 mb-8 p-4 bg-card rounded-xl border border-border">
              <MapPin className="w-5 h-5 text-ocean flex-shrink-0 mt-0.5" />
              <div>
                <div className="font-medium text-foreground">Address</div>
                <div className="text-muted-foreground">
                  Cape Mae Phim 19, Klaeng District, Rayong 21190, Thailand
                </div>
              </div>
            </div>

            {/* Distances */}
            <div className="grid sm:grid-cols-2 gap-4">
              {distances.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  className="flex items-center gap-4 p-4 bg-card rounded-xl border border-border"
                >
                  <div className="w-10 h-10 rounded-lg bg-ocean/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-ocean" />
                  </div>
                  <div>
                    <div className="font-medium text-foreground text-sm">{item.name}</div>
                    <div className="text-muted-foreground text-sm">
                      {item.distance} • {item.detail}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="aspect-square lg:aspect-[4/3] rounded-2xl overflow-hidden shadow-strong bg-muted"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15544.889631851!2d101.6583!3d12.6833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3102e0c7c1d3f4e9%3A0x8c8c8c8c8c8c8c8c!2sCape%20Mae%20Phim!5e0!3m2!1sen!2sth!4v1704067200000!5m2!1sen!2sth"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Villa Siam location - Cape Mae Phim"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
