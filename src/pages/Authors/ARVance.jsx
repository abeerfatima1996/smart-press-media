import React from 'react'
import Navbar from '../../components/Navbar'
import banner from '../../assets/images/png/AR/banner.png'
import Button from '../../components/Button'
import sign from '../../assets/images/png/AR/sign.png'

const ARVance = () => {
  return (
    <>
        <Navbar/>
        {/* Hero Section Start */}
        <div className='bg-dark'>
            <div className='container mx-auto text-white'>
                <div className='flex flex-col sm:flex-row gap-4 justify-center items-center py-11'>
                    <div className='w-6/14 '>
                        <img src={banner} alt='banner' className='w-full h-[500px] object-contain'/>
                    </div>
                    <div className='w-6/12 py-5  md:p-14 '>
                        <h3 className='text-5xl mb-5'>The Modern Law Of Achievement</h3>
                        <p className='text-lg mb-5'>Pharetra id egestas odio odio ut. Convallis cras ut sodales 
                            fames nibh luctus ante ultricies.</p>
                        <div>
                            <Button label="Buy Now" bgColor='bg-primary'/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* Hero Section End */}

        {/*  */}
        <div className='container  mx-auto'>
            <div className='flex flex-col items-center py-20 px-40 text-center font-noto'>
                <p className='text-2xl '>The Modern Law of Achievement: A Comprehensive Blueprint for Unlocking Unshakable 
                    Wealth and Success in the Age of Artificial Intelligence, 
                    Guided by Purpose and Driven by Relentless Execution.</p>
                <img src={sign} alt='signature' className='mt-10'/>
                <p className='text-xl mt-5 '>A.R Vance</p>
                <p className='text-sm '>Book Founder</p>

            </div>
            <div className='flex gap-6 '>
                <div className='flex flex-col gap-2 text-center p-2'>
                    <h5 className='text-xl'>Achieve Your Goals</h5>
                    <p>Nulla maximus lobortis sapien quis finibus. 
                    In orci elit, laoreet eu nunc ac, ultrices tempus sapien. </p>
                </div>
                <div className='flex flex-col gap-2 text-center p-2'>
                    <h5 className='text-xl'>Your Complete Support System</h5>
                    <p>Nulla maximus lobortis sapien quis finibus. 
                    In orci elit, laoreet eu nunc ac, ultrices tempus sapien. </p>
                </div>
                <div className='flex flex-col gap-2 text-center p-2'>
                    <h5 className='text-xl'>Unlock Your Potential</h5>
                    <p>Nulla maximus lobortis sapien quis finibus. 
                    In orci elit, laoreet eu nunc ac, ultrices tempus sapien. </p>
                </div>
                <div className='flex flex-col gap-2 text-center p-2'>
                    <h5 className='text-xl'>Build Your Best Self</h5>
                    <p>Nulla maximus lobortis sapien quis finibus. 
                    In orci elit, laoreet eu nunc ac, ultrices tempus sapien. </p>
                </div>

            </div>

        </div>
        {/*  */}

        {/*  */}
            <div className='container mx-auto'>
                <div className='flex justify-center items-center'>
                    <div className='w-6/12'>
                        <img src={banner} alt='' className='object-contain' />
                    </div>
                    <div className='w-6/12'>
                        <h3>Building Unshakable Wealth in the Modern Age</h3>
                        <p>Cras vehicula augue in quam vehicula, id bibendum urna aliquam. 
                        Quisque nisi nunc, dictum quis condimentum non, interdum a mauris. 
                        Fusce lobortis ante at ullamcorper eleifend.</p>
                        <div className='flex'>
                            <div className='flex '>
                                <h5>Our Unique Approach to Success</h5>
                                <p>(94%)</p>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        {/*  */}
    </>
  )
}

export default ARVance