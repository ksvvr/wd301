/* eslint-disable no-unused-vars */

import TaskCard from './TaskCard'

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App(){
  return (
    <>
    <div className='border-2 m-3 border-gray-950'>
    <h1 className='text-3xl font-bold m-3'>Pending</h1>
    <TaskCard title="Work on Milestone One" dueDate='12-03-2023' assigneeName='Vishnu' />
    </div>
    <div className='border-2 m-3 border-gray-950'>
    <h1 className='text-3xl font-bold m-3'>Done</h1>
    <TaskCard title="Log In to wd301" completedAtDate='03-03-2023' assigneeName='Vishnu' />
    </div>   
    </>
  )
}

export default App
