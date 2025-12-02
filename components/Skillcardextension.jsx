import React from 'react'

const Skillcardextension = ({name,level}) => {
  return (


    <div className='flex flex-row justify-between font-inter rounded-lg items-center p-4 bg-gray-900 hover:scale-110 transition-all ease-in-out duration-500'>

      <div className='text-neutral-300'>
        {name}
      </div>
      <div className='text-neutral-400'>
        {level}
      </div>

    </div>

)
}

export default Skillcardextension