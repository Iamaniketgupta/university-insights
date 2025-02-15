import React from 'react';
import svg from './404.svg'
import { Link } from 'react-router-dom';
const NotFoundPage = () => {
    return (
        <div className='h-screen w-full bg-slate-900'>
            <img className='mx-auto' src={svg} alt="404" />

            <h1 className='text-center text-4xl font-bold text-blue-500'>404 Not Found</h1>
            <h3 className='text-center text-4xl mt-3 font-semibold text-stone-200'>Whoops! That page doesn’t exist.</h3>
            <div className='flex justify-center mt-5'>
                <Link to={"/"} className='text-center text-sm w-fit bg-slate-800 p-2 rounded-md hover:text-blue-700 mt-3 mx-auto font-semibold text-stone-200'>Back to Home</Link>
            </div>
        </div>
    );
}

export default NotFoundPage;
