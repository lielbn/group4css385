'use client'

import Image from 'next/image'
import Link from 'next/link'
import Navbar from '../components/Navbar'


export default function GamePage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#fdf6f0] text-[#0b0742] p-8 flex flex-col items-center">
        <h1 className="text-4xl font-bold text-[#120c6e] mb-4 text-center">
          Group 4 - Unity Game Project: *To-Get-Her*
        </h1>

        {/* Game Backstory */}
        <section className="max-w-3xl bg-white rounded-xl shadow-lg p-6 mb-8 border-2 border-[#fdco94]">
          <h2 className="text-2xl font-semibold text-[#5e72eb] mb-2">Backstory</h2>
          <p className="text-lg mb-2">
            In our game, you play as a brave knight on a quest to rescue a princess trapped in a tall, guarded tower in the heart of a wild desert oasis. Your journey is dangerous—bombs are hidden throughout the desert and one wrong step could alert the monster guarding the tower. 
          </p>
          <p className="text-lg mb-2">
            As you travel, collect coins to increase your score, but beware—stepping on a bomb puts your life at risk. If that happens, you’ll have one chance to win your life back by playing and winning a quick round of Tic Tac Toe. Lose the game, and your life is lost.
          </p>
          <p className="text-lg">
            Will you navigate the desert and survive the traps to rescue the princess and complete your mission?
          </p>
        </section>
        
        {/* Unity Game Embed Placeholder */}
        <section id="play" className="w-full max-w-4xl mb-10">
          <h2 className="text-2xl font-semibold text-[#5e72eb] mb-4">Play the Game</h2>
          <div className="w-full aspect-video bg-[#cfd8dc] rounded-xl flex items-center justify-center border border-dashed border-[#5e72eb]">
            <p className="text-[#6b7280] font-mono">
              Unity WebGL Game Placeholder — Embed coming soon
            </p>
          </div>
        </section>
        
        {/* Theme Section */}
        <section id="theme" className="max-w-3xl bg-white rounded-xl shadow-lg p-6 mb-12 border-2 border-[#ff9190]">
          <h2 className="text-2xl font-semibold text-[#ff9190] mb-2">Theme: "To-Get-Her"</h2>
          <p className="text-lg">
            The theme of our game is a play on the word <strong>together</strong>, reimagined as <strong>to-get-her</strong>. 
            Our mission is not just about defeating obstacles—it’s about getting her back, saving someone who needs us...
          </p>
        </section>


        {/* Footer */}
        <footer className="text-sm text-[#6b7280]">
          Created by CSS 385 Group 4 — 2025
        </footer>
      </main>
    </>
  )
}
