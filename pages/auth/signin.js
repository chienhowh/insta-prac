
import { getProviders, signIn as signInAction } from "next-auth/react";
import React from 'react'

// browser
function signIn({ providers }) {
    return (
        <>
            {Object.values(providers).map((provider) => {
                console.log(provider)
                return (
                    <div key={provider.name}>
                        <button onClick={() => signInAction(provider.id)}>
                            Sign in with {provider.name}
                        </button>
                    </div>
                )
            })}
        </>
    )
}

// server side
export async function getServerSideProps() {
    const providers = await getProviders();
    return {
        props: {
            providers
        }
    }
}

export default signIn
