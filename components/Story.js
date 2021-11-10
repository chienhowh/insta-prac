import React from 'react'

function Story({ username, image }) {
    return (
        <div>
            <img src={image} className="p-[1.5px] w-14 h-14 rounded-full border-red-500 border-2 cursor-pointer object-contain hover:scale-110 transition ease-out duration-200"></img>
            <p className="w-14 text-xs truncate text-center">{username}</p>
        </div>
    )
}

export default Story
