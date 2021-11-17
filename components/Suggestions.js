import React, { useEffect, useState } from 'react'
import faker from 'faker';
function Suggestions() {
    const [suggestions, setSuggestions] = useState([]);

    useEffect(() => {
        const suggestions = [...Array(5)].map((_, i) =>
            ({ ...faker.helpers.contextualCard(), id: i }))
        setSuggestions(suggestions);
    }, [])
    return (

        <div className="mt-4 ml-10">
            <div className="flex justify-between">
                <h2 className="font-bold text-sm text-gray-400">Suggestions for you</h2>
                <button className="text-gray-600 font-semibold">See All</button>
            </div>
            {suggestions.map(s => (
                <div key={s.id} className="flex items-center mb-3">
                    <img className="w-10 h-10 rounded-full border p-[2px]" src={s.avatar}></img>
                    <div className="flex-1">
                        <h2 className="font-semibold text-sm">{s.username}</h2>
                        <h3 className="text-xs text-gray-400">Works at {s.company.name}</h3>
                    </div>
                    <button className="text-blue-400 text-sm">Follow </button>
                </div>)
            )}
        </div>
    )
}

export default Suggestions
