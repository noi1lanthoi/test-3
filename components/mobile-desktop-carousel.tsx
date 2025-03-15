"use client";

import Image from "next/image";
import { Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Carousel } from "@/components/carousel";

interface Banner {
  title: string;
  subtitle: string;
  label: string;
  buttonText: string;
  buttonColor: string;
  bgColor: string;
  image: string;
}

interface MobileDesktopCarouselProps {
  banners: Banner[];
}

// Component to handle different carousel layouts for mobile and desktop
export function MobileDesktopCarousel({ banners }: MobileDesktopCarouselProps) {
  return (
    <>
      {/* Mobile Carousel */}
      <div className="md:hidden">
        <Carousel>
          {banners.map((banner, index) => (
            <div
              key={index}
              className={`${banner.bgColor} rounded-xl overflow-hidden`}
            >
              <div className="relative">
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-2 right-2 text-white bg-transparent hover:bg-white/10 h-8 w-8 z-10"
                >
                  <Info className="h-4 w-4" />
                </Button>
              </div>
              <div className="flex justify-center pt-4">
                <Image
                  src={banner.image || "/placeholder.svg"}
                  alt={banner.title}
                  width={200}
                  height={200}
                  className="object-contain"
                />
              </div>
              <div className="p-4 pb-12 text-center">
                <div className="inline-block px-4 py-1 mb-2 bg-white/20 rounded-full">
                  <span className="text-white text-sm">{banner.label}</span>
                </div>
                <h1 className="text-white text-2xl font-bold mb-4">
                  {banner.title} <br />
                  {banner.subtitle}
                </h1>
                <Button
                  className={`${banner.buttonColor} text-white px-8 py-2 rounded-full w-full`}
                >
                  {banner.buttonText}
                </Button>
              </div>
            </div>
          ))}
        </Carousel>
      </div>

      {/* Desktop Carousel */}
      <div className="hidden md:block">
        <Carousel showControls={true}>
          {banners.map((banner, index) => (
            <div
              key={index}
              className={`${banner.bgColor} rounded-xl p-8 flex flex-col md:flex-row items-center`}
            >
              <div className="md:w-1/2 text-center md:text-left mb-6 md:mb-0">
                <p className="text-white text-lg mb-2">{banner.label}</p>
                <h1 className="text-white text-3xl md:text-4xl font-bold mb-4">
                  {banner.title} <br />
                  {banner.subtitle}
                </h1>
                <Button
                  className={`${banner.buttonColor} text-white px-8 py-2 rounded-full`}
                >
                  {banner.buttonText}
                </Button>
              </div>
              <div className="md:w-1/2 flex justify-center">
                <Image
                  src={banner.image || "/placeholder.svg"}
                  alt={banner.title}
                  width={300}
                  height={300}
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </>
  );
}
