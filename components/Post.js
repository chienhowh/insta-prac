import React, { useEffect, useState } from 'react'
import { SearchIcon, MenuIcon, PaperAirplaneIcon, PlusCircleIcon, UserGroupIcon, HeartIcon, DotsHorizontalIcon, CheckIcon, BookmarkIcon, ChatIcon, EmojiHappyIcon } from '@heroicons/react/outline';
import { HomeIcon, HeartIcon as HeartSolid } from '@heroicons/react/solid';
import { useSession } from 'next-auth/react';
import { addDoc, collection, deleteDoc, doc, onSnapshot, orderBy, query, serverTimestamp, setDoc } from '@firebase/firestore';
import { db } from '../firebase';
import Moment from 'react-moment';
import { async } from '@firebase/util';
function Post({ name, id, avatar, img, caption }) {
    const { data: session } = useSession();
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    const [likes, setLikes] = useState([]);
    const [hasLike, setHasLike] = useState(false);

    // upload comment
    const handleUpload = async (e) => {
        e.preventDefault();
        const msgToSend = message;
        setMessage('');
        await addDoc(collection(db, 'posts', id, 'comments'), {
            comment: msgToSend,
            username: session.user.username,
            avatar: session.user.image,
            uploadtime: serverTimestamp()
        })
    }

    // get comments
    useEffect(() => onSnapshot(query(collection(db, "posts", id, 'comments'), orderBy('uploadtime', 'desc')),
        (snapshot) => setMessages(snapshot.docs)), [db])

    // get likes
    useEffect(() => onSnapshot(collection(db, 'posts', id, 'likes'), (snapshot) => setLikes(snapshot.docs)), [db])

    // set has like
    useEffect(() => setHasLike(likes.findIndex(l => l.id === session.user.uid) !== -1), [likes])

    // clike like btn
    const likePost = async () => {
        if (hasLike) {
            await deleteDoc(doc(db, 'posts', id, 'likes', session.user.uid))
        } else {
            await setDoc(doc(db, 'posts', id, 'likes', session.user.uid), {
                username: session.user.username
            })
        }
        console.log(hasLike);
    }

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
                {session && (<div className="flex space-x-4">
                    {hasLike ? (<HeartSolid onClick={likePost} className="btn text-red-500"></HeartSolid>) : (<HeartIcon className="btn" onClick={likePost}></HeartIcon>)}
                    <ChatIcon className="btn"></ChatIcon>
                    <PaperAirplaneIcon className="btn"></PaperAirplaneIcon>
                </div>)}
                <BookmarkIcon className="btn"></BookmarkIcon>
            </div>
            {/* caption */}
            <div className="p-5 truncate">
                {likes.length > 0 && (<p className="font-bold mb-1">{likes.length} likes</p>)}
                <span className="font-bold mr-1">{name}</span>
                {caption}
            </div>
            {/* comments */}
            {messages.length > 0 && (
                <div className="ml-10 h-20 overflow-y-scroll scrollbar-thumb-black scrollbar-thin">
                    {messages.map(msg => (
                        <div key={msg.id} className="flex items-center space-x-2 mb-3">
                            <img className="h-7 rounded-full" src={msg.data().avatar}></img>
                            <p className="text-sm flex-1"><span className="font-bold">{msg.data().username}</span>{msg.data().comment}</p>
                            <Moment fromNow>{msg.data().uploadtime?.toDate()}</Moment>
                        </div>
                    ))}
                </div>
            )}
            {/* add comment */}
            {session && (<div className="flex items-center p-4">
                <EmojiHappyIcon className="h-7"></EmojiHappyIcon>
                <input type="text" value={message} onChange={(e) => setMessage(e.target.value)} className="flex-1 border-none focus:ring-0 outline-none"></input>
                <button type="submit" disabled={!message.trim()} onClick={handleUpload} className="font-semibold text-blue-400">Post</button>
            </div>)}
        </div>
    )
}

export default Post
