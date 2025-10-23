import { defineQuery, groq } from "next-sanity";

const TEMPORADA_ANIMES = groq`
  *[_type == 'animes' && estadoPublic == 'temporada'] | order(dateTime(publishedAt) desc){
    ...,
    "generos": generos[]->title , 
    "categorias": categorias[]->title,
  }
  `;

const ALLANIMES_QUERY = groq`
  *[_type=='animes'] | order(titulo asc){
    ...,"generos": generos[]->title, "categorias": categorias[]->title,
  }
  `;

  const ALLPELICULAS_QUERY = groq`
  *[_type=='peliculas'] | order(titulo asc){
    ...,"generos": generos[]->title, "categorias": categorias[]->title,
  }
  `;

const ANIME_BY_SLUG_QUERY = groq`
  *[_type == "animes" && slug.current == $slug] | order(titulo asc) [0]{
    ...,"generos": generos[]->title, "categorias": categorias[]->title,
    "recoAnime1": recoAnime1[]->{titulo, slug, imagePoster}, 
  }
  `;

const PELI_BY_SLUG_QUERY = defineQuery(
  `*[_type == "peliculas" && slug.current == $slug] | order(titulo asc) [0]{
    ...,"generos": generos[]->title, "categorias": categorias[]->title,
    "recoAnime1": recoAnime1[]->{titulo, slug, imagePoster}, 
  }`
);

const RECO_ANIMES = defineQuery(
`*[ _type == "animes"] {
  ...,
  animereco[]-> { 
    titulo,
    slug,
    imagePoster 
  }
}
`)

const TEMPORADA_PELIS = groq`
  *[_type == 'peliculas' && estadoPublic == 'temporada'] | order(dateTime(publishedAt) desc){
    ...,
    "generos": generos[]->title , 
    "categorias": categorias[]->title,
  }
  `;

export {
   TEMPORADA_ANIMES, ALLANIMES_QUERY, ANIME_BY_SLUG_QUERY , RECO_ANIMES, TEMPORADA_PELIS, PELI_BY_SLUG_QUERY,
   ALLPELICULAS_QUERY
};