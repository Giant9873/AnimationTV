import React from 'react'
import { cn } from '@/lib/utils';
import Link from 'next/link'

const Logo = ({className, spanDesign }:{className?: string, spanDesign?: string }) => {
  return (
    <Link href={"/"} className='inline-flex'>
        <h2 className={cn("text-2xl text-white font-black tracking-wider uppercase hover:text-atv-tercero hoverEffect group font-sans",className)}>
          A-<span className={cn("text-atv-tercero group-hover:text-white hoverEffect", spanDesign)}>TV</span>
        </h2>
    </Link>
  )
}

export default Logo
