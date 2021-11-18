
import { getProviders, signIn as signInAction } from "next-auth/react";
import React from 'react'
import Header from "../../components/Header";

// browser
function signIn({ providers }) {
    return (
        <>
            <Header></Header>
            <div className="-mt-56 flex flex-col items-center justify-center min-h-screen">
                {Object.values(providers).map((provider) => {
                    console.log(provider)
                    return (
                        <div key={provider.name}>
                            <button className="bg-blue-500 text-white p-3 rounded-lg" onClick={() => signInAction(provider.id, { callbackUrl: '/' })}>
                                Sign in with {provider.name}
                            </button>
                        </div>
                    )
                })}
            </div>
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
