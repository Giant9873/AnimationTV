import { Peliculas } from "@/sanity.types";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import { urlFor } from "@/sanity/lib/image";

export interface PeliProps {
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
  peli: PeliProps;
}

const PeliCard = ({ peli }: Props) => {
  return (
    <div className="text-sm border-none group border-darkBlue/20 group bg-black sombracard hoverEffect">
      <Link href={`/peliculas/${peli?.slug?.current}`}>
        <div className="relative group overflow-hidden bg-shop_light_bg">
          {peli?.imagePoster && (
            
              <Image         
                  src={urlFor(peli?.imagePoster).url()}
                  alt="animeImage"
                  width={800}
                  height={400}
                  className={`w-full h-82 overflow-hidden object-cover transition-transform bg-shop_light_bg duration-500`}
                          />
            
          )}
        </div>
        <div className="p-3 flex flex-col gap-2 text-center">
            <div className="inline-flex gap-1 line-clamp-1 place-content-center">
            {peli?.categorias && (
                <p className="uppercase line-clamp-1 text-xs font-medium text-lightText">
                {peli.categorias.map((cat) => cat).join("/ ")} / 
                </p>
            )}  
            {peli?.generos && (
                <p className="uppercase line-clamp-1 text-xs font-medium text-lightText">
                 {peli.generos.map((gen) => gen).join(" / ")}
                </p>
            )}
            </div>
        
            <h1 className="text-xl line-clamp-2 font-semibold text-center">{peli?.titulo}</h1>           
            
            <div className="flex justify-center gap-2.5">
                <p className="text-xl text-center text-yellow-600">{peli?.estrellas} -</p>
                <p className="text-xl font-medium uppercase tracking-wide">{peli?.yearEstreno}</p>
            </div>

        </div>
        </Link>
        </div>
      
      
  );
};

export default PeliCard;