"use client"

import { FaQuoteLeft } from "react-icons/fa";
import { FaQuoteRight } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { useEffect, useState} from "react";

export default function Home() {
  const [quote, setQuote] = useState('')

  function newQuote(quotes) {
    setQuote(quotes[Math.floor(Math.random() * quotes.length)])
    if (!quote.author) {
      quote.author = "Unknown"
    }
  }

  async function getQuotes() {
    const apiUrl = 'https://jacintodesign.github.io/quotes-api/data/quotes.json';
    try {
      const response = await fetch(apiUrl)
      const quotes = await response.json()
      newQuote(quotes)
    } catch (error) {
      console.log("Error ", error)
    }
  }

  function tweetQuote() {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quote.text} \n- ${quote.author}`
    window.open(twitterUrl, '_blank')
  }

  useEffect(() => {
    getQuotes()
  }, [])

  return (
    <main className="h-screen flex flex-col items-center justify-center text-slate-600 text-4xl p-4">
        <div className="max-w-[900px] rounded-md p-4 bg-white/50 shadow-2xl">
          <div className="">
            <FaQuoteLeft className="inline-block mr-1" />
            <span id="quote">{quote.text}</span>
            <FaQuoteRight className="inline-block ml-1"/>
          </div>
          <div>
            <span className="italic flex justify-center pt-4">{quote.author}</span>
          </div>
          <div className="flex justify-between pt-4">
            <button onClick={tweetQuote} title="Tweet This!">
              <FaSquareXTwitter className="text-slate-900 hover:text-slate-700 text-6xl"/>
            </button>
            <button className="p-4 bg-slate-900 hover:bg-slate-700 text-white text-xl rounded-xl shadow-xl">New Quote</button>
          </div>
        </div>
    </main>
  )
}