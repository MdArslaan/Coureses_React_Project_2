import React from 'react'

const Filter = ({filterData}) => {
  return (
    <div className='flex items-center justify-center gap-4 max-w-max mx-auto flex-wrap'>
      {filterData.map( (data) => 
      {
        return (
         <button className='bg-gray-700 text-white border-2 rounded-xl p-1 px-2 hover:bg-gray-600 my-2 '>
            {data.title}
         </button>
        )
      })}

    </div>
  )
}

export default Filter
