import React from 'react'

const Taitel = ({subtaitel,taitel, className,}) => {
  return (
    <>
      <div className={className}>
        <h2 className='text-[16px] text-[#DB4444] font-semibold leading-[20px] font-popins after:contents[""] after:w-[15px] after:h-[15px] lg:after:w-[20px] lg:after:h-[40px] after:bg-prymari-red after:absolute after:left-0 after:rounded lg:after:-top-2/4 after:top-[3px] translate-y-[-50%] pl-6 lg:pl-[30px]'>{subtaitel}</h2>
        <h3 className='font-inter font-semibold text-[21px] lg:text-[36px] leading-[48px] tracking-[1px] lg:mt-[24px]'>{taitel}</h3>
      </div>
    </>
  )
}

export default Taitel
