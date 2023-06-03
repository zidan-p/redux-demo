import React from "react"
import { useSelector } from "react-redux"

export const CakeView = () => {

    const numOfCakes = useSelector(state => state.cake.numOfCakes)

    return (
        <div className="p-10 border rounded shadow bg-white">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Number of cake - 
                <span className="bg-gray-800 text-white px-2 rounded">{numOfCakes}</span>
            </h2>
            <div className="flex gap-2">
                <button className="px-3 bg-gray-200 rounded-sm hover:bg-gray-300 active:bg-gray-400">Order Cake</button>
                <button className="px-3 bg-gray-200 rounded-sm hover:bg-gray-300 active:bg-gray-400">Restock Cake</button>
            </div>
        </div>
    )
}