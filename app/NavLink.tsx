import React from 'react';
import Link from 'next/link';
export type linkValues = {
    href: string,
    title: string
}
const NavLink = ({href,title}: linkValues) => {
  return (
    <Link href={href} className='relative inline-block group text-xl cursor-pointer py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white'>
        {title}
        <span className='absolute left-1/2 bottom-1 h-[2px] w-0 -translate-x-1/2 transform bg-white transition-all duration-200 group-hover:w-full'></span>
    </Link>
  )
}

export default NavLink
