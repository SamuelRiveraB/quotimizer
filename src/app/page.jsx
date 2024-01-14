"use client"

import { FaQuoteLeft } from "react-icons/fa";
import { FaQuoteRight } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { useEffect, useState} from "react";
import { LuLoader2 } from "react-icons/lu";

export default function Home() {
  const [quotes, setQuotes] = useState([])
  const [quote, setQuote] = useState('')
  const [loading, setLoading] = useState(true)

  function newQuote() {
    setLoading(true)
    try {
      setQuote(quotes[Math.floor(Math.random() * quotes.length)])
      if (quote && !quote.author) {
        quote.author = "Unknown"
      }
      setLoading(false)
    } catch (error) {
      console.log("Error: ", error)
    }
  }

  async function getQuotes() {
    const apiUrl = 'https://jacintodesign.github.io/quotes-api/data/quotes.json';
    try {
      const response = await fetch(apiUrl)
      const responseJson = await response.json()
      setQuotes(responseJson)
    } catch (error) {
      console.log("Error ", error)
    }
  }

  useEffect(() => {
    if(quotes.length>0) {
      newQuote()
    }
  }, [quotes]);

  function tweetQuote() {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quote.text} - ${quote.author}`
    window.open(twitterUrl, '_blank')
  }

  useEffect(() => {
    getQuotes()
  }, [])

  return (
    <main className="h-screen flex flex-col items-center justify-center text-slate-600 text-4xl p-4">
        {loading && (<LuLoader2 id="loader" className="animate-spin absolute"/>)}
        {!loading && (<div id="container" className="max-w-[900px] rounded-md p-4 bg-white/50 shadow-2xl">
          <div>
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
            <button onClick={newQuote}className="p-4 bg-slate-900 hover:bg-slate-700 text-white text-xl rounded-xl shadow-xl">New Quote</button>
          </div>
        </div>)}
    </main>
  )
}