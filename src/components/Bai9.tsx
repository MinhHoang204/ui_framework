import React from 'react'

export default function Bai9() {
  return (
    <div className="bg-gray-800 text-white h-screen w-64 fixed top-0 left-0">
    <div className="p-4">
      <h1 className="text-2xl font-semibold">My Sidebar</h1>
      <ul className="mt-4">
        <li className="mb-2">
          <a href="#" className="hover:text-blue-500">
            Dashboard
          </a>
        </li>
        <li className="mb-2">
          <a href="#" className="hover:text-blue-500">
            Posts
          </a>
        </li>
      </ul>
    </div>
    <div className="absolute bottom-0 p-4">
      <button className="text-gray-400 hover:text-white">Light Mode</button>
      <button className="text-gray-400 hover:text-white ml-2">Logout</button>
    </div>
  </div>
  )
}
