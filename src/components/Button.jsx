import React from 'react'

const Button = ({ label, onClick }) => {
  return (
    <button
      className="border border-white text-white text-xl px-5 py-3 rounded"
      onClick={onClick} // Props se aaya hua function call karega
    >
      {label} {/* Props se aaya hua text */}
    </button>
  )
}

export default Button