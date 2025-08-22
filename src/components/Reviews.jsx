import React from 'react'

const Reviews = ({src , name , desigination, subject , content}) => {
  return (
    <>
        <div className='flex flex-col  border border-black bg-white text-black px-5 py-6'>
            <div className='flex items-center py-6   gap-3 border-b border-black'>
                <img src={src} alt="img" />
                <div className='flex flex-col gap-1 font-noto'>
                    <h3 className='text-lg'>{name}</h3>
                    <p className='text-sm'>{desigination}</p>
                </div>
            </div>
            <div className='flex flex-col gap-6 mt-8'>
                <h3 className='text-lg'>
                    {subject}
                </h3>
                <p className='text-md'>{content}</p>
            </div>
        </div>
    </>
  )
}

export default Reviews