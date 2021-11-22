import { collection, doc, onSnapshot, orderBy, query } from '@firebase/firestore'
import React, { useEffect, useState } from 'react'
import { db } from '../firebase'
import Post from './Post'

function Posts() {
    const [posts, setPosts] = useState([]);
    useEffect(() => onSnapshot(query(collection(db, "posts"), orderBy('uploadtime', 'desc')), (snapshot) => setPosts(snapshot.docs)), [db])
    return (
        <div>
            {posts.map(post => <Post key={post.id} id={post.id} name={post.data().username} avatar={post.data().avatar} img={post.data().image} caption={post.data().caption}></Post>)}
        </div>
    )
}

export default Posts
