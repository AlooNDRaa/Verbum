import '../Styles/index.css'

export function Form2() {
    return(
        <>
        <div className="text-white">
            <h1 className="text-5xl font-semibold text-[#ffff]">
                Welcome User
            </h1>
            <p className="font-medium text-lg text-gray-500 mt-4">
                Welcome User! Please enter your details
            </p>
        <div className="mt-8">
             <div className='mb-2'>
                <label className="flex mb-3 text-lg font-medium">UserName</label>
                <input 
                className="border-moving-input w-full text-[#ffff] border-2 border-none rounded p-4 mt-1 bg-transparent"
                type="text" 
                placeholder="Enter your name"                
                />
            </div>
            <div>
                <label className="flex mb-3 text-lg font-medium">Email</label>
                <input 
                className="border-moving-input w-full text-[#ffff] border-2 border-none rounded p-4 mt-1 bg-transparent"
                type="Email" 
                placeholder="Enter your Email"                
                />
            </div>
            <div>
            <label className="flex my-3 text-lg font-medium">Password</label>
                <input 
                className="border-moving-input w-full text-[#ffff] border-2 border-none rounded p-4 mt-1 bg-transparent"
                placeholder="Enter your password"
                type='password'                
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
                <button className="font-medium text-base text-pink-800">Need help?</button>
            </div>
            <div className="mt-8 flex flex-col gap-y-4">
                <button className="bg-pink-600 text-white text-lg font-bold rounded-xl py-2 active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01] ease-in-out">Create</button>
                <div className="flex gap-x-2 justify-center">
                    <p>alredy have an account?</p>
                    <button className="text-pink-400 font-bold">Sign in</button>
                </div>
            </div>
        </div>
        </div>
        </>
    )
}