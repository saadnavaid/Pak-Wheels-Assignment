import Link from "next/link"

export default function Logo () {
    return (
        <button className="container mx-auto" >
  <img src="/logo.png" 
       className="w-52 h-7 rounded-lg  indent-40" /> <Link href="/"></Link>
</button>
    )
    
}