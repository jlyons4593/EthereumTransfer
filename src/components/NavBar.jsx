import React, { useState } from 'react';
import {HiMenuAlt4} from 'react-icons/hi'
import {AiOutlineClose} from 'react-icons/ai'
import {BiTransferAlt} from 'react-icons/bi'
import { SiEthereum } from 'react-icons/si'
import {  Link } from 'react-router-dom'

const mainStyles = {
    className:'text-white md:flex hidden list-none flex-row justify-between items-center flex-initial px-7',
   
} 
const styles = {
    className:'text-white md:flex hidden list-none flex-row justify-between items-center flex-initial px-7',
    
}
const secondaryStyles ={
    className:'text-white flex  list-none flex-row justify-between items-center flex-initial px-7',
  
}
const links = [
    {
        className: styles.className,
        activeClassName: styles.activeClassName,
        to: '#',
        name: 'Blockchain'
    },
    {
        className: styles.className,
        activeClassName: styles.activeClassName,
        to: 'https://github.com/jlyons4593/CryptoTransfer',
        name: 'Github'
    },
    {
        className: styles.className,
        activeClassName: styles.activeClassName,
        to: '#',
        name: 'Contact'
    },    
]    


const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false)
    return (
      <nav className='w-full flex md:justify-center justify-between items-center'>
        
            <div className='md:flex-[0.5] px-5 flex justify-center items-center'>
                <SiEthereum fontSize= {48} className=' flex-col w-20 text-blue-300 cursor-pointer'/>
                <BiTransferAlt fontSize={52} className=' w-20 flex-col text-green-400 cursor-pointer'/>
            </div>
            <ul className='text-white md:flex hidden list-none flex-row justify-start items-start flex-initial'></ul>
            {links.map(link => (
                <a href={link.to} className={link.className}  key={link.name}>
                    {link.name}
                    </a> 
            ))}
                <ul className='bg-blue-600 py-2 px-7 mx-4 hidden md:flex text-white rounded-full cursor-pointer hover:bg-[#2546bd]'>
                    Login
                </ul>
            <ul/>
            <div className='flex relative'>
        {toggleMenu
        ?<AiOutlineClose fontSize={28} className='text-white md:hidden cursor-pointer ' onClick={()=> setToggleMenu(false)}/>
        :<HiMenuAlt4 fontSize={28} className='text-white md:hidden cursor-pointer ' onClick={()=> setToggleMenu(true)}/>}
        {toggleMenu &&(
          <ul
          className='z-10 fixed top-0 text-right -right-2 p-3 w-[200px] h-screen shadow-2xl md:hidden list-none
          flex flex-col justify-start rounded-md blue-glassmorphism text-white animate-slide-in'
          >
            <li className='text-xl w-full my-2'>
              <AiOutlineClose onClick={() => setToggleMenu(false)}/>
            </li>
           
                {links.map(link => (
                <a href={link.to} className={link.className}  key={link.name} as="a" >
                    {link.name}
                    </a> 
            ))}
         
            <ul className=' px-7  flex md:hidden text-white rounded-full cursor-pointer hover:bg-[#2546bd]'>
                    Login
            </ul>
          </ul>
          
        )}
        </div>
    </nav>
  )
}

export default Navbar