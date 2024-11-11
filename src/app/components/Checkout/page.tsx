import Link from "next/link"
export default function Checkout () {
    return (
    <div className="bg-blue-50 flex flex-col min-h-screen">
        <div className="font-bold text-center text-4xl mx-auto mt-7">
            Enter Your Details
        </div>
        <div className="form flex gap-5 items-center flex-col min-h-screen mx-5 border border-gray-200 text-xs text-gray-500">
            <input type="text" className="p-2 rounded mt-40 w-1/5 h-9 border border-gray-200" placeholder="Enter Your Name" />
            <input type="email" className="p-2 rounded w-1/5 h-9 border border-gray-200" placeholder="Enter Your Email" />
            <input type="number" className="p-2 rounded w-1/5 h-9 border border-gray-200" placeholder="Card Number" />
            <input type="text" className="p-2 rounded w-1/5 h-9 border border-gray-200" placeholder="Address" />
        <div className="mx-auto py-5 text-xs">
        <button className="bg-blue-700 text-white px-2 rounded mx-auto h-9 w-32">
            <Link href="Thankyou">Place your order</Link></button>
        </div>
        </div>
    </div>
    )
}