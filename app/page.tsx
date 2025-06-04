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
            In our game, you play as a brave cowboy on a quest to rescue a princess who cannot make it back home due to her sickness, therefore, she is stuck in the heart of a wild desert oasis. Your goal is to save the princess and through the process hopefully win her love. Your journey is dangerous—bombs are hidden throughout the desert and one wrong step would mean your place in the journe is over. 
          </p>
          <p className="text-lg mb-2">
            As you travel, you will collect aloes to increase your score and with their amazing healing power, you will make a healing potion for our princess, but beware — stepping on a bomb puts your life at risk. You will receive 2 lives, if you lose all, you’ll have one chance to win your life back by playing and winning a quick round of Tic Tac Toe. Lose the game, and your life is lost.
          </p>
          <p className="text-lg">
            Will you navigate the desert and survive the traps to rescue the princess and complete your mission?
          </p>
        </section>

        {/* Trailer Section */}
        <section id="trailer" className="w-full max-w-4xl mb-10">
          <h2 className="text-2xl font-semibold text-[#5e72eb] mb-4 text-center">Game Trailer</h2>
          <div className="w-full aspect-video bg-black rounded-xl overflow-hidden shadow-lg">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
              title="Once Upon a Run Trailer"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-[400px] rounded-xl"
            ></iframe>
          </div>
        </section>

        {/* Play Section */}
        <section id="play" className="w-full mb-16 flex flex-col items-center">
          <h2 className="text-3xl font-bold text-center text-[#5e72eb] mb-4">Play the Game</h2>
          <div className="flex justify-center w-full">
            <div className="w-full max-w-[960px] rounded-xl overflow-hidden shadow-lg border border-[#5e72eb]">
              <iframe
                src="https://jmnguyen03.github.io/FinalProject/"
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
