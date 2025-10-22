import { defineField, defineType  } from "sanity";
import { TagIcon } from "@sanity/icons";

export const GeneroType = defineType({
  name: "genero",
  title: "Genero",
  type: "document",
  icon: TagIcon,
  fields: [
    defineField({
      name: "title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "descripcion",
      type: "text",
    }),
    defineField({
      name: "image",
      title: "Genero Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "descripcion",
      media: "image",
    },
  },
});