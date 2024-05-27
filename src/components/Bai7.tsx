import React from 'react'

export default function Bai7() {
  return (
    <div>Bai7
        <div className="grid grid-cols-3 gap-4">
        {Array.from({ length: 9 }, (_, i) => (
          <div
            key={i}
            className="flex justify-center items-center h-24 w-36 bg-purple-500 text-white rounded-lg shadow-lg">
            {`0${i + 1}`}
          </div>
        ))}
      </div>
    </div>
  )
}
