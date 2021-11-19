import faker from 'faker';
import { useSession } from 'next-auth/react';

import React, { useEffect, useState } from 'react'
import Story from './Story';

function Stories() {
    const [users, setUser] = useState([]);
    const { data: session } = useSession();
    useEffect(() => {
        const users = [...Array(20)].map((_, i) => ({ ...faker.helpers.contextualCard(), id: i }))
        setUser(users);
    }, [])
    return (
        <div className="flex p-6 space-x-2 bg-white mt-8 border-gray-200 overflow-x-scroll border rounded-sm scrollbar-thin scrollbar-thumb-black">
            {session && (<Story username={session.user.username} image={session.user.image} present={true}></Story>)}
            {users.map(u => <Story key={u.id} username={u.username} image={u.avatar}></Story>)}
        </div>
    )
}

export default Stories
