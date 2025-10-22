import { defineField, defineType  } from "sanity";
import { RocketIcon } from "@sanity/icons";

export const AnimesType = defineType({
  name: "animes",
  title: "Animes",
  type: "document",
  icon: RocketIcon,
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
      name: "imageBanner",
      title: "Imagen Banner",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
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
      name: "estacion",
      title: "Estación Anime",
      type: "string",
      options: {
        list: [
          { title: "Verano", value: "Verano" },
          { title: "Otoño", value: "Otoño" },
          { title: "Invierno", value: "Invierno" },
          { title: "Primavera", value: "Primavera" },
        ],
      },
    }),
    defineField({
      name: "capActual",
      title: "Capitulo Actual",
      type: "number",
      validation: (Rule) => Rule.min(0),
    }),
    defineField({
      name: "capTotal",
      title: "Capitulos Totales",
      type: "number",
      validation: (Rule) => Rule.min(0),
    }),
    defineField({
      name: "estudio",
      title: "Estudio a cargo",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "estado",
      title: "Estado del Anime",
      type: "string",
      options: {
        list: [
          { title: "En Emisión", value: "En Emision" },
          { title: "Pendiente", value: "Pendiente" },
          { title: "Finalizado", value: "Finalizado" },
          { title: "Dropeado", value: "Dropeado" },
        ],
      },
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
      name: "capLinks",
      title: "Enlaces Capitulos Ver Online",
      type: 'array',
      of: [{type: 'string'}]
    }),
    defineField({
      name: "capImagenes",
      title: "Imagen de los Capitulos",
      type: "array",
      of: [{ type: "image", options: { hotspot: true } }],
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
      title: "Estado del Anime Publicacion",
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
      subtitle: "capActual",
      media: "imagePoster",
    },
  },
});