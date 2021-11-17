import React from 'react'
import Post from './Post'

function Posts() {
    const posts = [
        { id: 1, name: 'Mike', avatar: "https://picsum.photos/id/237/200/300", img: "https://picsum.photos/id/237/200/300", caption: 'first post!!!first post!!!first post!!!first post!!!first post!!!first post!!!first post!!!first post!!!first post!!!first post!!!' },
        { id: 2, name: 'Mike', avatar: "https://picsum.photos/id/237/200/300", img: "https://picsum.photos/id/237/200/300", caption: 'first post!!!' },
    ]
    return (
        <div>
            {posts.map(post => <Post key={post.id} id={post.id} name={post.name} avatar={post.avatar} img={post.img} caption={post.caption}></Post>)}
        </div>
    )
}

export default Posts
