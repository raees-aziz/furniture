import React from 'react'

const BulletPoint = ({text,icon}) => {
  return (
    <>
    <div className="flex  gap-6 text-2xl font-bebas-neue w-ull lg:bg-prinary p-2 rounded-xl">
                     {icon}
                     <span className='text-nowrap' >
                       {text}
                     </span>
                   </div>
    </>
  )
}

export default BulletPoint