const Grocery = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="text-center p-8 bg-white rounded shadow-lg">
        <h1 className="text-4xl font-bold mb-4">Grocery Page</h1>
        <p className="text-gray-700 text-lg mb-4">
          We are currently working on this section. Stay tuned!
        </p>
        <div className="animate-pulse">
          <svg
            className="w-16 h-16 text-gray-400 mx-auto mb-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 15a4 4 0 001 7.73 4 4 0 004-1.73 4 4 0 004 1.73 4 4 0 004-1.73A4 4 0 0021 15M5 10h14M7 10a5 5 0 015-5v0a5 5 0 015 5m-4 1h-6m0 0h-1a1 1 0 100 2h1v1a1 1 0 001 1h4a1 1 0 001-1v-1h1a1 1 0 100-2h-1m-6 0v-2a2 2 0 012-2h2a2 2 0 012 2v2"
            />
          </svg>
        </div>
        <p className="text-gray-500">Please check back later.</p>
      </div>
    </div>
  );
};

export default Grocery;
