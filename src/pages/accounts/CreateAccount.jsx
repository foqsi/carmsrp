

export default function RegisterForm({ setCreateAccount }) {
    return (
        <div className="flex flex-col items-center justify-center w-96 h-96 bg-white rounded-xl shadow-md">
            <div className="flex flex-col items-center justify-center w-full h-24 bg-white rounded-t-xl">
                <h2 className="text-4xl font-bold text-zinc-600">Create account</h2>
            </div>
            <div className="flex flex-col items-center justify-center w-full h-72">
                <form className="flex flex-col items-center justify-center w-full h-full">
                    <input className="w-72 h-12 px-4 py-2 mb-4 border border-gray-400 rounded-md" type="email" placeholder="Email" />
                    <input className="w-72 h-12 px-4 py-2 mb-4 border border-gray-400 rounded-md" type="password" placeholder="Password" />
                    <input className="w-72 h-12 px-4 py-2 mb-4 border border-gray-400 rounded-md" type="password" placeholder="Confirm Password" />
                    <button className="w-72 h-12 mb-4 bg-zinc-600 hover:bg-gray-700 rounded-md text-white">Create Account</button>
                    <button
                        onClick={() => setCreateAccount(false)}
                        className="w-72 h-12 mb-4 bg-zinc-600 hover:bg-gray-700 rounded-md text-white">Back to Login</button>
                </form>
            </div>
        </div>
    );
}