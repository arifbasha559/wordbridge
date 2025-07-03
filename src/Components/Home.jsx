import React from 'react'
import RawText from './RawText'
import ResultText from './ResultText'

const Home = () => {
    return (
        <div className='flex  items-center h-[calc(100vh-64px)] justify-center w-screen '>
            <div className="w-1/2 h-full">

                <RawText />
            </div>
            <div className="w-1/2">

                <ResultText />
            </div>
        </div>
    )
}

export default Home