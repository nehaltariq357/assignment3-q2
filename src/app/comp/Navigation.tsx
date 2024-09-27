import Link from 'next/link'
import React from 'react'
import Profile from './Profile/page'
 

const Navigation = () => {
  return (
    <main className='min-h-screen flex flex-col'>
    <header className='bg-slate-500 '> 
   <ul className='flex justify-evenly items-center h-20 '>
   <li className='hover:underline text-white'><Link href="./comp/Portfolio">Portfolio</Link></li>
    <li className='hover:underline text-white'><Link href="./comp/About">About</Link></li>
    <li className='hover:underline text-white'><Link href="./comp/Contact">Contact</Link></li>
   </ul>
    </header>

    <div className='flex-grow'>
    <Profile/>
    </div>
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="text-lg font-bold"></div>
          <div className="space-x-4">
          </div>
        </div>
        <div className="mt-4 text-center">
          &copy; {new Date().getFullYear()} My Website. All rights reserved.
        </div>
      </div>
    </footer>
    </main>
  )
}

 export default Navigation


