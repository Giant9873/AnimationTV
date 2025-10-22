import AnimeGrid from '@/components/AnimeGrid';
import Container from '@/components/Container';
import Container2 from '@/components/Container2';
import HomeBanner from '@/components/HomeBanner';
import AnimesTemporada from '@/components/AnimesTemporada';
import ListaPeliculas from '@/components/PeliculasTemporada';
import React from 'react'


const HomePage = () => {
  return (
    <div className="bg-atv-principal">
      <HomeBanner  />
      <Container className="text-font-white space-y-10 pt-30 pb-20">
          <div className="flex flex-col lg:px-0 lg:my-10">
            <h1 className='md:text-4xl text-3xl font-semibold'> Animes de Temporada : </h1>
              <AnimesTemporada />           
          </div>
          <div className="flex flex-col lg:px-0 lg:my-10">
            <h1 className='md:text-4xl text-3xl font-semibold'> Películas recién Agregadas : </h1>
              <ListaPeliculas />           
          </div>
      </Container>
    </div>
  )
};

export default HomePage;
