import React from 'react';

export default function ErrorPage() {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-red-100">
            <h1 className="text-4xl font-bold text-red-600">404 - Page Not Found</h1>
            <p className="mt-4">Oops! The page you are looking for does not exist.</p>
            <a href="/hotels" className="mt-6 px-4 py-2 bg-blue-500 text-white rounded">
                Go Back to Home
            </a>
        </div>
    );
}
