'use client'

import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="w-full bg-[#643a28] text-white p-4 shadow-md font-game flex justify-center">
      <div className="flex space-x-10 uppercase text-sm tracking-wider">
        <Link href="/">
          <span className="hover:text-[#fdco94] transition">Home</span>
        </Link>
        <Link href="#play">
          <span className="hover:text-[#fdco94] transition">Play Game</span>
        </Link>
        <Link href="#theme">
          <span className="hover:text-[#fdco94] transition">Theme</span>
        </Link>
      </div>
    </nav>
  )
}
