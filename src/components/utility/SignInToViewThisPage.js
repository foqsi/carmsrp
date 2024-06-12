export default function SignInToViewThisPage() {
    return (
        <div className="flex flex-col items-center justify-center w-full h-screen">
            <h2 className="text-4xl font-bold text-gray-600 mb-6">Please sign in to view this page</h2>
            <a href="/Login">
                <button className="w-72 h-12 mb-4 bg-zinc-600 hover:bg-gray-700 rounded-md text-white">Sign In</button>
            </a>
        </div>
    );
}
