import { type SchemaTypeDefinition } from 'sanity'
import cars from './cars'
import comment, {  } from './comment'



export const schema: { types: SchemaTypeDefinition[] } = {
  types: [cars, comment],
}
