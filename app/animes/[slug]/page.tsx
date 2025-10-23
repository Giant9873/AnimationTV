import RootLayout from "@/app/layout";
import Container from "@/components/Container";
import ImageList from "@/components/ImagenL2";
import RecoAnime from "@/components/RecoAnime";
import { Button } from "@/components/ui/button";
import { urlFor } from "@/sanity/lib/image";
import { getAnimeBySlug } from "@/sanity/queries";
import { HardDriveDownload, Search, TvMinimalPlay } from "lucide-react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import React from "react";
import type { Metadata } from 'next';

// 1. Define la función para generar los metadatos
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  
  // Llama a la misma función que usas en el componente SingleAnimePage
  const anime = await getAnimeBySlug(slug); 

  // 2. Retorna el objeto Metadata
  if (!anime) {
    return {
      title: 'No encontrado - Animation TV',
    };
  }

  // Estructura del título: "Título del Anime - Animation TV"
  // Esto se combinará con el template del layout.tsx
  const maxTitleLength = 50;
  const prefix = "Descargar ";
  const suffix = ` ${anime?.capActual}/${anime?.capTotal}`;
  const fullTitle = prefix + anime.titulo;
  const sino = anime.sinopsis;
  const description = sino 
    ? sino.substring(0, 150) + (sino.length > 150 ? '...' : '')
    : "Toda la animación en una sola web."; // Valor por defecto si no hay sinopsis

  // 1. Crear la parte principal del título (sin el contador de capítulos)
  const baseTitle = fullTitle.length > maxTitleLength
  ? fullTitle.substring(0, maxTitleLength - 3) + '...'
  : fullTitle;
  

  return {
  title: baseTitle + " - "+suffix,
    description: description,
  };
}

const SingleAnimePage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;
  const anime = await getAnimeBySlug(slug);
  if (!anime) {
    return notFound();
  }
  
  const backgroundImageUrl = anime?.imageBanner
    ? urlFor(anime.imageBanner).url()
    : undefined;

  const backgroundStyle: React.CSSProperties = {
    backgroundImage: backgroundImageUrl ? `url('${backgroundImageUrl}')` : 'none',
    // ... otras propiedades como backgroundSize, backgroundPosition, etc.
};

  return (
    <div className="bg-atv-principal text-white pb-30 font-semibold">
      <div style={backgroundStyle} 
        className="w-full min-h-[400px] bg-cover bg-center bg-no-repeat">
      <div className="bg-black/70 pt-12 pb-10">
    <Container className="flex flex-col md:flex-row gap-10 py-10 md:pt-15 pb-30">       
        <div className="w-full md:w-1/3 flex flex-col gap-5 items-center">
            {anime?.imagePoster && (
            <Image         
                src={urlFor(anime?.imagePoster).url()}
                alt="animeImage"
                width={900}
                height={400}
                className={`w-full h-150 overflow-hidden object-cover transition-transform  duration-500`}
            />
            )}
        </div>
        <div className="w-full md:w-2/3 flex flex-col gap-5">
            <div className="space-y-1.5">
                <h2 className="text-4xl font-bold">{anime?.titulo}</h2>
                <p className="tracking-wide">
                    {anime?.sinopsis}
                </p>
                <div className="flex items-center gap-0.5 text-xl text-amber-600">
                    {anime?.estrellas}
                    <p className="font-semibold">{`(`+anime?.myanimelist+`)`}</p>
                </div>
                {anime?.categorias && (
                <p>
                 {`Categoría : ` +anime.categorias.map((cat) => cat).join(" / ")}
                </p>
                )}
                {anime?.generos && (
                <p>
                 {`Género : ` +anime.generos.map((gen) => gen).join(" / ")}
                </p>
                )}
                <p>{`Fecha de Estreno : `+anime?.fechaEstreno +`, `+ anime?.yearEstreno }</p>
                <p>{`Studio : `+anime?.estudio }</p>
                <p className="">{`Estación : `+anime?.estacion }</p>
                <p>{`Estado : `+anime?.estado }</p>  
                <p>{`Capítulos : `+anime?.capActual +`/`+ anime?.capTotal }</p>
                <div><p className="inline-flex">Precuela : </p>
                <Link href={anime?.linkPrecuela} className="hover:text-atv-tercero hoverEffect"> {anime?.precuela } </Link></div>
                <p className="inline-flex">Secuela : </p>
                <Link href={anime?.linkSecuela} className="hover:text-atv-tercero hoverEffect"> {anime?.secuela } </Link>
                
        </div>

        <div className="space-y-2 border-t border-b border-gray-200 py-5">
            <p>{`Resolución : `+anime?.resolucion}</p>    
            <p>{`Peso del Archivo : `+anime?.peso}</p>
            <p>Clave para Descomprimir: AnimationTV25</p>   
        </div>
        
              
      </div>
    </Container></div> </div>
    <Container className="flex flex-col md:flex-row gap-10 pt-30">
        <div className="w-full md:w-3/4 flex flex-col gap-5 ">
            <div className="pb-15 space-y-9">
                <div className="inline-flex items-center">
                  <HardDriveDownload className="flex h-full w-8 mr-3"/>
                  <h1 className=" text-3xl font-semibold">Descargar - {anime?.capActual +`/`+ anime?.capTotal }</h1>
                </div>                
                
                <div className="grid grid-cols-2 lg:grid-cols-4">
                  
                    {anime?.descarga1?.map((des1, index) => (
                      <div key={index} className="grid-col">
                        <h1 className="text-lg font-medium pb-2">{'Part. 0'+ (index + 1)}</h1>
                        <Link href={des1} target="_blank" rel="noopener noreferrer">
                          <Button className="bg-red-400 text-xl p-5 hover:bg-red-600 hoverEffect">{anime?.servidor1}</Button>
                        </Link> 
                      </div>
                    ))}
                                  
                </div>
                <div className="grid grid-cols-2 lg:grid-cols-4">

                    {anime?.descarga2?.map((des2, index) => (
                      <div key={index} className="grid-col">
                        <h1 className="text-lg font-medium pb-2">{'Part. 0'+ (index + 1)}</h1>
                        <Link href={des2} target="_blank" rel="noopener noreferrer">
                          <Button className="bg-blue-400 text-xl p-5 hover:bg-blue-600 hoverEffect">{anime?.servidor2}</Button>
                        </Link> 
                      </div>
                    ))}

                </div>
            </div>

            <div>
              <div className="inline-flex pb-5 items-center">
                  <TvMinimalPlay className="flex h-full w-8 mr-3"/>
                  <h1 className=" text-3xl font-semibold">Ver Online - {anime?.capActual +`/`+ anime?.capTotal }</h1>
                </div>
                <h1 className=" text-2xl font-semibold mb-3">**Al abrir esperar unos segundos a que cargue el reproductor.</h1>  
                <ImageList images={anime?.capImagenes} capl={anime?.capLinks as any} />
            </div>
        </div>
        <div className="w-full md:w-1/4 flex flex-col gap-5">
            <h1 className=" text-3xl font-semibold">También te puede interesar:</h1>
            <RecoAnime animereco={anime?.recoAnime1} />
        </div>

      
    </Container>

    
    </div>
  );
};

export default SingleAnimePage;
