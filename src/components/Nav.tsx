import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, MessageCircle } from "lucide-react";
import { NAV_LINKS, WHATSAPP_LINK } from "@/lib/site";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-white/10 bg-forest-deep/90 py-3 backdrop-blur-xl"
          : "bg-transparent py-5"
      }`}
    >
      <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 lg:px-8">
        <a href="#home" className="min-w-0 leading-none">
          <span className="block font-display text-lg tracking-[0.24em] text-cream sm:text-xl">
            THE HUSKY&apos;S
          </span>
          <span className="eyebrow mt-1 block text-[0.58rem] text-gold">Lodge &amp; Cafe</span>
        </a>

        <nav className="hidden items-center gap-7 xl:flex">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="eyebrow text-[0.63rem] text-cream/80 transition-colors hover:text-gold"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn-base btn-gold hidden !px-6 !py-3 sm:inline-flex">
            Book Your Stay
          </a>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
            className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-cream/30 text-cream transition-colors hover:border-gold hover:text-gold"
          >
            <MessageCircle className="h-4 w-4" />
          </a>
          <button
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            className="grid h-10 w-10 shrink-0 place-items-center text-cream xl:hidden"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-forest-deep/98 backdrop-blur-xl"
          >
            <div className="flex items-center justify-between px-5 py-5">
              <span className="font-display text-lg tracking-[0.24em] text-cream">THE HUSKY&apos;S</span>
              <button onClick={() => setOpen(false)} aria-label="Close menu" className="text-cream">
                <X className="h-6 w-6" />
              </button>
            </div>
            <nav className="mt-6 flex flex-col gap-1 px-6">
              {NAV_LINKS.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i }}
                  className="border-b border-cream/10 py-4 font-display text-3xl text-cream"
                >
                  {l.label}
                </motion.a>
              ))}
            </nav>
            <div className="px-6 pt-8">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-base btn-gold w-full"
              >
                Book Your Stay
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
