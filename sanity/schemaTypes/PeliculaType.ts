import { defineField, defineType  } from "sanity";
import { PlayIcon } from "@sanity/icons";

export const PeliculaType = defineType({
  name: "peliculas",
  title: "Peliculas",
  type: "document",
  icon: PlayIcon,
  fields: [
    defineField({
      name: "titulo",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      type: "slug",
      options: {
        source: "titulo",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "sinopsis",
      type: "text",
    }),
    defineField({
      name: "imagePoster",
      title: "Imagen Poster",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "categorias",
      title: "Categorias",
      type: "array",
      of: [{ type: "reference", to: { type: "categoria" } }],
    }),
    defineField({
      name: "generos",
      title: "Generos",
      type: "array",
      of: [{ type: "reference", to: { type: "genero" } }],
    }),
    defineField({
      name: "fechaEstreno",
      title: "Fecha de Estreno",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "yearEstreno",
      title: "Año de Estreno",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "estudio",
      title: "Estudio a cargo",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "precuela",
      title: "Anime o Pelicula Precuela",
      type: "string",
    }),
    defineField({
      name: "linkPrecuela",
      title: "Enlace del anime o pelicula Precuela",
      type: "string",
    }),
    defineField({
      name: "secuela",
      title: "Anime o Pelicula Secuela",
      type: "string",
    }),
    defineField({
      name: "linkSecuela",
      title: "Enlace del anime o pelicula Secuela",
      type: "string",
    }),
    defineField({
      name: "duracion",
      title: "Duración de la Peli",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "peso",
      title: "Peso del archivo",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "resolucion",
      title: "Resolución del Video",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "estrellas",
      title: "Puntuación en Estrellas",
      type: "string",
    }),
    defineField({
      name: "myanimelist",
      title: "Puntuación MyAnimeList",
      type: "string",
    }),
    defineField({
      name: "descarga1",
      title: "Enlace Descarga 1",
      type: 'array',
      of: [{type: 'string'}]
    }),
    defineField({
      name: "descarga2",
      title: "Enlace Descarga 2",
      type: 'array',
      of: [{type: 'string'}]
    }),
    defineField({
      name: "servidor1",
      title: "Servidor de Descarga 1",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "servidor2",
      title: "Servidor de Descarga 2",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "videoEmbed",
      title: "Enlaces Capitulos Ver Online",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "bannerPeli",
      title: "Imagen del Banner de la Peli",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "recoAnime1",
      title: "Anime Recomendación 1",
      type: "array",
      of: [{ type: "reference", to: { type: "animes" } }],
    }),
    defineField({
      name: "publishedAt",
      title: "Fecha de Publicacion",
      type: "datetime",
    }),
    defineField({
      name: "estadoPublic",
      title: "Estado de la Pelicula",
      type: "string",
      options: {
        list: [
          { title: "Normal", value: "normal" },
          { title: "Temporada", value: "temporada" },
          { title: "Popular", value: "popular" },
        ],
      },
    }),
  ],
  preview: {
    select: {
      title: "titulo",
      media: "imagePoster",
    },
  },
});