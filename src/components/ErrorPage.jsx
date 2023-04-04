import React from 'react';
import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const error = useRouteError();
    console.log(error);
    return (
        <div className='container mx-auto h-screen bg-m-text'>
            <div className='flex flex-col justify-center items-center h-screen space-y-4'>
            <p className='block text-9xl font-extrabold text-m-bg'>404</p>
            <p className='text-3xl text-red-400'>{error.statusText}</p>
            <p className='text-3xl text-red-400'>{error.error.message}</p>
            </div>
        </div>
    );
};

export default ErrorPage;