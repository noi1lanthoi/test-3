"use client"

import type React from "react"

import { useState, useEffect, useCallback } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

interface CarouselProps {
  children: React.ReactNode[]
  autoPlay?: boolean
  interval?: number
  showControls?: boolean
}

export function Carousel({ children, autoPlay = true, interval = 5000, showControls = false }: CarouselProps) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const slideCount = Array.isArray(children) ? children.length : 1
  const isMobile = typeof window !== "undefined" ? window.innerWidth < 768 : false

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slideCount)
  }, [slideCount])

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slideCount) % slideCount)
  }, [slideCount])

  useEffect(() => {
    if (!autoPlay) return

    const timer = setInterval(() => {
      nextSlide()
    }, interval)

    return () => clearInterval(timer)
  }, [autoPlay, interval, nextSlide])

  if (!Array.isArray(children) || children.length === 0) {
    return null
  }

  // Mobile carousel shows full width slides
  if (isMobile) {
    return (
      <div className="relative overflow-hidden rounded-xl">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {children.map((child, index) => (
            <div key={index} className="w-full flex-shrink-0">
              {child}
            </div>
          ))}
        </div>

        {/* Carousel Indicators */}
        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-10">
          {Array.from({ length: slideCount }).map((_, index) => (
            <button
              key={index}
              className={cn(
                "w-2 h-2 rounded-full transition-opacity",
                index === currentSlide ? "bg-white" : "bg-white/50",
              )}
              onClick={() => setCurrentSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Carousel Controls */}
        {showControls && slideCount > 1 && (
          <>
            <button
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-30 rounded-full p-2 text-white hover:bg-opacity-50 transition-all z-10"
              onClick={prevSlide}
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-30 rounded-full p-2 text-white hover:bg-opacity-50 transition-all z-10"
              onClick={nextSlide}
              aria-label="Next slide"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </>
        )}
      </div>
    )
  }

  // Desktop carousel shows partial previous/next slides
  return (
    <div className="relative overflow-hidden rounded-xl">
      <div className="flex items-center justify-center">
        <div className="w-full overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(calc(-${currentSlide * 70}% - 15%))`,
              width: `${slideCount * 70}%`,
            }}
          >
            {children.map((child, index) => {
              // Calculate the distance from current slide (accounting for wrap-around)
              const distance = Math.min(
                Math.abs(index - currentSlide),
                Math.abs(index - currentSlide + slideCount),
                Math.abs(index - currentSlide - slideCount),
              )

              // Apply different styling based on distance from current slide
              const scale = distance === 0 ? 1 : 0.85
              const opacity = distance === 0 ? 1 : 0.6
              const zIndex = slideCount - distance

              return (
                <div
                  key={index}
                  className="w-[70%] flex-shrink-0 transition-all duration-500 ease-in-out px-2"
                  style={{
                    transform: `scale(${scale})`,
                    opacity,
                    zIndex,
                  }}
                >
                  {child}
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* Carousel Indicators */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-10">
        {Array.from({ length: slideCount }).map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-opacity ${
              index === currentSlide ? "bg-white opacity-100" : "bg-white opacity-50"
            }`}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Carousel Controls */}
      {slideCount > 1 && (
        <>
          <button
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-30 rounded-full p-2 text-white hover:bg-opacity-50 transition-all z-10"
            onClick={prevSlide}
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-30 rounded-full p-2 text-white hover:bg-opacity-50 transition-all z-10"
            onClick={nextSlide}
            aria-label="Next slide"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </>
      )}
    </div>
  )
}

