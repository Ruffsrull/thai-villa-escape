import { useState } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { useRef } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import poolSunset from "@/assets/pool-sunset.jpg";
import poolNight from "@/assets/pool-night.jpg";
import infinityPool from "@/assets/infinity-pool.jpg";
import bedroom from "@/assets/bedroom.jpg";
import villaExterior from "@/assets/villa-exterior.jpg";
import bedroomCanopy from "@/assets/bedroom-canopy.jpg";
import bedroomPoolView from "@/assets/bedroom-pool-view.jpg";
import balconyView from "@/assets/balcony-view.jpg";
import bedroomBalcony from "@/assets/bedroom-balcony.jpg";
import bedroomCrib from "@/assets/bedroom-crib.jpg";
import villaSeaview from "@/assets/villa-seaview.jpg";
import kitchenSink from "@/assets/kitchen-sink.jpg";
import kitchenStove from "@/assets/kitchen-stove.jpg";
import kitchenFridge from "@/assets/kitchen-fridge.jpg";
import livingRoom from "@/assets/living-room.jpg";

const images = [
  { src: poolNight, alt: "Pool at night", category: "Pool" },
  { src: bedroom, alt: "Bedroom with canopy bed", category: "Bedroom" },
  { src: infinityPool, alt: "Infinity pool with ocean view", category: "View" },
  { src: poolSunset, alt: "Pool at sunset", category: "Pool" },
  { src: villaExterior, alt: "Villa exterior", category: "Exterior" },
  { src: bedroomCanopy, alt: "Master bedroom with canopy", category: "Bedroom" },
  { src: bedroomPoolView, alt: "Bedroom with pool view", category: "Bedroom" },
  { src: livingRoom, alt: "Living room with Thai decor", category: "Interior" },
  { src: villaSeaview, alt: "Villa with sea view", category: "Exterior" },
  { src: balconyView, alt: "Balcony with ocean view", category: "View" },
  { src: bedroomBalcony, alt: "Bedroom with balcony", category: "Bedroom" },
  { src: bedroomCrib, alt: "Bedroom with baby crib", category: "Bedroom" },
  { src: kitchenStove, alt: "Modern kitchen with stove", category: "Kitchen" },
  { src: kitchenSink, alt: "Kitchen with double sink", category: "Kitchen" },
  { src: kitchenFridge, alt: "Kitchen with large refrigerator", category: "Kitchen" },
];

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const handlePrev = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? images.length - 1 : selectedImage - 1);
    }
  };

  const handleNext = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === images.length - 1 ? 0 : selectedImage + 1);
    }
  };

  return (
    <section id="gallery" className="py-24 md:py-32 bg-secondary/30" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-ocean font-medium text-sm tracking-widest uppercase mb-4 block">
            Gallery
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground">
            Explore the Villa
          </h2>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              className={`relative overflow-hidden rounded-xl cursor-pointer group ${
                index === 0 ? "md:col-span-2 md:row-span-2" : ""
              }`}
              onClick={() => setSelectedImage(index)}
            >
              <div className={`${index === 0 ? "aspect-square md:aspect-[4/3]" : "aspect-square"}`}>
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-colors duration-300" />
              <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="bg-background/90 backdrop-blur-sm px-3 py-1.5 rounded-full text-sm font-medium text-foreground">
                  {image.category}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-foreground/95 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
              className="absolute top-6 right-6 text-background hover:text-background/80 transition-colors"
            >
              <X className="w-8 h-8" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                handlePrev();
              }}
              className="absolute left-6 text-background hover:text-background/80 transition-colors"
            >
              <ChevronLeft className="w-10 h-10" />
            </button>

            <motion.img
              key={selectedImage}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              src={images[selectedImage].src}
              alt={images[selectedImage].alt}
              className="max-w-full max-h-[85vh] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />

            <button
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
              className="absolute right-6 text-background hover:text-background/80 transition-colors"
            >
              <ChevronRight className="w-10 h-10" />
            </button>

            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedImage(index);
                  }}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === selectedImage ? "bg-background" : "bg-background/40"
                  }`}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
