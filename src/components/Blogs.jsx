import React from 'react'
import icon2 from '../assets/images/png/MS/Isolation_Mode.png'
import icon1 from '../assets/images/png/MS/icon1.png'

const Blogs = ({ src, date, comments, title, description }) => {
  return (
    <div className="border border-[#00000026] font-noto bg-white rounded-lg overflow-hidden shadow-md">
      <div className="relative">
        <img src={src} alt="img" className="w-full h-52 object-cover" />
        <p className="bg-[#4848484D] p-2 text-white backdrop-blur-md text-sm absolute bottom-0 right-0">
          {date}
        </p>
      </div>

      <div className="px-6 py-6">
        <div className="flex items-center gap-2 mb-3 text-sm text-gray-700">
          <img src={icon1} alt="comments" className="w-4 h-4" />
          <p>{comments}</p>
        </div>
        <div className="flex flex-col gap-3">
          <h5 className="text-lg font-semibold">{title}</h5>
          <p className="text-sm text-gray-600">{description}</p>
          <div className="flex items-center gap-3 mt-2">
            <p className="text-[#D1B271] cursor-pointer hover:underline">Read More</p>
            <img src={icon2} alt="arrow" className="w-4 h-4" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs