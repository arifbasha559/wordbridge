import React from 'react'

const ResultText = ({ result }) => {
  const resRef = React.useRef(null);

  return (
    <div className='w-full h-full  p-10 flex flex-col'>
      <p
        placeholder=''
        className="w-full h-full p-10 text-wrap select-all flex flex-col gap-5 text-lg placeholder:text-2xl bg-[#112137] rounded-2xl text-white resize-none outline-none text-left align-top"
      >
        <button
          onClick={() => navigator.clipboard.writeText(resRef.current?.innerText)}
          className="px-4 py-2 self-end bg-blue-600 text-white hover:bg-blue-800 w-fit rounded-md cursor-pointer">
          Copy
        </button>
        <span
          ref={resRef}
          className="">

          {result==""?"Translated text will appear here...":result}
          
        </span>
      </p>
    </div>
  )
}

export default ResultText;