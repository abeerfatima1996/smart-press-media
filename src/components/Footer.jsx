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
        <div className='footer mt-40 container mx-auto px-10 '>
            {/* Heading */}
            <div className='flex flex-col justify-center items-center text-center'>
                <h2 className='text-9xl'>Want To Get In <br/>Touch?</h2>
            </div>

            {/* Left Section */}
            <div className='flex  justify-between mt-36'>
                <div className='max-w-96'>
                    <p className='text-xl font-noto'>
                        Ready to collaborate with Calyn Smart, invite her to speak, 
                        or have a media inquiry? Let’s connect and take the next step together.
                    </p>
                    {/* icons */}
                    <div className='flex mt-10'>
                        <img src={facebook} alt='facebook' className='h-7  '/>
                        <img src={instagram} alt='instagram' className='h-7 ps-9'/>
                        <img src={linkedin} alt='linkedin ' className='h-7 ps-9'/>
                        <img src={twitter} alt='twitter' className='h-7 ps-9'/>
                    </div>
                </div>
                <div className='mb-8'>
                    <h4 className='text-3xl'>Let's Connect</h4>
                        <form className="max-w-md mx-auto mt-12  ">
                        {/* Name */}
                        <input
                            type="text" value={name} onChange={(e)=>setName(e.target.value)}
                            placeholder="Your Name*"
                            className="font-noto text-md pb-6 mb-7 w-full border-b-4 border-white bg-transparent focus:border-black focus:outline-none py-2"
                        />

                        {/* Email */}
                        <input
                            type="email" value={email} onChange={(e)=>setEmail(e.target.value)}
                            placeholder="Your Email*"
                            className="font-noto text-md pb-6 mb-7  w-full border-b-4 border-white bg-transparent focus:border-black focus:outline-none py-2"
                        />

                        {/* Message */}
                        <input
                            placeholder="Your Message*" value={message} onChange={(e)=>setMessage(e.target.value)}
                            className="font-noto text-md pb-6 mb-7 w-full border-b-4 border-white bg-transparent focus:border-black focus:outline-none py-2 resize-none"
                        ></input>

                        {/* Submit Button */}
                        <div className='mt-5'>
                            <Button label="Contact Calyn Smart"  onClick={handleSubmit}/>
                        </div>
                        </form>
                    </div>
                </div>
            
            <div className='flex justify-between border rounded border-white items-center px-10 py-5 mt-36 mb-5 '>
                <p className='text-xl'>2025 © Calyn Smart. All rights reserved.</p>
                <div className='flex  gap-8 text-xl'>
                    <p>Terms & Condition</p>
                    <p>Refund Policy</p>
                    <p>Privacy Plolicy</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default Footer