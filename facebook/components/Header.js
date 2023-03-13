import Image from 'next/image'
import React from 'react'
import {
    BellIcon,
    ChatIcon,
    ChevronDownIcon,
    HomeIcon,
    UserGroupicon,
    ViewGridIcon,
    ViewGridicon,
} from "@heroicons/react/solid";
import{
    FlagIcon,
    PlayIcon,
    SearchIcon,
    ShoppingCartIcon,
    UserGroupIcon,
} from "@heroicons/react/outline";
import HeaderIcon from './HeaderIcon';

function Header() {
  return (
    <div className='flex sticky top-0 z-50 bg-white items-center p-2 lg:px-5 shadow-md'>
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
            className='hidden md:inline-flex ml-2 items bg-gray-100 outline-none 
            placeholder-gray-500 flex-shrink' type="text" placeholder="Search Facebook"/>
      </div>
      {/* Center */}
        <div className="flex justify-center flex-grow">
          <div className='flex space-x-6 md:space-x-2'>
            <HeaderIcon active Icon={HomeIcon}/>
            <HeaderIcon Icon={FlagIcon}/>
            <HeaderIcon Icon={PlayIcon}/>
            <HeaderIcon Icon={ShoppingCartIcon}/>
            <HeaderIcon Icon={UserGroupIcon}/>
          </div>
        </div>
      {/* Right */}
      <div className='flex items-center sm:space-x-2 justify-end'>
        {/* Profile Pic */}
        <Image
          className='rounded-full cursor-pointer'
          src="https://img.icons8.com/color/96/null/user-female-circle--v1.png"
          width={40}
          height={40}
          layout="fixed"
        />
        <p className='font-semibold pr-3 whitespace-nowrap'>Blesslin Jerish</p>
        <ViewGridIcon className='icon'/>
        <ChatIcon className='icon'/>
        <BellIcon className='icon'/>
        <ChevronDownIcon className='icon'/>
      </div>
    </div>
  )
}

export default Header
