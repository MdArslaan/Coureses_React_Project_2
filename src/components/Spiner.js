import React from 'react'
import "./Spiner.css"
const Spiner = () => {
  return (
    <div className=' flex item-center m-48 justify-center flex-col  '>
        <div  >
  <span class="loader"></span>
      </div>
      <p className='gap-6  py-2 text-white'>loading.... </p>
    </div>
  )
}

export default Spiner
