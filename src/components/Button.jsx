import React from 'react'

const Button = ({ label, onClick, bgColor = "bg-transparent" }) => {
  return (
    <button className={`${bgColor} border border-white text-white text-lg px-6 py-2 rounded-sm`}
      onClick={onClick} >
      {label}
       
    </button>
  )
}

export default Button