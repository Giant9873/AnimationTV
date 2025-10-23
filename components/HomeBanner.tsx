"use client";
import React from 'react';
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import { Button } from './ui/button';
import { ArrowLeftIcon, ArrowRightIcon } from 'lucide-react';
import Link from 'next/link';

const HomeBanner = () => {
  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)
   
  React.useEffect(() => {
    if (!api) {
      return
    }
 
    setCurrent(api.selectedScrollSnap())
 
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap())
    })
  }, [api])
  
    return (

    <div className=" text-white flex" >
        <Carousel setApi={setApi} opts={{ loop: true}}
            plugins={[
                Autoplay({
                delay: 5000,
                }),
            ]}
            >
            <div className=''>
              <CarouselContent>
                <CarouselItem>
                        <div className='relative w-auto h-auto baner1atv'>
                          <div className='gap-4 bg-black/30 md:pt-90 md:pb-60 pt-30 pb-40'>
                             <div className='flex justify-center'>
                                <h1 className="md:text-6xl text-2xl font-semibold" >DAN DA DAN - Temporada 2</h1>
                            </div>
                            <div className='flex place-content-center pt-10'>
                                <Link href={"/animes/dan-da-dan-s2"}>
                                <Button className='text-black md:text-2xl bg-amber-400 hover:text-white hover:bg-white/20 hoverEffect text-1xl font-semibold md:p-7' > Ver Ahora</Button></Link>
                            </div>
                          </div>                          
                        </div>                     
                </CarouselItem>
                <CarouselItem>
                        <div className='relative w-auto h-auto baner2atv'>
                          <div className='gap-4 bg-black/30 md:pt-90 md:pb-60 pt-30 pb-40'>
                             <div className='flex justify-center'>
                                <h1 className="md:text-6xl sm:text-3xl font-semibold" >Kimetsu no Yaiba: Mugen-jō-hen</h1>
                            </div>
                            <div className='flex place-content-center pt-10'>
                                <Link href={"/"}>
                                <Button className='text-black md:text-2xl bg-amber-400 hover:text-white hover:bg-white/20 hoverEffect text-1xl font-semibold md:p-7' > Ver Ahora</Button></Link>
                            </div>
                          </div>                          
                        </div>                     
                </CarouselItem>
                <CarouselItem>
                        <div className='relative w-auto h-auto baner3atv'>
                          <div className='gap-4 bg-black/30 md:pt-90 md:pb-60 pt-30 pb-40'>
                             <div className='flex justify-center'>
                                <h1 className="md:text-6xl sm:text-3xl font-semibold" >One Punch Man - Temporada 3</h1>
                            </div>
                            <div className='flex place-content-center pt-10'>
                                <Link href={"/animes/one-punch-man-s3"}>
                                <Button className='text-black md:text-2xl bg-amber-400 hover:text-white hover:bg-white/20 hoverEffect text-1xl font-semibold md:p-7' > Ver Ahora</Button></Link>
                            </div>
                          </div>                          
                        </div>                     
                </CarouselItem>
              </CarouselContent>
            </div>
            <div className="flex gap-5 pt-10 justify-center" >
                   <Button onClick={() => api?.scrollTo(current - 1)} ><ArrowLeftIcon /> </Button>
                   <Button onClick={() => api?.scrollTo(current + 1)} ><ArrowRightIcon /> </Button>
            </div>
        </Carousel>
        
            
    </div>
  )
}

export default HomeBanner;
