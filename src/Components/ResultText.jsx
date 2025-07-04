import React from 'react'

const ResultText = ({ result, setResult }) => {
  return (
    <div className='w-full h-full  p-10 '>
            <p
        
        placeholder='Translated text will appear here...'
        className="w-full h-full p-2 text-lg placeholder:text-2xl bg-[#112137] rounded-2xl text-white resize-none outline-none text-left align-top"
        >
        {result}
        </p>
        </div>
  )
}

export default ResultText