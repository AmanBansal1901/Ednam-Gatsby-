import React from 'react'

export default function Header() {
  return (
    <div>
    <nav class="p-3 px-10 bg-black text-white">
    <ul class="flex space-x-11 justify-end">
        <li class="cursor-pointer">Home</li>
        <li class="cursor-pointer">About</li>
        <li class="cursor-pointer">Catalogue</li>
        <li class="cursor-pointer">Login</li>
    </ul></nav>
    </div>
  )
}
