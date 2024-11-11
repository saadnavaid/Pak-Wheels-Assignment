import Link from "next/link"
export default function Civic () {
    return(
        <div className="bg-gray-100 flex flex-col min-h-screen">
        <div className="text-4xl text-center font-bold text-black py-4">
            Honda Civic 2024 Price in Pakistan, Images, Reviews & Specs </div>
        <div className="text-center">
            <img src="/02 civic.png" alt="Honda Civic" width={400} height={400} className="object-cover mx-auto"/>
        </div>
        <div className="flex justify-end items-end mx-10"> 
            <span className="bg-zinc-200 rounded-lg h-6 align-middle font-semibold px-2 text-wrap"> 
                <Link href="civic-2">Specs{" >"}</Link></span>
            </div>        
        <div className="text-center text-sm font-medium text-black my-5 mx-20">
        The 2024 Honda Civic continues to uphold its reputation as a stylish, high-performance compact sedan with a strong focus 
        on technology, comfort, and safety. Sporting a sleek, modern design with a low, wide stance, the Civic exudes an athletic 
        appeal. Its aggressive front grille, bold LED headlights, and sharp lines make it a head-turner on the road. Inside, 
        the Civic offers a driver-centric cabin, outfitted with high-quality materials, spacious seating, and a sophisticated 
        design. The 9-inch touchscreen infotainment system, compatible with Apple CarPlay and Android Auto, keeps drivers 
        connected, while optional wireless charging and a premium audio system enhance the experience. Under the hood, the 
        2024 Civic boasts a powerful yet fuel-efficient engine with options for a turbocharged model, paired with either a 
        smooth CVT or a responsive manual transmission, depending on the trim. The Civic’s advanced suspension system delivers 
        sharp handling, making it agile on city streets and stable on highways. Safety is prioritized with Honda Sensing® 
        technology, which includes features like adaptive cruise control, lane-keeping assist, and collision mitigation braking. 
        The 2024 Honda Civic is an ideal choice for those seeking a blend of sporty performance, reliability, and advanced 
        technology in a compact, elegant package.
        </div>
        <div className="text-center mx-auto text-2xl text-green-500 font-medium">Rs. 97,95,000/-</div>
        <div className="text-center mx-auto py-5">
            <button className="bg-blue-700 w-44 rounded-md h-7 align-middle text-bold text-lg text-white">
            <Link href="../Checkout">Make Payment</Link></button>
        </div>
        </div>
    )
}