import React from 'react'
import Stories from './Stories'

function feed() {
    return (
       <main className="grid grid-cols-1 md:grid-cols-2 md:max-w-3xl mx-auto">
           <section className="col-span-2">
               <Stories></Stories>
           </section>
       </main>
    )
}

export default feed
