import React from 'react'
import { PlusIcon } from '@heroicons/react/solid';


function Story({ username, image, present }) {
    return (
        <div>
            <div className="relative  cursor-pointer hover:scale-110 transition ease-out duration-200">
                <img src={image} className="p-[1.5px] w-14 h-14 rounded-full border-red-500 border-2 object-contain "></img>
                {present && (
                    <div className="w-5 h-5 rounded-full bg-blue-400 absolute right-0 bottom-1 flex justify-center">
                        <PlusIcon className="w-4 text-white"></PlusIcon>
                    </div>
                )}
            </div>
            <p className="w-14 text-xs truncate text-center">{username}</p>
        </div>
    )
}

export default Story
