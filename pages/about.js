import Head from 'next/head';

import React from 'react';
import { Sidebar } from '../components';
import Image from 'next/image';
import {
    HashtagIcon,
    BellIcon,
    InboxIcon,
    BookmarkIcon,
    ClipboardListIcon,
    UserIcon,
    DotsCircleHorizontalIcon,
    DotsHorizontalIcon,
  } from "@heroicons/react/outline";

import {HomeIcon} from '@heroicons/react/solid';

function About() {
    const [active, setActive ] = React.useState(true);


  return (
      <>
      <Head>
          <title>About Page</title>
      </Head>
        
        <main>
            {/* Sidebar */}

            <div className='hidden sm:flex space-y-2.5 flex-col fixed 
                top-0 left-0 items-center xl:items-start h-full xl:w-[340px] p-2 border-r border-l border-gray-700'>
                <div className='flex justify-center items-center h-14 w-14 hoverAnimation p-0 xl:ml-24 '>
                    <Image src="/images/twitter-icon.jpg" width={30} height={30} className='' />
                </div>

                <div className='space-y-2.5 mt-4 mb-2.5 xl:ml-24 text-white'>
                    <div className='flex items-center space-x-3  xl:justify-start font-bold justify-center text-xl hoverAnimation'>
                        <HomeIcon className='w-6 h-6' />
                        <span className='hidden xl:inline'>Home</span>
                    </div>
                    <div className='flex items-center space-x-3 xl:justify-start justify-center text-xl hoverAnimation'>
                        <HashtagIcon className='w-6 h-6' />
                        <span className='hidden xl:inline'>Explore</span>
                    </div>
                    <div className='flex items-center space-x-3 xl:justify-start justify-center text-xl hoverAnimation'>
                        <BellIcon className='w-6 h-6' />
                        <span className='hidden xl:inline'>Notification</span>
                    </div>
                    <div className='flex items-center space-x-3 xl:justify-start justify-center text-xl hoverAnimation'>
                        <InboxIcon className='w-6 h-6' />
                        <span className='hidden xl:inline'>Messages</span>
                    </div>
                    <div className='flex items-center space-x-3 xl:justify-start justify-center text-xl hoverAnimation'>
                        <BookmarkIcon className='w-6 h-6' />
                        <span className='hidden xl:inline'>Bookmarks</span>
                    </div>
                    <div className='flex items-center space-x-3 xl:justify-start justify-center text-xl hoverAnimation'>
                        <ClipboardListIcon className='w-6 h-6' />
                        <span className='hidden xl:inline'>List</span>
                    </div>
                    <div className='flex items-center space-x-3 xl:justify-start justify-center text-xl hoverAnimation'>
                        <UserIcon className='w-6 h-6' />
                        <span className='hidden xl:inline'>Profile</span>
                    </div>
                    <div className='flex items-center space-x-3 xl:justify-start justify-center text-xl hoverAnimation'>
                        <DotsCircleHorizontalIcon className='w-6 h-6' />
                        <span className='hidden xl:inline'>More</span>
                    </div>
                </div>

                
                <button className='text-[#d9d9d9] text-lg hidden xl:block xl:ml-24 hover:bg-[##1a8cda] 
                bg-[#1d9bf0] rounded-full w-56 h-[52px] text-bold transition duration-200 ease-out font-bold
                shadow-xl'>Tweet</button>
            </div>

            {/* Feed */}

            {/* Widgets */}

            {/* Modal */}
        </main>

      </>
  )
}

export default About;


