import Link from "next/link"

export default function Featuring () {
    return(
<div className="bg-gray-200 items-center">
    <div className="flex justify-center items-start px-2 pt-4 mt-4 mx-6 text-gray-600">
        <div className="flex items-start w-4/5 text-gray-500 text-lg">Featured New Cars
        </div>
        <div className="flex flex-col justify-end space-x-2 text-xs hover:underline text-blue-400">
        View All New Cars
        </div>
    </div>
    <div className="flex justify-center items-start px-28 py-0 text-gray-600">
    <div className="flex items-start text-xs space-x-1 w-full border-b border-gray-400">
      <button className="rounded-lg h-7 w-14 text-gray-500 hover:scale-150 hover:text-blue-500 text-center">Popular</button>
      <button className="rounded-lg h-7 w-24 text-gray-500 hover:scale-150 hover:text-blue-500 text-center">Upcoming</button>
      <button className="rounded-lg h-7 w-24 text-gray-500 hover:scale-150 hover:text-blue-500 text-center">Newly Launched</button>
    </div>
    </div>
    <div className="flex justify-center space-x-4 p-2 pt-1 pb-10">  
    <div className="flex items-center bg-white">
        <Link href="./components/Cars/corolla" className="block w-60 rounded-lg p-2 hover:scale-110">
        <img src="01 corolla.png" alt="" width={250} height={80} className="object-cover rounded-md" />
        <h1 className="font-bold text-blue-700 text-base text-center">Toyota Corolla</h1>
        <div className="text-sm text-green-400 text-center font-thin"> PKR 59.7 - 75.5 lacs</div>
        <div className="px-20"><img src="3star.png" alt="" width={70} height={50} /></div>
        </Link>
    </div>
    <div className="flex justify-center bg-white">
        <Link href="./components/Cars/swift" className="block w-60 rounded-lg p-2 hover:scale-110">
        <img src="01 swift.png" alt="" width={250} height={200} className="rounded-md" />
        <h1 className="font-bold text-blue-700 text-base text-center pt-1">Suzuki Swift</h1>
        <div className="text-sm text-green-400 text-center font-thin"> PKR 43.4 - 47.2 lacs</div>
        <div className="px-20"><img src="3star.png" alt="" width={70} height={50} /></div>
        </Link>
    </div>
    <div className="flex items-center bg-white">
        <Link href="./components/Cars/city" className="block w-60 rounded-lg p-4 hover:scale-110">
        <img src="01 city.png" alt="" width={250} height={100} className="object-cover rounded-md" />
        <h1 className="font-bold text-blue-700 text-base text-center pt-1">Honda City</h1>
        <div className="text-sm text-green-400 text-center font-thin"> PKR 46.5 - 58.5 lacs</div>
        <div className="flex  justify-center items-center text-gray-700 text-xs font-light"><img src="3star.png" alt="" width={70} height={50} />458 Reviews</div>
        </Link>
    </div>
    <div className="flex items-center bg-white">
        <Link href="./components/Cars/civic" className="block w-60 rounded-lg p-4 hover:scale-110">
        <img src="01 civic.png" alt="" width={230} height={100} className="object-cover rounded-md" />
        <h1 className="font-bold text-blue-700 text-base text-center pt-1">Honda Civic</h1>
        <div className="text-sm text-green-400 text-center font-thin"> PKR 86.6 - 99.0 lacs</div>
        <div className="flex justify-center items-center text-gray-700 text-xs font-light"><img src="3star.png" alt="" width={70} height={50} />357 Reviews</div>
        </Link>
    </div>
    </div>
</div>
    )
}