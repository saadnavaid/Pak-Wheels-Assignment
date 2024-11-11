import Link from "next/link"

export default function Corolla () {
    return(
        <div className="bg-gray-100 flex flex-col min-h-screen">
        <div className="text-3xl text-center font-bold text-black py-4">
            Toyota Corolla 2024 Price in Pakistan, Images, Reviews & Specs </div>
        <div className="text-center">
            <img src="/02 corolla.png" alt="Toyota Corolla" width={300} height={300} className="mx-auto"/>
        </div>
        <div className="flex justify-end items-end mx-10"> 
            <span className="bg-zinc-200 rounded-lg h-6 align-middle font-semibold px-2 text-wrap"> 
                <Link href="corolla-2">Specs{" >"}</Link></span>
            </div>
        <div className="text-center text-sm font-medium text-black my-5 mx-20">
        The 2024 Toyota Corolla is a refined, stylish, and fuel-efficient sedan that continues to uphold Toyota's reputation for 
        reliability and innovation. This new model features a sleek, modern exterior with a bold front grille and LED headlights 
        that add to its dynamic look. Inside, the Corolla offers a comfortable and tech-savvy cabin, equipped with an 8-inch 
        touchscreen infotainment system, Apple CarPlay, Android Auto, and available wireless charging for a more connected 
        driving experience. Under the hood, the 2024 Corolla offers a choice of efficient engines, including a hybrid option 
        for those seeking impressive fuel economy. With advanced safety features like Toyota Safety Sense 3.0, which includes 
        lane-keeping assist, adaptive cruise control, and automatic emergency braking, the Corolla provides peace of mind 
        on every drive. Perfect for urban commuters and families alike, the Toyota Corolla 2024 combines practicality, comfort, 
        and cutting-edge technology in a compact yet spacious design.
        </div>
        <div className="text-center mx-auto text-2xl text-green-500 font-medium">Rs. 60,00,000/-</div>
        <div className="text-center mx-auto py-5">
            <button className="bg-blue-700 w-44 rounded-md h-7 align-middle text-bold text-lg text-white">
            <Link href="../Checkout">Make Payment</Link></button>
        </div>
        </div>
    )
}