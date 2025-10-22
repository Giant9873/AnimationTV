import { type SchemaTypeDefinition } from 'sanity';
import { CategoriaType } from './CategoriaType';
import { GeneroType } from './GeneroType';
import { AnimesType } from './AnimesType';
import { PeliculaType } from './PeliculaType';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [CategoriaType, GeneroType, AnimesType, PeliculaType],
}
