import Link from "next/link"
export default function Swift () {
    return(
        <div className="bg-gray-100 flex flex-col min-h-screen">
        <div className="text-5xl text-center font-bold text-black py-4">
            Suzuki Swift GLX CVT 2024 Price in Pakistan, Images, Reviews & Specs </div>
        <div className="text-center">
            <img src="/02 swift.png" alt="Suzuki Swift" width={400} height={400} className="object-cover mx-auto"/>
        </div>
        <div className="flex justify-end items-end mx-10"> 
            <span className="bg-zinc-200 rounded-lg h-6 align-middle font-semibold px-2 text-wrap"> 
                <Link href="swift-2">Specs{" >"}</Link></span>
            </div>
        <div className="text-center text-sm font-medium text-black my-5 mx-20">
        The 2024 Suzuki Swift GLX CVT is a compact hatchback that blends style, efficiency, and practicality, making it an ideal 
        choice for urban drivers. Its sporty exterior, with a distinctive front grille and sharp LED headlights, gives the Swift a 
        modern and energetic look. Despite its small size, the Swift offers a surprisingly roomy interior, with comfortable seating 
        and a driver-focused layout. The 7-inch infotainment touchscreen supports Apple CarPlay and Android Auto, ensuring 
        connectivity on the go. Powered by an efficient engine paired with a Continuously Variable Transmission (CVT), the Swift 
        GLX provides smooth and fuel-efficient performance, ideal for city driving and stop-and-go traffic. It handles well in 
        tight spaces and offers easy maneuverability, thanks to its lightweight build. Safety features, including dual airbags, 
        ABS with EBD, stability control, and rear parking sensors, add peace of mind for both driver and passengers. With its blend 
        of style, comfort, and smart features, the 2024 Suzuki Swift GLX CVT is perfect for those looking for a fun, reliable, and 
        efficient car for urban adventures.
        </div>
        <div className="text-center mx-auto text-2xl text-green-500 font-medium">Rs. 48,00,000/-</div>
        <div className="text-center mx-auto py-5">
            <button className="bg-blue-700 w-44 rounded-md h-7 align-middle text-bold text-lg text-white">
            <Link href="../Checkout">Make Payment</Link></button>
        </div>
        </div>
    )
}