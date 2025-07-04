import React, { useEffect, useState } from 'react'
import RawText from './RawText'
import ResultText from './ResultText'

const Home = ({ select1, select2 }) => {
    const [raw, setRaw] = useState("")
    const [result, setResult] = useState("")
    const langFromater = (lang) => {
        if (lang == "english") { return "en" }
        else if (lang == "Spanish") { return "es" }
        else if (lang == "French") { return "fr" }
        else if (lang == "German") { return "de" }
        else if (lang == "Italian") { return "it" }
        else if (lang == "Portuguese") { return "pt" }
        else if (lang == "Russian") { return "ru" }
        else if (lang == "Chinese") { return "zh" }
        else if (lang == "Japanese") { return "ja" }
        else if (lang == "Korean") { return "ko" }
        return "en" // default to English
    }

    useEffect(() => {
        if (!raw.trim()) return;

        const handler = setTimeout(() => {
            translateText(raw); // Call your translation function
        }, 5000); // 5 seconds

        // Cleanup if raw changes before 5 seconds
        return () => clearTimeout(handler);
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
                source: langFromater(select1),
                target: langFromater(select2)
            })

        };
        try {
            if (raw === "") {
                alert("Please enter some text to translate");
                return;
            }
            if (raw.length > 5000) {
                alert("Text is too long, please enter less than 5000 characters");
                return;
            }

            const response = await fetch(url, options);
            const data = await response.json();
            const translated = data?.data?.translations?.translatedText?.[0];
            setResult(data?.data?.translations?.translatedText?.[0]);
            console.log(data, raw, translated);
            // console.log("Full JSON:", JSON.stringify(data, null, 2));

        } catch (error) {
            console.error(error);
        }
    }
    return (
        <div className='flex  items-center h-[calc(100vh-64px)] justify-center w-screen '>
            <div className="w-1/2 h-full">
                <RawText raw={raw} setRaw={setRaw} />
            </div>
            <div className="w-1/2 h-full">

                <ResultText result={result} setResult={setResult} />
            </div>
        </div>
    )
}

export default Home