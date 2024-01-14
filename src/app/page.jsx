import { FaQuoteLeft } from "react-icons/fa";
import { FaQuoteRight } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

export default function Home() {
  return (
    <main className="h-screen flex flex-col items-center justify-center text-slate-600 text-4xl p-4">
        <div className="max-w-[900px] rounded-md p-4 bg-white/50 shadow-2xl">
          <div className="">
            <FaQuoteLeft className="inline-block mr-1" />
            <span id="quote">What you are is what you have been. 
            What you'll be is what you do now.</span>
            <FaQuoteRight className="inline-block ml-1"/>
          </div>
          <div>
            <span className="italic flex justify-center pt-4">Buddha</span>
          </div>
          <div className="flex justify-between pt-4">
            <button title="Tweet This!">
              <FaSquareXTwitter className="text-slate-900 hover:text-slate-700 text-6xl"/>
            </button>
            <button className="p-4 bg-slate-900 hover:bg-slate-700 text-white text-xl rounded-xl shadow-xl">New Quote</button>
          </div>
        </div>
    </main>
  )
}
