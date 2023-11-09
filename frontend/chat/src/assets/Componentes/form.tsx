import { SetStateAction,  useState } from 'react';

export default  function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e: { target: { value: SetStateAction<string>; }; }) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: { target: { value: SetStateAction<string>; }; }) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    try {
      const response = await fetch('/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ Email: email, Password: password }),
      });

      if (response.status === 200) {
        console.log("acceso permitido");
      } 
       else {
        console.error('Acceso denegado');
        
      }
    } catch (error) {
      console.error('Error al enviar la solicitud:', error);
    }
  };

  return (
    <div className="text-white lg:w-1/2">
      <h1 className="text-5xl font-semibold text-[#ffff]">Welcome back</h1>
      <p className="font-medium text-lg text-gray-500 mt-4">Welcome back! Please enter your details</p>
      <div className="mt-8">
        <form onSubmit={handleSubmit}>
          <div>
            <label className="flex mb-3 text-lg font-medium">Email</label>
            <input
              className="border-moving-input w-full text-[#ffff] border-2 border-none rounded p-5 mt-1 bg-transparent"
              type="email"
              placeholder="Enter your Email"
              required
              value={email}
              onChange={handleEmailChange}
            />
          </div>
          <div>
            <label className="flex my-3 text-lg font-medium">Password</label>
            <input
              className="border-moving-input w-full text-[#ffff] border-2 border-none rounded p-5 mt-1 bg-transparent"
              placeholder="Enter your password"
              type="password"
              required
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
          <div className="mt-8 flex justify-between items-center">
            <div>
              <input type="checkbox" id="remember" />
              <label className="ml-2 font-medium text-base" htmlFor="remember"> Remember me</label>
            </div>
            <button className="font-medium text-base text-pink-800">Forgot password?</button>
          </div>
          <div className="mt-8 flex flex-col gap-y-4">
            <button
              className="bg-pink-600 text-white text-lg font-bold rounded-xl py-2 active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01] ease-in-out"
            >
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
