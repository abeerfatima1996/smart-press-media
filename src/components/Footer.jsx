import React from 'react'
import { useState } from 'react'
import facebook from '../assets/images/png/facebook.png'
import instagram from '../assets/images/png/instagram.png'
import linkedin from '../assets/images/png/linkedin.png'
import twitter from '../assets/images/png/twitter.png'
import Button from './Button'

const Footer = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) =>{
        e.preventDefault()
        console.log(name, email,message)
        setName("")
        setEmail("")
        setMessage("")   
    }

  return (
    <>
       <div className="footer mt-40 container mx-auto px-6 sm:px-10">
            {/* Heading */}
            <div className="flex flex-col justify-center items-center text-center">
                <h2 className="text-6xl sm:text-6xl lg:text-8xl  leading-tight">
                Want To Get In <br /> Touch?
                </h2>
            </div>

            {/* Main Content */}
            <div className="flex flex-col lg:flex-row justify-between mt-20 lg:mt-36 gap-12">
                {/* Left Section */}
                <div className="lg:max-w-md">
                <p className="text-base sm:text-lg lg:text-xl font-noto leading-relaxed">
                    Ready to collaborate with Calyn Smart, invite her to speak,
                    or have a media inquiry? Let’s connect and take the next step together.
                </p>

                {/* Social Icons */}
                <div className="flex mt-8 gap-6">
                    <img src={facebook} alt="facebook" className="h-6 sm:h-7" />
                    <img src={instagram} alt="instagram" className="h-6 sm:h-7" />
                    <img src={linkedin} alt="linkedin" className="h-6 sm:h-7" />
                    <img src={twitter} alt="twitter" className="h-6 sm:h-7" />
                </div>
                </div>

                {/* Right Section */}
                <div className="w-full lg:w-1/2">
                <h4 className="text-2xl sm:text-3xl font-semibold">Let's Connect</h4>
                <form className="w-full mt-10 space-y-6">
                    {/* Name */}
                    <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your Name*"
                    className="font-noto text-base sm:text-md w-full border-b-4 border-white bg-transparent focus:border-black focus:outline-none py-3"
                    />

                    {/* Email */}
                    <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your Email*"
                    className="font-noto text-base sm:text-md w-full border-b-4 border-white bg-transparent focus:border-black focus:outline-none py-3"
                    />

                    {/* Message */}
                    <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Your Message*"
                    rows="4"
                    className="font-noto text-base sm:text-md w-full border-b-4 border-white bg-transparent focus:border-black focus:outline-none py-3 resize-none"
                    ></textarea>

                    {/* Submit Button */}
                    <div className="mt-6">
                    <Button label="Contact Calyn Smart" onClick={handleSubmit} />
                    </div>
                </form>
                </div>
            </div>

            {/* Bottom Footer */}
            <div className="flex flex-col sm:flex-row justify-between items-center border rounded border-white px-6 sm:px-10 py-5 mt-20 lg:mt-36 mb-5 gap-4 sm:gap-0 text-center sm:text-left">
                <p className="text-base sm:text-lg lg:text-xl">
                2025 © Calyn Smart. All rights reserved.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 text-base sm:text-lg">
                <p>Terms & Condition</p>
                <p>Refund Policy</p>
                <p>Privacy Policy</p>
                </div>
            </div>
        </div>

    </>
  )
}

export default Footer