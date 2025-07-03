import React, { useEffect, useState } from 'react'

const Navbar = () => {
    const [select1, setSelect1] = useState("English");
    const [select2, setSelect2] = useState("Spanish");

    const swapLanguages = () => {
        setSelect1(select2);
        setSelect2(select1);
    };
   

    return (
        <div className='flex justify-between items-center px-20 w-screen h-16 bg-[#112137] shadow-md'>
            <nav className="flex items-center justify-center relative w-full  py-4  shadow">
                <div className="text-white font-bold text-xl left-0 absolute">🌐 WORD BRIDGE</div>

                <div className="flex items-center space-x-4">
                    <div className="px-3 py-1 bg-[#1e3555] text-white rounded-md cursor-pointer">

                    <select
                        value={select1}
                        onChange={(e) => setSelect1(e.target.value)}
                        className="focus:outline-none "
                        >
                        <option value="English">English</option>
                        <option value="Spanish">Spanish</option>
                        <option value="French">French</option>
                        <option value="German">German</option>
                    </select>
                        </div>

                    <button
                        onClick={swapLanguages}
                        className="text-white cursor-pointer text-xl"
                    >
                        ⇄
                    </button>
                <div className="px-3 py-1 bg-[#1e3555] text-white rounded-md">

                    <select
                        value={select2}
                        onChange={(e) => setSelect2(e.target.value)}
                        className=" focus:outline-none"
                        >
                        <option value="English">English</option>
                        <option value="Spanish">Spanish</option>
                        <option value="French">French</option>
                        <option value="German">German</option>
                    </select>
                        </div>
                </div>

                <div className="flex items-center space-x-4">
                

                </div>
            </nav>

        </div>
    )
}

export default Navbar