


export const UserView = () => {
    return (
        <div className="p-10 border rounded shadow bg-white">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">List of Users</h2>
            <div className="flex gap-2">
                <button className="px-3 bg-gray-200 rounded-sm hover:bg-gray-300 active:bg-gray-400">Fetch User</button>
            </div>
            <ul className="flex flex-col">
                <li className="text-blue-900 list-disc list-inside">user 1</li>
                <li className="text-blue-900 list-disc list-inside">user 1</li>
                <li className="text-blue-900 list-disc list-inside">user 1</li>
            </ul>
        </div>
    )
}