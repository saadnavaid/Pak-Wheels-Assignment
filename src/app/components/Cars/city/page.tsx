import Link from "next/link"
export default function City () {
    return(
        <div className="bg-gray-100 flex flex-col min-h-screen">
        <div className="text-3xl text-center font-bold text-black py-4">
            Honda City 2024 Price in Pakistan, Images, Reviews & Specs </div>
        <div className="text-center">
            <img src="/02 city.png" alt="Honda City" width={400} height={400} className="object-cover mx-auto"/>
        </div>
        <div className="flex justify-end items-end mx-10"> 
            <span className="bg-zinc-200 rounded-lg h-6 align-middle font-semibold px-2 text-wrap"> 
                <Link href="city-2">Specs{" >"}</Link></span>
            </div>       
        <div className="text-center text-base font-medium text-black my-5 mx-20">
        The 2024 Honda City is a refined and versatile sedan that balances performance, comfort, and modern technology, making it a 
        strong contender in the compact sedan market. Known for its sleek and aerodynamic design, the new City exudes sophistication 
        with LED headlights, a streamlined grille, and elegant body lines. Inside, the City offers a spacious cabin with premium 
        materials, ample legroom, and a user-friendly layout that enhances the driving experience. The infotainment system, 
        featuring an 8-inch touchscreen, supports Apple CarPlay and Android Auto, ensuring seamless connectivity. Under the hood, 
        the 2024 City is equipped with an efficient yet powerful engine, paired with either a manual or CVT transmission, providing 
        a smooth and responsive drive. Its suspension is tuned for comfort, handling bumpy roads and city traffic with ease, while 
        its efficient fuel consumption makes it an ideal choice for daily commuting. Safety features include multiple airbags, 
        anti-lock braking system (ABS), electronic stability control, and a rearview camera, reinforcing Honda's commitment to 
        passenger safety. The 2024 Honda City is a well-rounded sedan, combining style, performance, and advanced features, perfect 
        for families and professionals seeking a reliable and comfortable ride.
        </div>
        <div className="text-center mx-auto text-2xl text-green-500 font-medium">Rs. 56,75,000/-</div>
        <div className="text-center mx-auto py-5">
            <button className="bg-blue-700 w-44 rounded-md h-7 align-middle text-bold text-lg text-white">
                <Link href="../Checkout">Make Payment</Link></button>
        </div>
        </div>
    )
}