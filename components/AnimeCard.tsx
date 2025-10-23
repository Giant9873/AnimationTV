import Image from "next/image";
import React from "react";
import Link from "next/link";
import { urlFor } from "@/sanity/lib/image";

export interface AnimeProps {
  _id: string;
  // Añade aquí todas las propiedades que usa AnimeCard
  titulo: string;
  slug: {
      current: string;
    };
  imagePoster: {
    asset: {
      _ref: string;
      _type: 'image';
    };
  };
  categorias?: Array<{
    asset?: {
      _ref: string;
      _type: "reference";
      index: string;
    }}>;
  generos?: Array<{
    asset?: {
      _ref: string;
      _type: "reference";
      index: string;
    }}>;
  estrellas: string;
  estacion: string;
  yearEstreno: string;
  estadoPublic: string;
}

interface Props {
  anime: AnimeProps;
}

const AnimeCard = ({ anime }: Props) => {
  return (
    <div className="text-sm border-none group border-darkBlue/20 group bg-atv-secundario sombracard hoverEffect">
      <Link href={`/animes/${anime?.slug?.current}`}>
        <div className="relative group overflow-hidden bg-shop_light_bg">
          {anime?.imagePoster && (
            
              <Image         
                  src={urlFor(anime?.imagePoster).url()}
                  alt="animeImage"
                  width={800}
                  height={400}
                  className={`w-full h-82 overflow-hidden object-cover transition-transform bg-shop_light_bg duration-500`}
                          />
            
          )}
        </div>
        <div className="p-3 flex flex-col gap-2 text-center">
            <div className="inline-flex gap-1 line-clamp-1 place-content-center">
            {anime?.categorias && (
                <p className="uppercase line-clamp-1 text-xs font-medium text-lightText">
                {anime.categorias.map((cat) => cat).join("/ ")} / 
                </p>
            )}  
            {anime?.generos && (
                <p className="uppercase line-clamp-1 text-xs font-medium text-lightText">
                 {anime.generos.map((gen) => gen).join(" / ")}
                </p>
            )}
            </div>
        
            <h1 className="text-xl line-clamp-2 font-semibold text-center">{anime?.titulo}</h1>

            
            <p className="text-xl text-center text-yellow-600">{anime?.estrellas}</p>
            
            
            <div className="flex justify-center gap-2.5">
                <p className="font-medium uppercase tracking-wide">{anime?.estacion} {anime?.yearEstreno}</p>
            </div>

        </div>
        </Link>
        </div>
      
      
  );
};

export default AnimeCard;