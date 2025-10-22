import PeliculaGrid from '@/components/PeliculaGrid'
import Container from '@/components/Container'

import React from 'react'

const page = () => {
  return (
    <div className='bg-atv-principal pt-10 pb-20'>
    <Container>
      <div className='py-5 md:px-0'>
        <h1 className='text-3xl font-bold text-white'>Lista de Películas :</h1>
        <PeliculaGrid />
      </div>
    </Container></div>
  )
}

export default page
