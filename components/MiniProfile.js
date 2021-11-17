import React from 'react'

function MiniProfile() {
    return (
        <div className="flex items-center mt-14 ml-10">
            <img src="https://picsum.photos/id/237/200/300" className="w-16 h-16 border rounded-full p-[2px]"></img>
            <div className="flex-1 mx-4">
                <h2 className="font-bold">Mike</h2>
                <h3 className="text-sm text-gray-400">first</h3>
            </div>
            <button className="font-semibold text-sm text-blue-400">Sign Out</button>
        </div>
    )
}

export default MiniProfile
