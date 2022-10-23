import {BellIcon, SearchIcon} from '@heroicons/react/solid';
import Link from 'next/link';
import { useEffect, useState } from 'react';


function Header() {
    const [isScrolled, setisScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if(window.scrollY > 50){
                setisScrolled(true)
            }
            else{
                setisScrolled(false)
            }
        }
        window.addEventListener("scroll",handleScroll)
        return () =>{
            window.removeEventListener('scroll',handleScroll)
        }
    }, [])
    
  return (
    <header className={`${isScrolled && 'bg-[#141414]'}`}>


        {/* Left-side  */}
        <div className="flex items-center space-x-5 md:space-x-12">
            <Link href="/">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1024px-Netflix_2015_logo.svg.png" alt="Netflex"
            className="cursor-pointer h-8 object-contain"/>
            </Link>
        <ul className="hidden space-x-4 md:flex">
            <li className="headerLink">Home</li>
            <li className="headerLink">Tv Show</li>
            <li className="headerLink">Movies</li>
            <li className="headerLink">News & Popular</li>
            <li className="headerLink">My List</li>
        </ul>
        </div>


        {/* Right Side */}
        <div className='flex items-center space-x-4 text-sm font-light'>
            <SearchIcon className='hidden h-6 w-auto sm:inline ' />
            <p className='hidden lg:inline'>Kids</p>
            <BellIcon className='h-6 w-auto' />
            <Link href="/account">
                <img 
                src="https://occ-0-1190-2774.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABbme8JMz4rEKFJhtzpOKWFJ_6qX-0y5wwWyYvBhWS0VKFLa289dZ5zvRBggmFVWVPL2AAYE8xevD4jjLZjWumNo.png?r=a41" alt="Account" 
                className='cursor-pointer rounded' />
            </Link>
        </div>
    </header>
  )
}

export default Header