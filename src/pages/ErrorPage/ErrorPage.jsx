import React from 'react';

const ErrorPage = () => {
  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6 font-sans">
      <div className="max-w-md w-full text-center">
        <div className="relative mb-8">
          <h1 className="text-9xl font-black text-slate-200 select-none">404</h1>
          <p className="absolute inset-0 flex items-center justify-center text-5xl font-bold text-indigo-600 animate-bounce">
            ?
          </p>
        </div>

        <h2 className="text-3xl font-bold text-slate-800 mb-4">
          Lost in the clouds?
        </h2>
        
        <p className="text-slate-600 mb-8 leading-relaxed">
          The page you're looking for doesn't exist or has been moved to a 
          permanent vacation. Let's get you back on track.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={() => window.history.back()}
            className="px-6 py-3 text-sm font-medium text-slate-700 bg-white border border-slate-200 rounded-xl hover:bg-slate-50 transition-all shadow-sm"
          >
            Go Back
          </button>
          
          <a 
            href="/"
            className="px-6 py-3 text-sm font-medium text-white bg-indigo-600 rounded-xl hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-200"
          >
            Back to Homepage
          </a>
        </div>

        {/* Subtle Footer Link */}
        <p className="mt-12 text-xs text-slate-400 uppercase tracking-widest">
          Error Code: NS-404
        </p>
      </div>
    </div>
  );
};

export default ErrorPage;