import React from 'react'

const Hading = ({Name, className}) => {
  return (
    <h2 className={`text-black text-[20px] font-popins font-bold ${className}`}>
      {Name}
    </h2>
  )
}

export default Hading
