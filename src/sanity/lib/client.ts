import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId } from '../env'

export const client = createClient({
  projectId:"r2ygasca",
  dataset:"production",
  apiVersion:'2023-09-06',
 
  
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
})
