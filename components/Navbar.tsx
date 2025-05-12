'use client'

import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="w-full bg-[#c4743b] text-white p-4 shadow-md font-game flex justify-between items-center">
      <div className="text-lg tracking-wide uppercase">
        🏜️ To-Get-Her
      </div>
      <ul className="flex space-x-6 text-sm">
        <li>
          <Link href="/">
            <span className="hover:text-yellow-300 transition">Home</span>
          </Link>
        </li>
        <li>
          <Link href="#play">
            <span className="hover:text-yellow-300 transition">Play Game</span>
          </Link>
        </li>
        <li>
          <Link href="#theme">
            <span className="hover:text-yellow-300 transition">Theme</span>
          </Link>
        </li>
      </ul>
    </nav>
  )
}
