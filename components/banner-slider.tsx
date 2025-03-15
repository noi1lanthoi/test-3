"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// Import required modules
import { Pagination, Navigation, Autoplay } from "swiper/modules";
// Import custom styles
import "@/styles/banner-slider.css";
import { InfoIcon } from "@/assets/icons";
import { StaticImageData } from "next/image";
import { cn } from "@/lib/utils";

interface Banner {
  title: string;
  description: string;
  label: string;
  buttonText: string;
  buttonColor: string;
  bgColor: string;
  bgMobile: string;
  image: string | StaticImageData;
  imageMobile: string | StaticImageData;
}

interface BannerSliderProps {
  banners: Banner[];
}

export function BannerSlider({ banners }: BannerSliderProps) {
  return (
    <>
      {/* Mobile Carousel */}
      <div className="md:hidden px-6">
        <Swiper
          slidesPerView={1}
          spaceBetween={16}
          pagination={{
            clickable: true,
            bulletActiveClass: "swiper-pagination-bullet-active",
            bulletClass: "swiper-pagination-bullet",
            type: "bullets",
            el: ".swiper-pagination",
          }}
          loop
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          modules={[Pagination, Navigation, Autoplay]}
          className="mySwiper"
        >
          {banners.map((banner, index) => (
            <SwiperSlide key={index} className="banner-slide">
              <div
                className="relative w-full overflow-visible rounded-[22px] mt-[50px] mb-8"
                style={{
                  backgroundImage: banner.bgMobile,
                }}
              >
                <div className="absolute top-2 right-2">
                  <InfoIcon className="w-6 h-6 text-white/80" />
                </div>
                <div className="flex flex-col gap-2 pb-[15px] overflow-visible">
                  <div className="h-[118px] relative overflow-visible">
                    <div className="absolute w-full h-[168px] bottom-[0]">
                      <Image
                        src={banner.imageMobile}
                        alt={banner.title}
                        fill
                        className="object-contain"
                        priority
                      />
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-center h-[250px] gap-3 ">
                    <Button
                      variant="outline"
                      className={cn(
                        "text-white rounded-full  border-none text-xs h-[25px] px-[42px] transition-all duration-300",
                        banner.buttonColor
                      )}
                    >
                      {banner.label}
                    </Button>
                    <h1 className="text-2xl font-medium text-center max-w-[270px] text-white">
                      {banner.title}
                    </h1>
                    <Button
                      className={`bg-[#ff0960] hover:bg-[#e0085a] border-none rounded-[10px] text-white w-[250px] h-[50px]`}
                    >
                      {banner.buttonText}
                    </Button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
          <div className="swiper-pagination"></div>
        </Swiper>
      </div>

      {/* Desktop Carousel */}
      <div className="hidden md:block">
        <Swiper
          slidesPerView={1.7}
          spaceBetween={100}
          loop={true}
          navigation={false}
          pagination={false}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          centeredSlides
          modules={[Pagination, Navigation, Autoplay]}
          className="mySwiper mx-auto"
        >
          {banners.map((banner, index) => (
            <SwiperSlide key={index} className="banner-slide">
              <div
                className="relative w-full  overflow-hidden rounded-3xl text-white h-[390px]"
                style={{
                  backgroundImage: banner.bgColor,
                }}
              >
                <div className="absolute top-4 right-4">
                  <InfoIcon className="w-6 h-6 text-white/80" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 h-full">
                  {/* Left Content */}
                  <div className="flex flex-col items-center  py-12 gap-3.5 ">
                    <Button
                      variant="outline"
                      className={cn(
                        "text-white rounded-full  border-none text-[21px] py-1.5 px-4 h-[41px] transition-all duration-300",
                        banner.buttonColor
                      )}
                      size="sm"
                    >
                      {banner.label}
                    </Button>

                    <h1 className="text-4xl md:text-[42px] font-extrabold text-center leading-tight max-w-[420px]">
                      {banner.title}
                    </h1>

                    <Button
                      variant="outline"
                      className="bg-[#ff0960] hover:bg-[#e0085a] border-none rounded-[10px] transition-colors text-white font-bold py-4 px-8 text-xl h-[41px] w-[340px]"
                    >
                      {banner.buttonText}
                    </Button>

                    <p className="text-center text-sm  text-white/90 max-w-sm">
                      {banner.description}
                    </p>
                  </div>

                  {/* Right Content - Image */}
                  <div className="flex items-center justify-center relative overflow-hidden">
                    <div className="absolute w-[536px] h-[445px] top-[-20px]">
                      <Image
                        src={banner.image}
                        alt={banner.title}
                        fill
                        className="object-contain "
                        priority
                      />
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}
