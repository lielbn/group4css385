'use client'

import Image from 'next/image'
import Link from 'next/link'
import Navbar from '../components/Navbar'
import './globals.css';


export default function GamePage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#fdf6f0] text-[#0b0742] p-8 flex flex-col items-center">
        <h1 className="text-4xl font-bold text-[#120c6e] mb-4 text-center">
          Once Upon a Run
        </h1>
        <h1 className="text-4xl font-bold text-[#120c6e] mb-4 text-center">
          Group 4 - Unity Game Project
        </h1>

                {/* Game Backstory */}
        <section className="max-w-3xl bg-white rounded-xl shadow-lg p-6 mb-8 border-2 border-[#fdco94]">
          <h2 className="text-2xl font-semibold text-[#5e72eb] mb-2">Backstory</h2>
          <p className="text-lg mb-2">
            Dust off those boots—this cowboy isn’t riding a horse, he’s running full speed through danger for love! 
            The princess is stuck in the middle of two brutal deserts with nothing but a sprained ankle and a serious lack of aloe vera. 
            Your job? Dash through scorching sand and icy madness to collect aloe and save the day (and maybe score a kiss).
          </p>
          <p className="text-lg mb-2">
            Set your target score (anywhere from 100 to 5000) and take off running. 
            You’ll earn 70% of your score in the Sand Desert, dodging cranky sand rocks. 
            Then brace yourself for the Ice Desert, where 30% of your score waits behind a blizzard of slippery icebergs.
          </p>
          <p className="text-lg mb-2">
            Each aloe is worth +2 points, but here’s the twist: Every 20 points, your speed ramps up by 3. 
            Because clearly, things weren’t chaotic enough. Feeling bold? You can boost your speed manually too—
            because who needs safety when you have adrenaline?
          </p>
          <p className="text-lg mb-2">
            You’ve got 2 lives, so watch your step. Lose both, and your only shot is a one-round Tic Tac Toe game to win a life back. 
            No pressure. Lose again, and it’s back to square one—unless you’re brave (or stubborn) enough to restart.
          </p>
          <p className="text-lg mb-2">
            Use the <strong>arrow keys</strong> to move left and right, and press the <strong>space bar</strong> to jump over hazards.
          </p>
          <p className="text-lg mb-2">
            Will you outrun bombs, survive sliding into icebergs, and collect enough aloe to save the princess? 
            Or will you be remembered as the cowboy who sprinted straight into disaster?
          </p>
          <p className="text-lg font-semibold">
            Only one way to find out. Run, cowboy, run!
          </p>
        </section>


        {/* Trailer Section */}
        <section id="trailer" className="w-full mb-16 flex flex-col items-center">
          <h2 className="text-3xl font-bold text-center text-[#5e72eb] mb-4">Game Trailer</h2>
          <div className="flex justify-center w-full">
            <div className="w-full max-w-[960px] rounded-xl overflow-hidden shadow-lg border border-[#5e72eb]">
              <iframe
                src="https://www.youtube.com/embed/GxiE10fzalE?si=dAw0rbDS14OJXdnA"
                width="960"
                height="540"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="block w-full"
                title="Once Upon a Run Trailer"
              ></iframe>
            </div>
          </div>
        </section>

        {/* Play Section */}
        <section id="play" className="w-full mb-16 flex flex-col items-center">
          <h2 className="text-3xl font-bold text-center text-[#5e72eb] mb-4">Play the Game</h2>
          <div className="flex justify-center w-full">
            <div className="w-full max-w-[960px] rounded-xl overflow-hidden shadow-lg border border-[#5e72eb]">
              <iframe
                src="https://jmnguyen03.github.io/OnceUponARun/"
                width="960"
                height="600"
                allowFullScreen
                scrolling="no"
                className="block w-full"
                title="Once Upon a Run"
              ></iframe>
            </div>
          </div>
        </section>
        
        {/* Theme Section */}
        <section id="theme" className="max-w-3xl bg-white rounded-xl shadow-lg p-6 mb-12 border-2 border-[#ff9190]">
          <h2 className="text-2xl font-semibold text-[#ff9190] mb-2">Theme: "To-Get-Her"</h2>
          <p className="text-lg">
            The theme of our game is a play on the word <strong>together</strong>, reimagined as <strong>to-get-her</strong>. 
            Our mission is not just about defeating obstacles—it’s about getting her the neccesary healing potion for her injury, saving someone who needs us...
          </p>
        </section>


        {/* Footer */}
        <footer className="text-sm text-[#6b7280]">
          Created by CSS 385 Group 4 - Liel Ben Noon, Julia Nguyen, Manish Sharma, and Vanshika Singh — 2025 
        </footer>
      </main>
    </>
  )
}
