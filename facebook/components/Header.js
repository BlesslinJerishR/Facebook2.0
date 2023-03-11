import Image from 'next/image'
import React from 'react'
import {
    BellIcon,
    ChatIcon,
    ChevronDownIcon,
    HomeIcon,
    UserGroupicon,
    ViewGridicon,
} from "@heroicons/react/solid";
import{
    FlagIcon,
    PlayIcon,
    SearchIcon,
    ShoppingCartIcon,
} from "@heroicons/react/outline";

function Header() {
  return (
    <div className='flex'>
      {/* Left */}
      <div className="flex items-center">
        <Image
        src="https://links.papareact.com/5me"
        width= {40}
        height= {40}
        layout="fixed"
         />
      </div>
      <div className="flex ml-2 items-center rounded-full bg-gray-100 p-2">
        <SearchIcon className="h-6 text-gray-600" />
        <input 
            className='flex ml-2 items bg-tansparent outline-none placeholder-gray-500' type="text" placeholder="Search Facebook"/>
      </div>
      {/* Center */}
      
      {/* Right */}
    
    </div>
  )
}

export default Header
