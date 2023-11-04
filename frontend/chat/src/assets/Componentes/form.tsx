import '../Styles/index.css'

export function Form() {
    return(
        <>
        <div className="text-white lg:w-1/2">
            <h1 className="text-5xl font-semibold text-[#ffff]">
                Welcome back
            </h1>
            <p className="font-medium text-lg text-gray-500 mt-4">
                Welcome back! Please enter your details
            </p>
        <div className="mt-8">
            <div>
                <label className="flex mb-3 text-lg font-medium">Email</label>
                <input 
                className="border-moving-input w-full text-[#ffff] border-2 border-none rounded p-5 mt-1 bg-transparent"
                type="Email" 
                placeholder="Enter your Email"                
                id='Email' required
                />
            </div>
            <div>
            <label className="flex my-3 text-lg font-medium">Password</label>
                <input 
                className="border-moving-input w-full text-[#ffff] border-2 border-none rounded p-5 mt-1 bg-transparent"
                placeholder="Enter your password"
                type='password'   
                id='Password' required
                />
            </div>
            <div className="mt-8 flex justify-between items-center">
                <div>
                    <input type="Checkbox"
                        id="remember"
                    />
                    <label 
                    className="ml-2 font-medium text-base"
                    htmlFor="remember"> Remember me</label>
                </div>
                <button className="font-medium text-base text-pink-800">Forgot password?</button>
            </div>
            <div className="mt-8 flex flex-col gap-y-4">
                <button 
                    className="bg-pink-600 text-white text-lg font-bold rounded-xl py-2 active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01] ease-in-out">
                        Sing in
                </button>
                <div className="flex gap-x-2 justify-center">
                    <p>Don't have account?</p>
                    <button className="text-pink-400 font-bold transitionpage">Create One</button>
                </div>
            </div>
        </div>
        </div>
        </>
    )
}