export default function Favorites(){
    return (
        <div className="container mx-auto px-4 py-16 text-center">
            <h1 className="text-3xl font-bold text-white mb-6">Favorites</h1>
            <div className="bg-gray-800 rounded-lg p-8 shadow-lg max-w-lg mx-auto">
                <p className="text-xl text-gray-400">There are no favorites yet!</p>
                <p className="mt-4 text-gray-500">Movies you mark as favorites will appear here</p>
            </div>
        </div>
    )
}