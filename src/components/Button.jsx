import React from 'react'

const Button = ({ label, onClick }) => {
  return (
    <button className="border border-white text-white text-lg px-6 py-2 rounded-sm"
      onClick={onClick}>
      {label} 
    </button>
  )
}

export default Button