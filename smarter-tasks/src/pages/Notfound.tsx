import React from 'react';
import { Link } from 'react-router-dom';

const NotFound: React.FC = () => {
  return (
    <div className="container mx-auto mt-10">
      <h1 className="text-4xl font-bold text-center mb-6">404 - Not Found</h1>
      <div className="flex justify-center">
        <Link to="/">
          <button id="backToHomeButton" className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
            Back to Homepage
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
