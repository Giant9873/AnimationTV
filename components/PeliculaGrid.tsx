import { getAllPeliculas } from "@/sanity/queries";
import React from "react";
import PeliCard from "./PeliCard";

const PeliculaGrid = async () => {
  const peliculas = await getAllPeliculas();
  return (
    <div className="py-10">
      
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3.5 text-white">
          {peliculas?.map((peliculas) => (
            <PeliCard key={peliculas?._id} peli={peliculas} />
          ))}
        </div>
      
    </div>
  );
};

export default PeliculaGrid;