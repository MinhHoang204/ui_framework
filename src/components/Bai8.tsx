import React from 'react'

export default function Bai8() {
  return (
    <div className="space-y-12">
      {/* Left Aligned */}
      <div className="flex flex-col items-start">
        <div className="flex space-x-2">
          <div className="h-12 w-12 bg-blue-500 text-white flex items-center justify-center rounded shadow">01</div>
          <div className="h-12 w-12 bg-blue-500 text-white flex items-center justify-center rounded shadow">02</div>
          <div className="h-12 w-12 bg-blue-500 text-white flex items-center justify-center rounded shadow">03</div>
        </div>
        <p className="mt-2">Hình 1.1. Các phần tử nằm bên trái</p>
      </div>

      {/* Right Aligned */}
      <div className="flex flex-col items-end">
        <div className="flex space-x-2">
          <div className="h-12 w-12 bg-blue-500 text-white flex items-center justify-center rounded shadow">01</div>
          <div className="h-12 w-12 bg-blue-500 text-white flex items-center justify-center rounded shadow">02</div>
          <div className="h-12 w-12 bg-blue-500 text-white flex items-center justify-center rounded shadow">03</div>
        </div>
        <p className="mt-2">Hình 1.2. Các phần tử nằm bên phải</p>
      </div>

      {/* Center Aligned */}
      <div className="flex flex-col items-center">
        <div className="flex space-x-2">
          <div className="h-12 w-12 bg-blue-500 text-white flex items-center justify-center rounded shadow">01</div>
          <div className="h-12 w-12 bg-blue-500 text-white flex items-center justify-center rounded shadow">02</div>
          <div className="h-12 w-12 bg-blue-500 text-white flex items-center justify-center rounded shadow">03</div>
        </div>
        <p className="mt-2">Hình 1.3. Các phần tử nằm ở giữa</p>
      </div>

      {/* Spaced Left and Right */}
      <div className="flex flex-col items-center">
        <div className="flex justify-between w-full max-w-md">
          <div className="h-12 w-12 bg-blue-500 text-white flex items-center justify-center rounded shadow">01</div>
          <div className="h-12 w-12 bg-blue-500 text-white flex items-center justify-center rounded shadow">02</div>
          <div className="h-12 w-12 bg-blue-500 text-white flex items-center justify-center rounded shadow">03</div>
        </div>
        <p className="mt-2">Hình 1.4. Các phần tử giãn ra hai bên</p>
      </div>

      {/* Evenly Spaced */}
      <div className="flex flex-col items-center">
        <div className="flex justify-evenly w-full max-w-md">
          <div className="h-12 w-12 bg-blue-500 text-white flex items-center justify-center rounded shadow">01</div>
          <div className="h-12 w-12 bg-blue-500 text-white flex items-center justify-center rounded shadow">02</div>
          <div className="h-12 w-12 bg-blue-500 text-white flex items-center justify-center rounded shadow">03</div>
        </div>
        <p className="mt-2">Hình 1.5. Các phần tử giãn đều 2 bên</p>
      </div>

      {/* Centered with Equal Spacing */}
      <div className="flex flex-col items-center">
        <div className="flex justify-center w-full max-w-md space-x-2">
          <div className="h-12 w-12 bg-blue-500 text-white flex items-center justify-center rounded shadow">01</div>
          <div className="h-12 w-12 bg-blue-500 text-white flex items-center justify-center rounded shadow">02</div>
          <div className="h-12 w-12 bg-blue-500 text-white flex items-center justify-center rounded shadow">03</div>
        </div>
        <p className="mt-2">Hình 1.6. Các phần tử giữa đều</p>
      </div>
    </div>
  )
}
