"use client";
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { animeItems } from '@/constants/data'


const AnimeCard = () => {
  return (
    <>
    {animeItems?.map((anime) => (
    <div className="text-sm border-none group bg-atv-secundario hover:scale-108 hoverEffect hover:shadow-amber-500">
        <Link key={anime?.titulo} href={`/animes`} >
            <Image              
              src={anime?.imagenPoster}
              alt="animeImage"
              width={800}
              height={400}
              priority
              className={`w-full h-82 overflow-hidden object-cover transition-transform bg-shop_light_bg duration-500`}
            />
          
        
        <div className="p-3 flex flex-col gap-2">
        
            <p className="uppercase line-clamp-1 text-xs font-medium ">
               {anime?.categoria} / {anime?.generos}
            </p>
        
            <h1 className="text-xl line-clamp-2 font-semibold">{anime?.titulo}</h1>

            <div className="flex justify-between gap-2.5">
                <p className="text-xl text-yellow-600">{anime?.estrellas}</p>
                <p className="text-xl">{anime?.myanimelist}</p>
            </div>
            
            <div className="flex justify-center gap-2.5">
                <p className="font-medium uppercase tracking-wide">primavera 2025</p>
            </div>

        </div>
        </Link>
    </div>
    ))}
    </>
  )
}

export default AnimeCard;

