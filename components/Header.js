import React from 'react';
import Image from 'next/image';
import { SearchIcon, MenuIcon, PaperAirplaneIcon, PlusCircleIcon, UserGroupIcon, HeartIcon } from '@heroicons/react/outline';
import { HomeIcon } from '@heroicons/react/solid';

function Header() {
    return (
        <div className="shadow-sm border-b bg-white sticky top-0 z-50">
            <div className="flex justify-between max-w-6xl mx-5 lg:mx-auto">
                {/* homepage */}
                <div className="relative hidden lg:inline-grid w-24 cursor-pointer">
                    <Image src="https://links.papareact.com/ocw" layout="fill" objectFit="contain" />
                </div>
                <div className="relative lg:hidden w-10 cursor-pointer">
                    <Image src="https://links.papareact.com/jjm" layout="fill" objectFit="contain" />
                </div>
                {/* search */}
                <div className="max-w-xs">
                    <div className="relative p-3 mt-1 rounded-md">
                        <div className="absolute inset-y-0 pl-3 flex items-center pointer-events-none">
                            <SearchIcon className="w-5 h-5 text-gray-500" />
                        </div>
                        <input className="bg-gray-50 pl-10 w-full sm:text-sm border-gray focus:ring-black focus:border-black" type="text"
                            placeholder="Search"></input>

                    </div>
                </div>
                {/* icons */}
                <div className="flex items-center justify-end space-x-4">
                    <HomeIcon className="nav-btn"></HomeIcon>
                    <div className="nav-btn relative">
                    <PaperAirplaneIcon className="nav-btn rotate-45"></PaperAirplaneIcon>
                    <div className="absolute bg-red-500 rounded-full w-5 h-5 flex justify-center items-center text-xs -top-1 -right-2 text-white">3</div>
                    </div>
                    <PlusCircleIcon className="nav-btn"></PlusCircleIcon>
                    <UserGroupIcon className="nav-btn"></UserGroupIcon>
                    <HeartIcon className="nav-btn"></HeartIcon>
                    <MenuIcon className="w-10 h-10 md:hidden cursor-pointer"></MenuIcon>
                    <img src="https://www.google.com/imgres?imgurl=https%3A%2F%2Fassets.juksy.com%2Ffiles%2Farticles%2F79479%2F800x_100_w-5b221dcbd3523.jpg&imgrefurl=https%3A%2F%2Fwww.juksy.com%2Farticle%2F79479-%25E6%25BF%2580%25E4%25BC%25BC%25E5%25A5%25B3%25E7%25A5%259E%25E7%2588%2586%25E7%25B4%2585%25EF%25BC%2581%2B%25E3%2580%258CG%25E5%25A5%25B6%25E5%25AD%2590%25E7%2591%259C%25E3%2580%258D%25E9%2581%25AD%25E9%2585%25B8%25E4%25B8%258A%25E5%259C%258D%25E4%25B8%258D%25E7%25A7%2591%25E5%25AD%25B8%25E3%2580%2580%25E7%259B%25B4%25E7%258E%2587%25E8%2587%25AA%25E7%2588%2586%25E6%2596%2599%25EF%25BC%259A%25E4%25B9%258B%25E5%2589%258D%25E7%259A%2584%25E8%2583%25B8%25E9%2583%25A8%25E5%25B0%258F%25E5%2588%25B0%25E8%25A2%25AB%25E5%25AB%258C%25E6%2598%25AF%25E9%25A3%259B%25E6%25A9%259F%25E5%25A0%25B4&tbnid=qIKsH2M0KgtMoM&vet=12ahUKEwj4iZzGoPzzAhXIdHAKHcqYCDwQMygoegUIARDMAQ..i&docid=6cG8qwiDEbVNXM&w=800&h=530&q=%E5%A5%B6%E5%AD%90&ved=2ahUKEwj4iZzGoPzzAhXIdHAKHcqYCDwQMygoegUIARDMAQ" className="rounded-full h-10 cursor-pointer"></img>
                </div>
            </div>
        </div>
    )
}

export default Header
