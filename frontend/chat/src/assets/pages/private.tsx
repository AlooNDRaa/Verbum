import { useState, useEffect } from 'react';
import { EnterPas } from '../Componentes/priv/enterP';
import Error from '../Componentes/priv/error';

export function ThePrivatePage() {
  const [showError, setShowError] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowError(false);
    }, 4000);

    return () => clearTimeout(timeoutId); 
  }, []);

  return (
    <>
      {showError ? (
        <Error />
      ) : (
        <EnterPas />
      )}
    </>
  );
}
