import React from "react"
import { useSelector } from "react-redux"

export const IcecreamView = () => {

    const numOfIcecream = useSelector(state => state.iceCream.numOfIcecream)

    return (
        <div className="p-10 border rounded shadow bg-white">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Number of Ice Cream - 
                <span className="bg-gray-800 text-white px-2 rounded">{numOfIcecream}</span>
            </h2>
            <div className="flex gap-2">
                <button className="px-3 bg-gray-200 rounded-sm hover:bg-gray-300 active:bg-gray-400">Order Ice Cream</button>
                <button className="px-3 bg-gray-200 rounded-sm hover:bg-gray-300 active:bg-gray-400">Restock Ice Cream</button>
            </div>
        </div>
    )
}