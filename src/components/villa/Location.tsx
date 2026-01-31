import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Plane, UtensilsCrossed, ShoppingBag, Palmtree } from "lucide-react";

const distances = [
  { icon: Plane, name: "Samui flygplats", distance: "15 min", detail: "10 km" },
  { icon: Palmtree, name: "Chaweng strand", distance: "10 min", detail: "5 km" },
  { icon: UtensilsCrossed, name: "Restauranger", distance: "5 min", detail: "Gångavstånd" },
  { icon: ShoppingBag, name: "Central Festival", distance: "8 min", detail: "4 km" },
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
              Läge
            </span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-6 leading-tight">
              Perfekt beläget på Koh Samui
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Villa Siam ligger på en naturskön kulle i Bophut med fantastisk 
              utsikt över havet och solnedgången. Nära till stränder, restauranger 
              och shoppingområden, men ändå lugnt och privat.
            </p>

            <div className="flex items-start gap-3 mb-8 p-4 bg-card rounded-xl border border-border">
              <MapPin className="w-5 h-5 text-ocean flex-shrink-0 mt-0.5" />
              <div>
                <div className="font-medium text-foreground">Exakt adress</div>
                <div className="text-muted-foreground">
                  123 Hillside Road, Bophut, Koh Samui, Surat Thani 84320, Thailand
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

          {/* Map placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="aspect-square lg:aspect-[4/3] rounded-2xl overflow-hidden shadow-strong bg-muted"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31418.95247654127!2d99.9770723!3d9.4937631!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x305432c8bf91dab7%3A0x10223bc2c363ef54!2sBophut%2C%20Ko%20Samui%20District%2C%20Surat%20Thani%2C%20Thailand!5e0!3m2!1sen!2sse!4v1704067200000!5m2!1sen!2sse"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Villa Siam location"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
