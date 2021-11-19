import React from 'react';
import Image from 'next/image';
import { SearchIcon, MenuIcon, PaperAirplaneIcon, PlusCircleIcon, UserGroupIcon, HeartIcon } from '@heroicons/react/outline';
import { HomeIcon } from '@heroicons/react/solid';
import { signIn, signOut, useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useRecoilState } from 'recoil';
import { modalState } from '../atoms/modol-atom';

function Header() {
    const { data: session } = useSession();
    const router = useRouter();
    const [open, setOpen] = useRecoilState(modalState);
    console.log(session);
    return (
        <div className="shadow-sm border-b bg-white sticky top-0 z-50">
            <div className="flex justify-between max-w-6xl mx-5 lg:mx-auto">
                {/* homepage */}
                <div className="relative hidden lg:inline-grid w-24 cursor-pointer">
                    <Image src="https://links.papareact.com/ocw" layout="fill" objectFit="contain" onClick={() => router.push('/')} />
                </div>
                <div className="relative lg:hidden w-10 cursor-pointer">
                    <Image src="https://links.papareact.com/jjm" layout="fill" objectFit="contain" onClick={() => router.push('/')} />
                </div>
                {/* search */}
                <div className="max-w-xs">
                    <div className="relative p-3 mt-1 rounded-md transition">
                        <div className="absolute inset-y-0 pl-3 flex items-center pointer-events-none">
                            <SearchIcon className="w-5 h-5 text-gray-500" />
                        </div>
                        <input className="bg-gray-50 pl-10 w-full sm:text-sm border-gray focus:ring-black focus:border-black" type="text"
                            placeholder="Search"></input>

                    </div>
                </div>
                {/* icons */}
                <div className="flex items-center justify-end space-x-4">
                    <HomeIcon className="nav-btn" onClick={() => router.push('/')}></HomeIcon>
                    <MenuIcon className="w-10 h-10 md:hidden cursor-pointer"></MenuIcon>
                    {session ? (<>
                        <div className="nav-btn relative">
                            <PaperAirplaneIcon className="nav-btn rotate-45"></PaperAirplaneIcon>
                            <div className="absolute bg-red-500 rounded-full w-5 h-5 flex justify-center items-center text-xs -top-1 -right-2 text-white">3</div>
                        </div>
                        <PlusCircleIcon className="nav-btn" onClick={() => { setOpen(true) }}></PlusCircleIcon>
                        <UserGroupIcon className="nav-btn"></UserGroupIcon>
                        <HeartIcon className="nav-btn"></HeartIcon>
                        <img src={session.user.image} onClick={() => signOut()} className="rounded-full h-10 cursor-pointer object-contain"></img>
                    </>) : (<button onClick={() => signIn()}>signIn</button>)}

                </div>
            </div>
        </div>
    )
}

export default Header
