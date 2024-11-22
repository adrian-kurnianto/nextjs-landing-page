import React from 'react'
import { navLinks } from './Navlink'
import { XMarkIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'

type Props = {
  showNav: boolean,
  closeNav: () => void
}


function MobileNavbar({ showNav, closeNav }: Props) {

  const navOpen = showNav ? 'translate-x-0' : 'translate-x-[100%]'

  return (
    <div className='flex justify-end w-full origin-right'>
      <div className={`${navOpen} fixed inset-0 transition-all z-[10000] bg-slate-500 w-full h-[100vh]`}>
      </div>
      <div className={`${navOpen} fixed flex flex-col h-full transform transition-all duration-300 w-[90%] bg-white z-[10001]`}>
        <div>
          <div className='flex justify-between p-10'>
            <h1 className='text-xl bg-gradient-to-r from-green-500 to-sky-400 md:text-2xl font-bold inline-block text-transparent bg-clip-text'>Leaf</h1>
            <XMarkIcon onClick={closeNav} className='w-6 h-6'>
            </XMarkIcon>
          </div>
          <div className='gap-10 flex flex-col p-10'>
            {navLinks.map((el) => {
              return <Link href={el.url} key={el.id}><p className='nav-link'>{el.label}</p></Link>
            })}
            <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full md:block lg:block w-full'>Join us</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MobileNavbar