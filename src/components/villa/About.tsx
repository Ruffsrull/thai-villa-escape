import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Check } from "lucide-react";
import villaExterior from "@/assets/villa-exterior.jpg";

const included = [
  "Daily housekeeping",
  "Pool maintenance",
  "WiFi 100 Mbit/s",
  "Air conditioning",
  "Fully equipped kitchen",
  "Towels & linens",
  "Welcome package",
  "24/7 support",
];

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 md:py-32 bg-background" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-strong">
              <img
                src={villaExterior}
                alt="Villa Siam exterior"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-6 rounded-2xl shadow-medium hidden md:block">
              <div className="text-4xl font-serif font-semibold">4</div>
              <div className="text-sm opacity-90">bedrooms</div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <span className="text-ocean font-medium text-sm tracking-widest uppercase mb-4 block">
              About the Villa
            </span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-6 leading-tight">
              An exclusive retreat in paradise
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Villa Siam is a traditional Thai villa with modern comfort, 
              located on a beautiful hillside with panoramic ocean views. With four 
              spacious bedrooms, private infinity pool and tropical garden, this is 
              the perfect place for an unforgettable vacation.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              The villa offers 350 sqm of living space spread over two floors with open 
              plan layout, large living room and fully equipped kitchen. Each bedroom 
              has its own bathroom and air conditioning.
            </p>

            {/* Included */}
            <div className="grid sm:grid-cols-2 gap-3">
              {included.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.05 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-5 h-5 rounded-full bg-palm/10 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-palm" />
                  </div>
                  <span className="text-foreground">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
