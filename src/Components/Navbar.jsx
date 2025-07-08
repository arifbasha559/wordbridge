import { BiDownArrow } from "react-icons/bi";

const Navbar = ({ select1, setSelect1, select2, setSelect2 }) => {
    const swapLanguages = () => {
        setSelect1(select2);
        setSelect2(select1);
    };

    const languages = [
        { lang: "Detect Language"},
        { lang: "English"},
        { lang: "Spanish"},
        { lang: "French"},
        { lang: "German"},
        { lang: "Italian"},
        { lang: "Portuguese (Brazilian)" },
        { lang: "Portuguese" },
        { lang: "Russian"},
        { lang: "Chinese" },
        { lang: "Japanese"},
        { lang: "Korean"},
        { lang: "Arabic"},
        { lang: "Hindi"},
        { lang: "Turkish"},
        { lang: "Dutch"},
        { lang: "Greek"},
        { lang: "Polish"},
        { lang: "Ukrainian"},
        { lang: "Hebrew"},
        { lang: "Thai"},
        { lang: "Vietnamese"},
        { lang: "Swedish"},
        { lang: "Finnish"},
        { lang: "Czech"},
        { lang: "Danish"},
        { lang: "Romanian"},
        { lang: "Hungarian"},
        { lang: "Bulgarian"},
        { lang: "Malay"},
        { lang: "Indonesian"},
        { lang: "Filipino"}
    ];

    return (
        <div className="flex justify-between items-center px-5 max-w-screen h-fit bg-[#112137] shadow-md">
            <nav className="flex flex-col md:flex-row items-center justify-between relative w-full py-4 shadow ">
                <div className="text-white font-bold text-xl px-0 left-0  flex items-center">
                    <div className="title scale-50">
                        <svg width="64px" height="48px">
                            <polyline points="0.157 23.954, 14 23.954, 21.843 48, 43 0, 50 24, 64 24" id="back"></polyline>
                            <polyline points="0.157 23.954, 14 23.954, 21.843 48, 43 0, 50 24, 64 24" id="front"></polyline>
                        </svg>
                    </div>
                    WORD BRIDGE
                </div>

                <div className="flex w--[100vh]  items-center space-x-4">
                    <div className="px-3 py-1 text-white rounded-md cursor-pointer">
                        <select
                            value={select1}
                            onChange={(e) => setSelect1(e.target.value)}
                            className="p-2 max-w-xs truncate bg-[#112137] text-white rounded-lg shadow focus:outline-none focus:ring focus:ring-blue-500"
                        >
                            {languages.map((data, index) => (
                                <option key={index} className="bg-[#112137]" value={data.lang}>
                                    {data.lang}
                                </option>
                            ))}
                        </select>
                    </div>

                    <button
                        onClick={swapLanguages}
                        className="text-white cursor-pointer text-xl"
                    >
                        ⇄
                    </button>

                    <div className="px-3 py-1 text-white rounded-md">
                        <select
                            value={select2}
                            onChange={(e) => setSelect2(e.target.value)}
                            className="p-2 max-w-xs truncate bg-[#112137] text-white rounded-lg shadow focus:outline-none focus:ring focus:ring-blue-500"
                        >
                            {languages.map((data, index) => (
                                data.code !== "AUTO" && (
                                    <option key={index} className="bg-[#112137]" value={data.lang}>
                                        {data.lang}
                                    </option>
                                )
                            ))}
                        </select>
                    </div>
                </div>

                <div className="text-white md:flex hidden invisible select-none font-bold text-xl px-0 left-0  items-center">
                    <div className="title scale-50">
                        <svg width="64px" height="48px">
                            <polyline points="0.157 23.954, 14 23.954, 21.843 48, 43 0, 50 24, 64 24" id="back"></polyline>
                            <polyline points="0.157 23.954, 14 23.954, 21.843 48, 43 0, 50 24, 64 24" id="front"></polyline>
                        </svg>
                    </div>
                    WORD BRIDGE
                </div>
            </nav>
        </div>
    );
};

export default Navbar;

