import React from 'react'

const Filter = ({ props }) => {
  let filterData = props.filterData;
  let category = props.category;
  let setCategory = props.setCategory;

  function FilterHandler() {

  }
  return (
    <div className='flex items-center justify-center gap-4 max-w-max mx-auto flex-wrap'>
      {filterData.map((data) => {

        return (
          <button onClick={() => FilterHandler(data.title)} className={`bg-gray-700 text-white border-2 rounded-xl p-1 px-2 hover:bg-gray-600 my-2 
         ${category === data.title ? "bg-white bg-opacity-50 " : "border-transparent bg-opacity-40 "}`}

          >{data.title}
          </button>
        )
      })}

    </div>
  )
}

export default Filter
