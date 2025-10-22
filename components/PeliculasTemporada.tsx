import PeliCard from "@/components/PeliCard";

import { getAnimesTemporada, getPelisTemporada } from "@/sanity/queries";
import React from "react";

const PeliculasTemporada = async () => {
  const peliculas = await getPelisTemporada();
  return (
    <div className="py-10">
      
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3.5">
          {peliculas?.map((peliculas) => (
            <PeliCard key={peliculas?._id} peli={peliculas} />
          ))}
        </div>
      
    </div>
  );
};

export default PeliculasTemporada;
