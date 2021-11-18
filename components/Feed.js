import { useSession } from 'next-auth/react'
import React from 'react'
import MiniProfile from './MiniProfile'
import Posts from './Posts'
import Stories from './Stories'
import Suggestions from './Suggestions'

function feed() {
    const { data: session } = useSession();
    return (
        <main className={`grid grid-cols-1 md:grid-cols-2 md:max-w-3xl mx-auto xl:grid-cols-3 xl:max-w-6xl ${!session && "!grid-cols-1 !max-w-3xl"}`}>
            <section className="col-span-2">
                <Stories></Stories>
                <Posts></Posts>
            </section>
            {session && (<section className="hidden md:col-span-1 xl:inline-grid">
                <div>
                    <MiniProfile></MiniProfile>
                    <Suggestions></Suggestions>
                </div>
            </section>)}
        </main>
    )
}

export default feed
