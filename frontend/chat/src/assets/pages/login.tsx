import { useState } from 'react';
import Form2 from '../Componentes/formsingup';
import  Form  from '../Componentes/form';
import Logo from '../imgs/verbumlog.png';

export function Login() {
  const [showForm2, setShowForm2] = useState(false);

  const toggleForm = () => {
    setShowForm2(!showForm2);
  };

  return (
    <div className="flex w-full h-screen">
      <div className="w-full flex flex-col items-center bg-[#191A26] justify-center lg:w-1/2">
        {showForm2 ? <Form2 /> : <Form />}
        <button className="text-white mt-4 flex gap-2" onClick={toggleForm}>
          {showForm2 ? 'alredy have a account?' : 'don`t have an account?'}
          <span className="dynamic-text text-pink-400 font-bold">{showForm2 ? 'Sign in' : 'Create One'}</span>
        </button>
      </div>
      <div className="h-full w-1/2 items-center bg-[#101015] justify-center lg:flex hidden">
        <img src={Logo} alt="img-logo" className="w-64"/>
      </div>
    </div>
  );
}
