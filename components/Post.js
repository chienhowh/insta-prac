import React from 'react'
import { SearchIcon, MenuIcon, PaperAirplaneIcon, PlusCircleIcon, UserGroupIcon, HeartIcon, DotsHorizontalIcon, CheckIcon, BookmarkIcon, ChatIcon, EmojiHappyIcon } from '@heroicons/react/outline';
import { HomeIcon } from '@heroicons/react/solid';
function Post({ name, id, avatar, img, caption }) {
    return (
        <div className="my-7 bg-white border rounded-sm">
            {/* header */}
            <div className="flex items-center p-5">
                <img src={avatar} className="h-12 w-12 rounded-full mr-3 p-1 border object-contain"></img>
                <p className="flex-1 font-bold">{name}</p>
                <DotsHorizontalIcon className="h-5"></DotsHorizontalIcon>
            </div>
            {/* img */}
            <img src={img} className="w-full object-cover"></img>
            {/* btns */}
            <div className="flex justify-between">
                <div className="flex space-x-4">
                    <HeartIcon className="btn"></HeartIcon>
                    <ChatIcon className="btn"></ChatIcon>
                    <PaperAirplaneIcon className="btn"></PaperAirplaneIcon>
                </div>
                <BookmarkIcon className="btn"></BookmarkIcon>
            </div>
            {/* caption */}
            <div className="p-5 truncate"><span className="font-bold mr-1">{name}</span>
                {caption}
            </div>
            {/* comments */}
            {/* add comment */}
            <div className="flex items-center p-4">
                <EmojiHappyIcon className="h-7"></EmojiHappyIcon>
                <input type="text" className="flex-1 border-none focus:ring-0 outline-none"></input>
                <button className="font-semibold text-blue-400">Post</button>
            </div>
        </div>
    )
}

export default Post
