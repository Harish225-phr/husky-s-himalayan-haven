import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";

import lodgeHero from "@/assets/lodge-exterior-hero.png";
import lodgeSky from "@/assets/lodge-exterior-sky.png";
import lodgeFacade from "@/assets/lodge-facade.png";
import corridor from "@/assets/corridor.png";
import roomDeluxe from "@/assets/room-deluxe.png";
import roomTwin from "@/assets/room-twin.png";
import cafeInterior from "@/assets/cafe-interior.png";
import cafeNight from "@/assets/cafe-night.png";
import food from "@/assets/food-biryani.png";
import balcony from "@/assets/balcony-view.png";

type Item = { src: string; caption: string; tag: string; span: string };

const ITEMS: Item[] = [
  { src: lodgeHero, caption: "The lodge against the Manali hills", tag: "Lodge", span: "md:col-span-2 md:row-span-2" },
  { src: balcony, caption: "Valley views from the room balcony", tag: "Mountains", span: "md:col-span-2" },
  { src: roomDeluxe, caption: "Warm wooden room interiors", tag: "Rooms", span: "" },
  { src: cafeNight, caption: "The Cafe Husky's-85 after dark", tag: "Cafe", span: "" },
  { src: lodgeFacade, caption: "Balconies facing the mountains", tag: "Lodge", span: "md:col-span-2 md:row-span-2" },
  { src: cafeInterior, caption: "Bright multi-cuisine dining hall", tag: "Cafe", span: "md:col-span-2" },
  { src: roomTwin, caption: "Comfortable beds and tea maker", tag: "Rooms", span: "" },
  { src: corridor, caption: "Quiet lodge corridors", tag: "Lodge", span: "" },
  { src: food, caption: "Freshly prepared mountain meals", tag: "Cafe", span: "md:col-span-2" },
  { src: lodgeSky, caption: "Bahang skies above the property", tag: "Experience", span: "md:col-span-2" },
];

const TAGS = ["All", "Lodge", "Rooms", "Cafe", "Mountains", "Experience"];

export function Gallery() {
  const [tag, setTag] = useState("All");
  const [index, setIndex] = useState<number | null>(null);

  const items = tag === "All" ? ITEMS : ITEMS.filter((i) => i.tag === tag);
  const active = index === null ? null : items[index];

  return (
    <section id="gallery" className="bg-cream py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal>
          <span className="eyebrow text-bark">Gallery</span>
          <h2 className="mt-4 max-w-2xl font-display text-4xl leading-tight text-charcoal sm:text-5xl lg:text-6xl">
            A look around the lodge
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-9 flex flex-wrap gap-2">
            {TAGS.map((t) => (
              <button
                key={t}
                onClick={() => {
                  setTag(t);
                  setIndex(null);
                }}
                className={`eyebrow rounded-full border px-4 py-2 text-[0.6rem] transition-all ${
                  tag === t
                    ? "border-charcoal bg-charcoal text-cream"
                    : "border-charcoal/20 text-charcoal/70 hover:border-charcoal/50"
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="mt-10 grid auto-rows-[190px] grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-4 md:auto-rows-[200px]">
          {items.map((item, i) => (
            <motion.button
              key={item.src + i}
              layout
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: (i % 4) * 0.07, ease: [0.22, 1, 0.36, 1] }}
              onClick={() => setIndex(i)}
              className={`img-zoom group relative row-span-1 ${item.span}`}
            >
              <img src={item.src} alt={item.caption} loading="lazy" className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-70 transition-opacity group-hover:opacity-95" />
              <div className="absolute inset-x-0 bottom-0 p-4 text-left">
                <span className="eyebrow text-[0.55rem] text-gold">{item.tag}</span>
                <p className="mt-1 text-sm text-cream">{item.caption}</p>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-black/95 p-4"
            onClick={() => setIndex(null)}
          >
            <button
              aria-label="Close"
              onClick={() => setIndex(null)}
              className="absolute right-5 top-5 text-cream/80 hover:text-gold"
            >
              <X className="h-7 w-7" />
            </button>
            <button
              aria-label="Previous image"
              onClick={(e) => {
                e.stopPropagation();
                setIndex(((index as number) - 1 + items.length) % items.length);
              }}
              className="absolute left-3 text-cream/70 hover:text-gold sm:left-8"
            >
              <ChevronLeft className="h-9 w-9" />
            </button>
            <button
              aria-label="Next image"
              onClick={(e) => {
                e.stopPropagation();
                setIndex(((index as number) + 1) % items.length);
              }}
              className="absolute right-3 text-cream/70 hover:text-gold sm:right-8"
            >
              <ChevronRight className="h-9 w-9" />
            </button>
            <motion.figure
              key={active.src}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              onClick={(e) => e.stopPropagation()}
              className="max-h-[85vh] w-full max-w-4xl"
            >
              <img src={active.src} alt={active.caption} className="max-h-[75vh] w-full object-contain" />
              <figcaption className="mt-4 text-center text-sm text-cream/70">{active.caption}</figcaption>
            </motion.figure>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
