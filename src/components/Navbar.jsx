import React from 'react'
import logo from "../assets/images/svg/logo-light.svg"
import Button from './Button'
import { useState } from 'react'


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
     {/* Top bar */}
      <div className="container mx-auto grid grid-cols-3 items-center py-10 px-5">
        {/* Left: Menu / Hamburger */}
        <div className="flex items-center gap-8">
          <ul className="hidden lg:flex gap-14 text-xl">
            <li className="cursor-pointer">Home</li>
            <li className="cursor-pointer">Authors</li>
            <li className="cursor-pointer">Books</li>
            <li className="cursor-pointer">Reviews</li>
          </ul>
          <button
            className="lg:hidden text-2xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? "✖" : "☰"}
          </button>
        </div>

        {/* Center: Logo */}
        <div className="flex lg:justify-center sm:justify-end">
          <img src={logo} alt="Logo" className="h-20 w-[251px]" />
        </div>

        {/* Right: Button */}
        <div className="hidden lg:flex lg:justify-end ">
          <Button label="Contact Us" />
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="conatainer mx-auto lg:hidden  text-white py-4">
          <ul className="flex flex-col items-center gap-4 text-lg">
            <li className="cursor-pointer">Home</li>
            <li className="cursor-pointer">Author</li>
            <li className="cursor-pointer">Books</li>
            <li className="cursor-pointer">Reviews</li>
          </ul>
          <div className="flex justify-center mt-4">
            <Button label="Contact Us" />
          </div>
        </div>
      )}

      
    </>
  )
}

export default Navbar