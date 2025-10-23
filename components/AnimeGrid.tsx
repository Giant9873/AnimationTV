import AnimeCard from "@/components/AnimeCard";

import { getAllAnimes } from "@/sanity/queries";
import React from "react";

const AnimeGrid = async () => {
  const animes = await getAllAnimes();
  return (
    <div className="py-10">
      
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3.5 text-white">
          {animes?.map((anime) => (
            <AnimeCard key={anime?._id} anime={anime} />
          ))}
        </div>
      
    </div>
  );
};

export default AnimeGrid;