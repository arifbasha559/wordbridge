import React, { useEffect, useState } from 'react'
import RawText from './RawText'
import ResultText from './ResultText'
import Loader from './Loader'

const Home = ({ select1, select2 }) => {
    const [raw, setRaw] = useState("")
    const [result, setResult] = useState("")
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const langFormat = (lang) => {
        if (lang === "Detect Language") return "auto";
        else if (lang === "English") return "en";
        else if (lang === "Spanish") return "es";
        else if (lang === "French") return "fr";
        else if (lang === "German") return "de";
        else if (lang === "Italian") return "it";
        else if (lang === "Portuguese (Brazilian)") return "pt-br";
        else if (lang === "Portuguese") return "pt-pt";
        else if (lang === "Russian") return "ru";
        else if (lang === "Chinese") return "zh-hans";
        else if (lang === "Japanese") return "ja";
        else if (lang === "Korean") return "ko";
        else if (lang === "Arabic") return "ar";
        else if (lang === "Hindi") return "hi";
        else if (lang === "Turkish") return "tr";
        else if (lang === "Dutch") return "nl";
        else if (lang === "Greek") return "el";
        else if (lang === "Polish") return "pl";
        else if (lang === "Ukrainian") return "uk";
        else if (lang === "Hebrew") return "he";
        else if (lang === "Thai") return "th";
        else if (lang === "Vietnamese") return "vi";
        else if (lang === "Swedish") return "sv";
        else if (lang === "Finnish") return "fi";
        else if (lang === "Czech") return "cs";
        else if (lang === "Danish") return "da";
        else if (lang === "Romanian") return "ro";
        else if (lang === "Hungarian") return "hu";
        else if (lang === "Bulgarian") return "bg";
        else if (lang === "Malay") return "ms";
        else if (lang === "Indonesian") return "id";
        else if (lang === "Filipino") return "tl";

        // return lang;
    }

    useEffect(() => {
        if (!raw.trim()) return;

        setLoading(true)
        const handler = setTimeout(() => {
            translateText(raw);
        }, 3500);

        // Cleanup if raw changes before 5 seconds
        return () => { clearTimeout(handler); setLoading(false) }
    }, [raw]);
    const translateText = async (text) => {
        const url = 'https://deep-translate1.p.rapidapi.com/language/translate/v2';
        const options = {
            method: 'POST',
            headers: {
                'x-rapidapi-key': 'd152621276mshf0f2ea964b2fa5ap1bd5dajsn915fde216138',
                'x-rapidapi-host': 'deep-translate1.p.rapidapi.com',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({

                q: text,
                source: langFormat(select1),
                target: langFormat(select2)
            })

        };
        console.log({
            q: text,
            source: langFormat(select1),
            target: langFormat(select2)
        });

        try {
            if (raw === "") {
                alert("Please enter some text to translate");
                return;
            }
            if (raw.length > 5000) {
                alert("Text is too long, please enter less than 5000 characters");
                return;
            }
            if (select1 === select2) {
                setResult(raw);
                return;
            }


            // console.log(select1,select2);
            const response = await fetch(url, options);
            const data = await response.json();
            // const translated = data?.data?.translations?.translatedText?.[0];
            setResult(data?.data?.translations?.translatedText?.[0]);
            setError(null);
            console.log("Full JSON:", JSON.stringify(data, null, 2));
            console.log(data,result);



        } catch (error) {
            console.error(error);
            setError(error.message);
        } finally {
            setLoading(false)
        }
    }
    
    return (
        <>
            <div className='flex items-center flex-col md:flex-row h-[calc(100vh-180px)] md:h-[calc(100vh-90px)]  justify-center w-screen '>
                <div className="md:w-1/2 w-full md:h-full h-3/7">
                    <RawText raw={raw} setRaw={setRaw} />
                </div>
                {loading ? <Loader /> : <></>}
                <div className="md:w-1/2 w-full md:h-full h-3/7" >

                    <ResultText result={result} setResult={setResult} error={error} />
                </div>
            </div>
        </>
    )
}

export default Home
