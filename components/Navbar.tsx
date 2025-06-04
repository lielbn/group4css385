'use client'

import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="w-full bg-[#643a28] text-white px-8 py-4 shadow-md font-game z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo / Title */}
        <div className="text-lg tracking-wider uppercase text-[#fdc094]">
          To-Get-Her
        </div>

        {/* Navigation Links */}
        <div className="flex space-x-8 text-sm uppercase tracking-wide">
          <Link href="/" passHref>
            <a className="text-[#fcebd6] hover:text-[#c4743b] transition duration-200">
              Home
            </a>
          </Link>
          <Link href="#trailer" passHref>
            <a className="text-[#fcebd6] hover:text-[#c4743b] transition duration-200">
              Trailer
            </a>
          </Link>
          <Link href="#play" passHref>
            <a className="text-[#fcebd6] hover:text-[#c4743b] transition duration-200">
              Play Game
            </a>
          </Link>
          <Link href="#theme" passHref>
            <a className="text-[#fcebd6] hover:text-[#c4743b] transition duration-200">
              Theme
            </a>
          </Link>
        </div>
      </div>
    </nav>
  )
}
