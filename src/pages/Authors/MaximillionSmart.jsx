import React from 'react'
import { useState } from 'react'
import Navbar from '../../components/Navbar'
import heroSec from '../../assets/images/png/MS/hero.png' 
import icon from '../../assets/images/png/MS/icon-1.png'
import Button from '../../components/Button'
import theVeil from '../../assets/images/png/MS/theVeil.png'
import veil from '../../assets/images/png/MS/veil.png'
import code from '../../assets/images/png/MS/code.png'
import shape1 from '../../assets/images/png/MS/shape-1.png'
import shape2 from '../../assets/images/png/MS/shape-2.png'
import shape3 from '../../assets/images/png/MS/shape-3.png'
import review from '../../assets/images/png/MS/bgReview.png'
import Reviews from '../../components/Reviews'
import r1 from '../../assets/images/png/MS/r1.png'
import Blogs from '../../components/Blogs'
import blog1 from '../../assets/images/png/MS/blog-1.png'
import Footer from '../../components/Footer'

const MaximillionSmart = () => {
   const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    topic: "",
    xyz: "",
    message: "",
  });
   const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
  };

  return (
    <>
      <Navbar/>
      {/* Hero section start */}
        <div className='container mx-auto bg-gradient-to-b from-[#15202433] via-[#152024] to-[#060B0F]'>
          <div className='flex flex-col justify-center items-center gap-11 py-36 px-6 '>
            <div>
              <img src={heroSec} alt='img' className='h-64 md:h-80 '/>
            </div>
            <div className='flex flex-col md:flex-row gap-6 md:gap-12 '>
              <div className='flex gap-2'>
                <img src={icon} alt='icon' className='h-5'/>
                <p className='text-md'>BUSINESS TRUSTS</p>
              </div>
              <div className='flex gap-2'>
                <img src={icon} alt='icon' className='h-5'/>
                <p className='text-md'>LEGAL STRATEGIES</p>
              </div>
              <div className='flex gap-2'>
                <img src={icon} alt='icon' className='h-5'/>
                <p className='text-md'>ASSET PROTECTION</p>
              </div>
            </div>
            <div>
              <Button label="Buy Now"/>
            </div>
          </div>
        </div>
      {/* Hero section End */}

      {/* The veil start */}
        <div className='container mx-auto bg-white text-black py-20 px-10'>
          <div className='flex flex-col gap-4 lg:flex-row'>
            <div className='w-full lg:w-4/12'>
              <h3 className='text-5xl'>
                Business Trusts,
                Legal Strategies, And Assets protection
              </h3>
              <p className='text-md font-noto mt-6 '>
                This is not a book about secrecy.
                This is the operating manual for legal sovereignty, dynastic endurance,
                and strategic invisibility—engineered for the age of algorithmic exposure.
                Every page is designed to outlast change, defeat litigation, and perpetuate control.
                This book is for founders, family office architects, next-generation heirs, global 
                advisors, and every operator who refuses to be vulnerable.
                You are not simply reading a treatise. You are deploying an operating system.
              </p>
              <h3 className='text-4xl text-[#D1B271] rotate-[-11.087deg] mt-3'>Maximillion</h3>
              <h3 className='text-2xl mt-8'>Maximillion Smart</h3>
              <p className='text-lg mt-2'>Founder</p>
          </div>
          <div className=' w-full lg:w-4/12'>
            <img src={theVeil} alt='book' className=''/>
          </div>
          <div className='flex flex-col justify-center items-center gap-20  w-full lg:w-4/12'>
            <div className='flex  items-center gap-5 '>
              <img src={shape1} alt='shape 1' className='h-16'/>
              <p className='text-md font-noto '>This is the operating manual for legal sovereignty, dynastic endurance, 
                and strategic invisibility—engineered for the age of algorithmic exposure.</p>
            </div> 
             <div className='flex items-center gap-5 '>
              <img src={shape2} alt='shape 2' className='h-16'/>
              <p className='text-md font-noto max-w-[800px]'>Every page is designed to outlast change, 
                defeat litigation,and perpetuate control.</p>
            </div> 
             <div className='flex items-center gap-5'>
              <img src={shape3} alt='shape 3' className='h-16'/>
              <p className='text-md font-noto max-w-[800px]'>This book is for founders, 
                family office architects, next-generation heirs, global advisors, 
                and every operator who refuses to be vulnerable.</p>
            </div>  
         </div>
         </div>
        </div>
      {/* The veil end */}

      {/* More books Start */}
        <div className='container mx-auto bg-gradient-to-b from-[#15202433] via-[#152024] to-[#060B0F]'>
          <div className='flex justify-center pt-24'>
            <p className='text-5xl'>More book by Maximillion Smart</p>
          </div>
          <div className='flex justify-center  gap-10 p-20'>    
              <div className='flex flex-col gap-10 text-center border-r-2'>
                  <img src={veil} alt="book 1" />
                  <p>The Veil</p>
              </div>
              <div className='flex flex-col gap-10 text-center self-end'>
                <img src={code} alt="book 2" />
                <p>Code And Concrete</p>
              </div>
          </div>
          <div className='flex justify-around '>
            <div className='relative inline-block'>
              <h2 className='text-7xl text-[#D1B271] opacity-30 relative'>15K</h2>
               <span class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                bg-[#FFFFFF99] text-sm text-black px-7 tracking-wider uppercase ">
                Transformations
              </span>
            </div>
             <div className='relative inline-block'>
              <h2 className='text-7xl text-[#D1B271] opacity-30 relative'>96%</h2>
               <span class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                bg-[#FFFFFF99] text-sm text-black px-7 tracking-wider uppercase ">
                Progress Tracking
              </span>
            </div>
             <div className='relative inline-block'>
              <h2 className='text-7xl text-[#D1B271] opacity-30 relative'>8m</h2>
               <span class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                bg-[#FFFFFF99] text-sm text-black px-7 tracking-wider uppercase ">
                Workshops
              </span>
            </div>
             <div className='relative inline-block'>
              <h2 className='text-7xl text-[#D1B271] opacity-30 relative'>4.7</h2>
               <span class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                bg-[#FFFFFF99] text-sm text-black px-7 tracking-wider uppercase ">
                client reviews
              </span>
            </div>
          </div>

        </div>
      {/* More books end */}

      {/* Contact Now start */}
        <div className='flex flex-col gap-12 justify-center bg-white text-black py-28'>
          <div className='flex flex-col text-center '>
            <p className='text-[#D1B271] opacity-70 text-7xl'>Contact Now</p>
            <h3 className='text-3xl font-noto'>Book Your Consultation</h3>
          </div>
          <div className=''>
          <div className="max-w-4xl mx-auto p-6">
            <form onSubmit={handleSubmit} className="space-y-8 text-[#000000B2]">
              {/* Row 1 */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="border-b border-black p-2 focus:outline-none bg-transparent"
                />
                <input
                  type="text"
                  name="mobile"
                  placeholder="Mobile Number"
                  value={formData.mobile}
                  onChange={handleChange}
                  className="border-b border-black p-2 focus:outline-none bg-transparent"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  className="border-b border-black p-2 focus:outline-none bg-transparent"
                />
              </div>

              {/* Row 2 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <select
                  name="topic"
                  value={formData.topic}
                  onChange={handleChange}
                  className="border-b border-black p-2 focus:outline-none bg-transparent"
                >
                  <option value="">Select Type of Topic</option>
                  <option value="Design">Design</option>
                  <option value="Development">Development</option>
                  <option value="Marketing">Marketing</option>
                </select>

                <select
                  name="xyz"
                  value={formData.xyz}
                  onChange={handleChange}
                  className="border-b border-black p-2 focus:outline-none bg-transparent"
                >
                  <option value="">Select XYZ</option>
                  <option value="Option-1">Option 1</option>
                  <option value="Option-2">Option 2</option>
                  <option value="Option-3">Option 3</option>
                </select>
              </div>

              {/* Row 3 */}
              <div>
                <textarea
                  name="message"
                  placeholder="Additional Message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="w-full border-b border-black p-2 focus:outline-none bg-transparent resize-none"
                />
              </div>

              {/* Row 4 */}
              <div className="text-center">
                <button
                  type="submit"
                  className="w-full py-3 bg-[#D1B271] text-black  hover:bg-[#D1B275] transition"
                >
                  Submit Now
                </button>
              </div>
            </form>
          </div>
          </div>
        </div>
      {/* Contact now end */}

      {/* Reviews Start */}
        <div className="container mx-auto px-20 py-10 relative bg-[url('./assets/images/png/MS/bgreview.png')] opacity-90">
        <div className='bg-gradient-to-b from-[#15202433] via-[#152024] to-[#060B0F] '></div>
          <div className='flex  justify-between py-10  '>
            <h3 className='text-4xl'>What They Say</h3>
            <p className='font-noto max-w-[400px] border-t border-[#FFFFFF63] py-6'>Nulla maximus lobortis sapien quis finibus. In orci elit,
              laoreet eu nunc ac, ultrices tempus sapien. </p>
          </div>
          {/* Review Cards */}
          <div className='flex gap-7 '>
            <Reviews src={r1} name="Theo Watson" desigination="Technical Expert" 
            subject="just listen to him"
            content="Suspendisse egestas lacus ac eros euismod, 
            et bibendum mauris placerat. Maecenas eget mauris
              venenatis, interdum enim sed." />
               <Reviews src={r1} name="Theo Watson" desigination="Technical Expert" 
            subject="just listen to him"
            content="Suspendisse egestas lacus ac eros euismod, 
            et bibendum mauris placerat. Maecenas eget mauris
              venenatis, interdum enim sed." />
               <Reviews src={r1} name="Theo Watson" desigination="Technical Expert" 
            subject="just listen to him"
            content="Suspendisse egestas lacus ac eros euismod, 
            et bibendum mauris placerat. Maecenas eget mauris
              venenatis, interdum enim sed." />
               <Reviews src={r1} name="Theo Watson" desigination="Technical Expert" 
            subject="just listen to him"
            content="Suspendisse egestas lacus ac eros euismod, 
            et bibendum mauris placerat. Maecenas eget mauris
              venenatis, interdum enim sed." />
            </div>
        </div>
      {/* Reviews End */}

      {/* Blogs Start */}
      <div className='container mx-auto bg-white px-5 py-10'>
        <h3 className='text-6xl text-black'>Our Blogs</h3>
        <p className='text-md text-[#000000B2] font-noto mt-3'>Orci varius natoque penatibus et magnis dis parturient monteslus mus.</p>
        {/* Blogs Card */}
        <div className='flex gap-8 text-black mt-10'>
          <Blogs src={blog1} date="12 Aug, 2025" comments="03 Comments" title="Cras posuere euismod turpis, vitae dignissim urna ante"
          description="Integevallis arcu sit amet, tempus sem Vlum non maximus nunc."  />
          <Blogs src={blog1} date="12 Aug, 2025" comments="03 Comments" title="Cras posuere euismod turpis, vitae dignissim urna ante"
          description="Integevallis arcu sit amet, tempus sem Vlum non maximus nunc."  />
          <Blogs src={blog1} date="12 Aug, 2025" comments="03 Comments" title="Cras posuere euismod turpis, vitae dignissim urna ante"
          description="Integevallis arcu sit amet, tempus sem Vlum non maximus nunc."  />
        </div>

      </div>
      {/* Blogs End */}

      <Footer/>
        
    </>
  )
}

export default MaximillionSmart