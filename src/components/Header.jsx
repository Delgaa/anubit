import React, { useState } from 'react'
import logo from '../assets/images/logo.png'
import { HiOutlineMenu } from "react-icons/hi";

function Header() {

  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <header className='flex h-16 justify-between items-center mobile:px-3 desktop:px-6 w-full bg-[#151823] text-[#E5E6EB]'>
      <div className='flex items-center'>
      <img src={logo} alt="logo_anubit" className='w-14'/>
        <h1>Anubit</h1>
      </div>
      <HiOutlineMenu onClick={toggleMenu} size={30} className='tablet:hidden cursor-pointer'/>
      <nav className='tablet:flex gap-4 mobile:hidden '>
        <a href="#">Inicio</a>
        <a href="#">Servicios</a>
        <a href="#">Proyectos</a>
        <a href="#">Sobre nosotros</a>
      </nav>
      {
        isOpen && (
        <nav className='mobile:flex mobile:flex-col mobile:w-1/2 mobile:p-5 mobile:rounded-b-lg mobile:absolute mobile:right-0 mobile:top-16 bg-[#151823] gap-4 tablet:hidden '>
          <a href="#">Inicio</a>
          <a href="#">Servicios</a>
          <a href="#">Proyectos</a>
          <a href="#">Sobre nosotros</a>
        </nav>
        )
      }
      
    </header>
  )
}

export default Header