import { AnimeProps } from "@/components/AnimeCard";
import { sanityFetch } from "../lib/live";
import { ALLANIMES_QUERY, TEMPORADA_ANIMES, ANIME_BY_SLUG_QUERY, TEMPORADA_PELIS, PELI_BY_SLUG_QUERY, ALLPELICULAS_QUERY } from "./query";
import { PeliProps } from "@/components/PeliCard";



const getAnimesTemporada = async () => {
  try {
    const { data } = await sanityFetch({ query: TEMPORADA_ANIMES });
    
    // Se verifica que los datos son un array y se mapean para asegurar el tipo
    const animes: AnimeProps[] = Array.isArray(data) ? (data as AnimeProps[]) : [];
    
    return animes;
    return data ?? [];
  } catch (error) {
    console.log("Error cargando animes de Temporada:", error);
    return [];
  }
};

const getPelisTemporada = async () => {
  try {
    const { data } = await sanityFetch({ query: TEMPORADA_PELIS });
    
    // Se verifica que los datos son un array y se mapean para asegurar el tipo
    const peliculas: PeliProps[] = Array.isArray(data) ? (data as PeliProps[]) : [];
    
    return peliculas;
    return data ?? [];
  } catch (error) {
    console.log("Error cargando peliculas de Temporada:", error);
    return [];
  }
};

const getAllAnimes = async () => {
  try {
    const { data } = await sanityFetch({ query: ALLANIMES_QUERY });
    return data ?? [];
  } catch (error) {
    console.log("Error cargando todo los Animes:", error);
    return [];
  }
};

const getAllPeliculas = async () => {
  try {
    const { data } = await sanityFetch({ query: ALLPELICULAS_QUERY });
    return data ?? [];
  } catch (error) {
    console.log("Error cargando todo los Animes:", error);
    return [];
  }
};

const getAnimeBySlug = async (slug: string) => {
  try {
    const anime = await (sanityFetch as any)({ // 👈 Aplicar as any a sanityFetch
      query: ANIME_BY_SLUG_QUERY,
      params: {
        slug,
      },
      revalidate: 60, 
    });
    return anime?.data || null;
  } catch (error) {
    console.error("Error fetching anime by ID:", error);
    return null;
  }
}

const getPeliBySlug = async (slug: string) => {
  try {
    const peliculas = await sanityFetch({
      query: PELI_BY_SLUG_QUERY,
      params: {
        slug,
      },
    });
    return peliculas?.data || null;
  } catch (error) {
    console.error("Error fetching pelicula by ID:", error);
    return null;
  }
};

export {
  getAnimesTemporada, getAllAnimes, getAnimeBySlug, getPelisTemporada, getPeliBySlug, getAllPeliculas
};