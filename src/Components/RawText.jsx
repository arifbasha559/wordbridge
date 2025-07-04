import React from 'react'

const RawText = ({ raw, setRaw }) => {
    return (
        <div className='w-full h-full  p-10 '>
            <textarea
                value={raw}
                onChange={(e) => { e.preventDefault(); setRaw(e.target.value) }}
                placeholder='Enter text to translate...'
                className="w-full h-full p-2 text-lg placeholder:text-2xl bg-[#112137] rounded-2xl text-white resize-none outline-none text-left align-top"
            />
        </div>
    )
}

export default RawText