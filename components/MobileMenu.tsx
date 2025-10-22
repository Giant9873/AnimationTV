"use client"
import { AlignLeft } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import SideMenu from './SideMenu'
import { usePathname } from 'next/navigation'

const MonileMenu = () => {
  const [isSidebarOpen, setIsSidebarOpen ] = useState(false);
  const pathname = usePathname();
  
  useEffect(() => {
    // ocultar la barra lateral al cambiar de ruta
    setIsSidebarOpen(false)
  }, [pathname])

  return (
    <>
      <button onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
        <AlignLeft className="hover:text-atv-tercero hoverEffect md:hidden hover:cursor-pointer" />
      </button>
      <div className="md:hidden" >
        <SideMenu isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
      </div>
    </>
  )
}

export default MonileMenu
