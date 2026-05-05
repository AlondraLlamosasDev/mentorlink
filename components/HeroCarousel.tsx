"use client";

import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const slides = [
  { src: "/carrusel/imagen1.jpg", alt: "Mentoría 1-a-1 en línea" },
  { src: "/carrusel/imagen2.jpg", alt: "Profesional compartiendo conocimiento" },
  { src: "/carrusel/imagen3.jpg", alt: "Aprendizaje colaborativo" },
  { src: "/carrusel/imagen4.jpg", alt: "Crecimiento profesional" },
];

export function HeroCarousel() {
  return (
    <Carousel
      className="w-full max-w-5xl"
      opts={{ loop: true, align: "center" }}
      plugins={[Autoplay({ delay: 4500, stopOnInteraction: true })]}
    >
      <CarouselContent>
        {slides.map((slide, i) => (
          <CarouselItem key={slide.src}>
            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl border-4 border-secondary shadow-lg">
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                priority={i === 0}
                sizes="(max-width: 1024px) 100vw, 1024px"
                className="object-cover"
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="left-2 sm:left-4" />
      <CarouselNext className="right-2 sm:right-4" />
    </Carousel>
  );
}
