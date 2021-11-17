import React from 'react'
import MiniProfile from './MiniProfile'
import Posts from './Posts'
import Stories from './Stories'
import Suggestions from './Suggestions'

function feed() {
    return (
        <main className="grid grid-cols-1 md:grid-cols-2 md:max-w-3xl mx-auto xl:grid-cols-3 xl:max-w-6xl">
            <section className="col-span-2">
                <Stories></Stories>
                <Posts></Posts>
            </section>
            <section className="hidden md:col-span-1 xl:inline-grid">
                <div>
                    <MiniProfile></MiniProfile>
                    <Suggestions></Suggestions>
                </div>
            </section>
        </main>
    )
}

export default feed
