'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const pathname = usePathname()

export default function Navbar() {
  return (
    <nav className="w-full bg-[#643a28] text-white px-8 py-4 shadow-md font-game z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo / Title */}
        <div className="text-lg tracking-wider uppercase text-[#fdco94]">
          To-Get-Her
        </div>

        {/* Navigation Links */}
        <div className="flex space-x-8 text-sm uppercase tracking-wide">
          <Link href="/">
            <span className="text-[#fcebd6] hover:text-[#c4743b] transition duration-200">
              Home
            </span>
          </Link>
          <Link href="#play">
            <span className="text-[#fcebd6] hover:text-[#c4743b] transition duration-200">
              Play Game
            </span>
          </Link>
          <Link href="#theme">
            <span className="text-[#fcebd6] hover:text-[#c4743b] transition duration-200">
              Theme
            </span>
          </Link>
        </div>
      </div>
    </nav>
  )
}
