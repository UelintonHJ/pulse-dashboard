function Register() {
    return (
        <div className="flex justify-center items-center h-screen">

            <div
                className="
                bg-white/10
                backdrop-blur-lg
                border border-white/20
                rounded-2xl
                p-8
                shadow-2xl
                w-95
            "
            >
                <h1 className="text-3xl mb-6 text-center">
                    Register
                </h1>

                <input 
                    type="email" 
                    placeholder="Email"
                    className="w-full p-3 rounded-lg mb-4 bg-black/20"
                />

                <input 
                    type="password"
                    placeholder="Password"
                    className="w-full p-3 rounded-lg mb-6 bg-black/20"
                />

                <button className="w-full bg-cyan-500 py-3 rounded-lg">
                    Create Account
                </button>

            </div>

        </div>
    );
}

export default Register;