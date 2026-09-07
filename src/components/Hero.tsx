import { motion, useScroll, useTransform } from "framer-motion";
import heroImage from "@/assets/lodge-exterior-hero.png";
import { WHATSAPP_LINK } from "@/lib/site";

export function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 800], [0, 180]);
  const scale = useTransform(scrollY, [0, 800], [1.05, 1.18]);
  const fade = useTransform(scrollY, [0, 520], [1, 0]);

  return (
    <section id="home" className="relative h-[100svh] min-h-[620px] w-full overflow-hidden">
      <motion.div style={{ y, scale }} className="absolute inset-0">
        <img
          src={heroImage}
          alt="The Husky's Lodge And Cafe, a mountain-view hotel in Bahang, Manali"
          className="h-full w-full object-cover"
          fetchPriority="high"
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/35 to-black/80" />

      <div className="relative z-10 mx-auto flex h-full max-w-5xl flex-col items-center justify-center px-6 text-center">
        <motion.span
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="eyebrow rounded-full border border-white/30 px-5 py-2 text-[0.6rem] text-cream/90 backdrop-blur-sm"
        >
          3-Star Hotel • Manali • Himalayas
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="mt-7 font-display text-4xl leading-[1.05] text-cream sm:text-6xl lg:text-7xl"
        >
          The Husky&apos;s Lodge
          <span className="block text-gold">And Cafe</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.55 }}
          className="mt-6 font-display text-xl italic text-cream/95 sm:text-2xl"
        >
          &ldquo;Stay Above Ordinary.&rdquo;
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.7 }}
          className="mt-4 max-w-xl text-sm leading-relaxed text-cream/75 sm:text-base"
        >
          A cozy Himalayan lodge and cafe overlooking the mountains and valleys of Manali.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.85 }}
          className="mt-10 flex flex-col gap-3 sm:flex-row"
        >
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn-base btn-gold">
            Book Your Stay
          </a>
          <a href="#stay" className="btn-base btn-outline-light">
            Explore the Lodge
          </a>
        </motion.div>
      </div>

      <motion.div
        style={{ opacity: fade }}
        className="absolute inset-x-0 bottom-7 z-10 flex flex-col items-center gap-3"
      >
        <span className="eyebrow text-[0.55rem] text-cream/70">Scroll to Explore</span>
        <motion.span
          animate={{ scaleY: [0.2, 1, 0.2], originY: 0 }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
          className="h-10 w-px bg-gold"
        />
      </motion.div>
    </section>
  );
}
