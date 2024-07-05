import React from 'react'
import { Link } from 'react-router-dom'

const Gallery = (props) => {
    const {imgGallery} = props;
    console.log(imgGallery)
    return (
        <div className='px-4 py-6 bg-gray-600 h-full'>
            <div className='pb-4 flex justify-between items-center'>
                <h1 className='text-white font-semibold text-lg'>Gallery</h1>
                <div className='text-white cursor-pointer'>
                    <Link to='/'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                            <path fillRule="evenodd" d="M11.03 3.97a.75.75 0 0 1 0 1.06l-6.22 6.22H21a.75.75 0 0 1 0 1.5H4.81l6.22 6.22a.75.75 0 1 1-1.06 1.06l-7.5-7.5a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 0 1 1.06 0Z" clipRule="evenodd" />
                        </svg>
                    </Link>
                </div>

            </div>
                {
                    imgGallery.length > 0 ? (

                        <div className='grid grid-cols-3 gap-4'>
                            {
                                imgGallery.map((img,idx) => {
                                    return (
                                        <div key={idx} className='w-full h-[4.5rem] bg-black rounded-2xl text-balck relative shadow-md'>
                                            <img src={img.data} className='w-full h-full object-cover object-center rounded-2xl' alt=''/>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="size-7 absolute -right-3 -top-3 cursor-pointer">
                                                <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.72 6.97a.75.75 0 1 0-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06L12 13.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L13.06 12l1.72-1.72a.75.75 0 1 0-1.06-1.06L12 10.94l-1.72-1.72Z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                    )
                                }) 
                            }
                        </div>
                    ): <p className='text-center text-white font-semibold'>No Gallery Image</p>
                }
        </div>
    )
    }

export default Gallery