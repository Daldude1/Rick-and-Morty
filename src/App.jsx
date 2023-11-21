import { useState } from 'react'
import { Characters } from './components/Characters'

export default function App() {
  return (
    <div className='text-center'>
      <p className='font-extrabold uppercase text-3xl text-white mt-5'>Rick & Morty</p>
      <Characters />
    </div>
  )
}