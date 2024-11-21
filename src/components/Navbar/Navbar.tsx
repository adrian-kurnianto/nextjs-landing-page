import React from 'react'
import { navLinks } from '@/constant/Navlink'
import Link from 'next/link'



function Navbar() {
  return (
    <div className='w-full h-[10vh] z-[100]'>
      <div className='flex items-center h-full justify-between w-full mx-auto px-5 xl:px-8 '>
        <h1 className='text-xl bg-gradient-to-r from-green-500 to-sky-400 md:text-2xl font-bold inline-block text-transparent bg-clip-text'>Leaf</h1>
        <div className='hidden lg:flex items-center space-x-14'>
        {navLinks.map((el) =>{
          return <Link href={el.url} key={el.id}><p className='nav-link'>{el.label}</p></Link>
        })}
        </div>
        <div>
          <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full hidden lg:block'>Contact Us</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar