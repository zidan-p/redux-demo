import React from "react"

export const CakeView = () => {
    return (
        <div className="p-10 border rounded shadow bg-white">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Number of cake - 1234</h2>
            <div className="flex gap-2">
                <button className="px-3 bg-gray-200 rounded-sm hover:bg-gray-300 active:bg-gray-400">Order Cake</button>
                <button className="px-3 bg-gray-200 rounded-sm hover:bg-gray-300 active:bg-gray-400">Restock Cake</button>
            </div>
        </div>
    )
}