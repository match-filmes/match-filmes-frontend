'use client'

import * as React from 'react'
import Image from 'next/image'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'

interface ImageCarouselProps {
  images: string[]
}

export function ImageCarousel({ images }: ImageCarouselProps) {
  return (
    <div className="w-full  mx-auto px-4 sm:px-6 lg:px-8 my-8">
      <Carousel className="w-full">
        <CarouselContent className="!overflow-visible">
          {images.map((image, index) => (
            <CarouselItem
              key={index}
              className="pl-1 md:basis-1/2 lg:basis-1/3"
            >
              <div className="p-1">
                <Image
                  src={`https://image.tmdb.org/t/p/original${image}`}
                  alt={`Movie backdrop ${index + 1}`}
                  width={700}
                  height={281}
                  className="object-cover rounded-lg"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-4 top-1/2 transform -translate-y-1/2" />
        <CarouselNext className="absolute right-4 top-1/2 transform -translate-y-1/2" />
      </Carousel>
    </div>
  )
}
