import React from 'react'

export default function Bai5() {
  return (
    <div className='w-[600px] h-[400px] bg-blue-200 flex justify-center items-center'>
        <div className='w-[400px] h-[300px] bg-blue-400 relative'>
          Relative Parent
          <button className='absolute left-0 bottom-0 bg-blue-700'>
            Absolute Childern
          </button>
        </div>
    </div>
  )
}
