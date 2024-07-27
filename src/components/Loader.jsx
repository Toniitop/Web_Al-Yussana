const Loader = () => {
    return (
        <div className="text-center flex items-center justify-center bg-green-600">
            <div className="flex flex-row gap-2">
                <div className="w-4 h-4 rounded-full bg-gray-200 animate-bounce"></div>
                <div className="w-4 h-4 rounded-full bg-gray-300 animate-bounce [animation-delay:-.3s]"></div>
                <div className="w-4 h-4 rounded-full bg-gray-400 animate-bounce [animation-delay:-.5s]"></div><br/>
                <h2 className="text-zinc-900 text-white mt-4">Loading...</h2>
            </div>
        </div>
    );
};

export default Loader;
