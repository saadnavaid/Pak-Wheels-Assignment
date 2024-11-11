export default function Hero () {
    return(
        <div>
            
            <div className="flex flex-row w-5/6 ml-28 mt-5 justify-center text-gray-700">
            <div className="border-b border-gray-300 w-72"></div>
            <div className="text-xl font-semibold mx-6 text-nowrap -my-4">Sell Your Car on PakWheels and Get the Best Prices</div>
            <div className="border-b border-gray-300 w-72"></div>
        </div>
        <div className="justify-center ml-28 w-5/6 grid grid-cols-9 grid-rows-1 h-48 bg-white border-r border-l border-b border-gray-300">
            <div className="col-span-4 text-lg text-blue-800 text-left py-8 px-16 not-italic"> Post your Ad on PakWheels
            <ul className="text-gray-500 text-sm font-normal">
                <li className="flex"> <img src="/tick.png" alt="" width={20} height={20} /> Post your ad for FREE in three easy steps</li>
                <li className="flex"> <img src="/tick.png" alt="" width={20} height={20} /> Get Genuine offers from verified Buyers</li>
                <li className="flex"> <img src="/tick.png" alt="" width={20} height={20} /> Sell your car Fast at the Best Price</li>
            </ul>
            <button className="bg-red-600 h-8 w-32 text-white font-normal rounded-md my-5 text-center">Post Your Ad</button>
            </div>        
            <div className="flex flex-col col-span-1 items-center justify-center text-gray-700">
      <div className="border-r border-gray-300 h-14"></div>
      <span className="text-sm font-bold my-2">OR</span>
      <div className="border-r border-gray-300 h-14"></div>
        </div>
            <div className="col-span-4 text-lg text-blue-800 text-left py-8 px-20 not-italic"> Try PakWheels Sell It For Me
            <ul className="text-gray-500 text-sm font-normal ">
            <li className="flex"> <img src="/tick.png" alt="" width={20} height={20} /> Dedicated Sales Experts to Sell Your Car</li>
            <li className="flex"> <img src="/tick.png" alt="" width={20} height={20} /> We Bargain for You and Share the Best Offer</li>
            <li className="flex"> <img src="/tick.png" alt="" width={20} height={20} /> We Ensure Safe & Secure Transaction</li>
            </ul>
            <button className="bg-blue-600 h-8 w-40 text-white font-normal rounded-md my-5">Register Your Car</button>
            </div>
            </div>
        </div>
    )
}