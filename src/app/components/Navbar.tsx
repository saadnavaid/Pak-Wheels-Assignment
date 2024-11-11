import Logo from "../images/Logo"
import Link from "next/link"

export default function Navbar () {
    return (
        <div>
        <div className="bg-black text-white pt-1 px-24 flex justify-between
         items-center border-b border-gray-400">
  <div className="flex items-start bg-black w-4/5 text-sm -my-1">
  <img src="/mobile.png" alt="" width={25} height={20} /> Download App via SMS
  </div>

  <div className="flex space-x-2">
    <div><img src="/urdu-text.png" alt="" width={40} height={40} /> 
      </div>
       <div className="text-sm hover:underline border-l border-gray-400 pl-2">Sign Up</div>
    <div className="text-sm hover:underline border-l border-gray-400 pl-2">Sign In</div>
  </div>
</div>

            <div className="flex w-full bg-black h-5 items-end"></div>
            <nav className="flex w-full bg-black h-6 items-end">
      <div className="h-9 w-24 text-justify"></div>
      <div className="h-9 w-72 text-justify">  
        <Link href="/"><Logo /></Link>
         </div>
       
      <div className="flex justify-right w-4/5 items-end">
      <button className="rounded-lg h-7 w-24 text-white text-center hover:underline"><Link href="./components/Bikes">Bikes</Link></button>
      <button className="rounded-lg h-7 w-24 text-white text-center hover:underline">New Cars</button>
      <button className="rounded-lg h-7 w-24 text-white text-center hover:underline">Used Cars</button>
      <button className="rounded-lg h-7 w-24 text-white text-center hover:underline">Auto Store</button>
      <button className="rounded-lg h-7 w-24 text-white text-center hover:underline">Videos</button>
      <button className="rounded-lg h-7 w-24 text-white text-center hover:underline">Forum</button>
      <button className="rounded-lg h-7 w-24 text-white text-center hover:underline">Blog</button>
      <button className="rounded-lg h-7 w-24 text-white text-center hover:underline">More</button>
      <button className="bg-red-600 rounded h-9 mb-1 w-28 text-center hover:underline text-white">Post an Ad</button>
        
      </div>  
    </nav>
    </div>
    )
}