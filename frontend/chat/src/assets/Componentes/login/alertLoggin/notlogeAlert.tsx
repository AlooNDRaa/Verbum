export default function AlertNotLogin() {
    return (
        <div className="flex justify-center items-center h-screen">
          <div className="text-center  bg-gradient-to-r from-pink-800 to-blue-900 h-28 p-3 rounded-xl flex items-center">
            <h1 className="text-white font-bold text-xl">
                 Incorrect credentials, try again
            </h1>
          </div>
        </div>
    ) 
  }