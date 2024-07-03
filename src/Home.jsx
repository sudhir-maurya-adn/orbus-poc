import React,{ useCallback, useEffect, useRef, useState } from 'react'
import WebcamImage from "./WebcamImage";
import { v4 as uuid } from "uuid";
import { Link } from 'react-router-dom';

const Home = () => {
    const [is_loading,setIsLoading] = useState(false);
    const [err,setErr] = useState("");
    const [imgGallery, setImgGallery] = useState([]);
    const webcamRef = useRef(null);
    
    const capture = useCallback(() => {
        const img_id = uuid();
        setIsLoading(true);
        const imageSrc = webcamRef.current.getScreenshot();
        let imgData = {
        id : img_id,
        data : imageSrc
        }
        setImgGallery([...imgGallery,imgData]);
    }, [webcamRef,imgGallery]);

    useEffect(() => {
        if (is_loading){
        setTimeout(() => {
            setIsLoading(false);
        }, 400);
        }
    },[is_loading])

    const handleMediaError = (msg) => {
        const {message} = msg;
        setErr(message);
    }
  return (

    <div className="w-full h-full relative">
          {
            (err.length === 0) ? <WebcamImage webcamRef={webcamRef} handleMediaError={handleMediaError} is_loading={is_loading} /> : <div className="flex justify-center items-center h-full select-none"><p className="p-4">{err}</p></div>
          }
        <div className="absolute bottom-0 w-full h-24 py-5 px-8 bg-[rgba(0,0,0,0.6)] rounded-t-lg flex justify-between">
                <div className="bg-gray-400 text-white p-4 rounded-2xl flex justify-center items-center cursor-pointer">
                    <Link to='/gallery'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-9">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                    </svg>
                    </Link>            
                </div>
          <div className="bg-white -mt-3 p-5 py-10 rounded-2xl flex justify-center items-center cursor-pointer" {...(err.length === 0 && {onClick : capture}) } >
            <div className="bg-red-700 w-9 h-9 rounded-full">
            </div>
          </div>
          <div className="bg-gray-400 text-white p-4 rounded-2xl flex justify-center items-center cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-9">
            <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
          </svg>

          </div>

        </div>
    </div>
  )
}

export default Home