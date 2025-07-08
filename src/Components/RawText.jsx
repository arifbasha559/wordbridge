import React, { useRef } from 'react'

const RawText = ({ raw, setRaw }) => {
    return (
        <div className='w-full h-full  p-10 '>
            <div
                className="w-full h-full p-10 text-wrap select-all flex flex-col gap-5 text-lg placeholder:text-2xl bg-[#112137] rounded-2xl text-white "
            >
                <button
          onClick={() => navigator.clipboard.writeText(raw)}
          className="px-4 py-2 self-end bg-blue-600 text-white hover:bg-blue-800 w-fit rounded-md cursor-pointer">
          Copy
        </button>
            <textarea
                value={raw}
                
                className='w-full h-full resize-none outline-none select-all text-left align-top'
                onChange={(e) => { e.preventDefault(); setRaw(e.target.value) }}
                placeholder='Enter text to translate...'
                ></textarea>
                </div>
        </div>
    )
}

export default RawText