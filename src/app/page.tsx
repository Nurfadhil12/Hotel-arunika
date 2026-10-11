import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { CtaBand } from "@/components/sections/CtaBand";
import { Facilities } from "@/components/sections/Facilities";
import { GallerySection } from "@/components/sections/GallerySection";
import { Hero } from "@/components/sections/Hero";
import { Rooms } from "@/components/sections/Rooms";
import { Testimonials } from "@/components/sections/Testimonials";

/**
 * Situs satu halaman: semua bagian ada di sini dan navbar menggulir ke
 * masing-masing bagian (lihat navLinks di src/data/hotel.ts).
 */
export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Rooms />
      <Facilities />
      <GallerySection />
      <Testimonials />
      <CtaBand />
      <Contact />
    </>
  );
}
