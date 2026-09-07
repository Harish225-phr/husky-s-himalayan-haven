import { createFileRoute } from "@tanstack/react-router";

import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import {
  Highlights,
  Story,
  Stay,
  Cafe,
  Experience,
  Why,
  Reviews,
  About,
  Location,
  Contact,
  HotelInfo,
} from "@/components/Sections";
import { Gallery } from "@/components/Gallery";
import { Footer, MobileBar } from "@/components/Footer";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Highlights />
        <Story />
        <Stay />
        <Cafe />
        <Experience />
        <Why />
        <Gallery />
        <Reviews />
        <About />
        <Location />
        <HotelInfo />
        <Contact />
      </main>
      <Footer />
      <MobileBar />
    </>
  );
}
