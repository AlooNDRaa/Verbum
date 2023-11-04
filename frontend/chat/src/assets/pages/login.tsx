import { useState } from 'react';
import { Form } from '../Componentes/form';
import { Form2 } from '../Componentes/formsingup';
import Logo from '../imgs/verbumlog.png';

export function Login() {
  const [showLoginForm, setShowLoginForm] = useState(true);

  const toggleForm = () => {
    setShowLoginForm(!showLoginForm);
  };

  return (
    <div className="flex w-full h-screen  h">
      <div className="w-full flex items-center bg-[#191A26] justify-center lg:w-1/2">
        {showLoginForm ? <Form2 /> : <Form />}
      </div>
      <div className="lg:flex h-full w-1/2 items-center bg-[#101015] justify-center lg:w-1/2">
        <img src={Logo} alt="img-logo" className="w-60 animate-pulse" onClick={toggleForm} />
      </div>
    </div>
  );
}
