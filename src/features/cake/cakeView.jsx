import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { ordered, restocked } from "./cakeSlice"

export const CakeView = () => {

    const numOfCakes = useSelector(state => state.cake.numOfCakes)
    const dispatch = useDispatch();
    return (
        <div className="p-10 border rounded shadow bg-white">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Number of cake - 
                <span className="bg-gray-800 text-white px-2 rounded">{numOfCakes}</span>
            </h2>
            <div className="flex gap-2">
                <button 
                    onClick={() => dispatch(ordered())}
                    className="px-3 bg-gray-200 rounded-sm hover:bg-gray-300 active:bg-gray-400"
                >
                    Order Cake
                </button>
                <button 
                    onClick={() => dispatch(restocked(5))}
                    className="px-3 bg-gray-200 rounded-sm hover:bg-gray-300 active:bg-gray-400"
                >
                    Restock Cake
                </button>
            </div>
        </div>
    )
}