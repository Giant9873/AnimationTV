/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/prop-types */ 
// (Añade esta línea por si acaso)
import { urlFor } from '@/sanity/lib/image';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'


interface RecoAnimeProps {
  animereco?: Array<{
    // CORRECCIÓN CLAVE EN ImagePoster
    ImagePoster: any; 
    
    // 2. titulo: Tipos que usas.
    titulo: string | null; 
    
    // 3. slug: Tipos que usas.
    slug: {
        current: string | null;
        [key: string]: any; // Índice de cadena para propiedades extra del slug
    } | null;
    
    // 4. CLAVE: Índice de cadena general para ignorar 'InternalGroqTypeReferenceTo', '_id', '_type', etc.
    [key: string]: any; 
  }>;
}

const RecoAnime = ( props: RecoAnimeProps) => {
  const { animereco } = props;
  return (
    <div className='grid grid-cols-1'>
      {animereco?.map((reco, index) => ( 
        <div key={index} className='bg-atv-secundario mb-8 hoverEffect sombracard'>
            <Link href={`/animes/${reco?.slug?.current}`}>
            <Image         
                src={urlFor(reco?.imagePoster).url()}
                alt="animeImage"
                width={400}
                height={400}
                className={`w-full h-80 overflow-hidden object-cover transition-transform  duration-500`}
            />
            <h1 className='text-center p-5 font-semibold'>{reco?.titulo}</h1>
            </Link>
        </div>
      ))}
    </div>
  )
}

export default RecoAnime;
