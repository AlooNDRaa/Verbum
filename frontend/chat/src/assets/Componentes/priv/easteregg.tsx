import React, { useState, useEffect } from "react";
import { EnterPas } from "./enterP";
import Error from "./error";
import Chat2 from "./chat2";

export function Easteregg() {
  const [showComponent, setShowComponent] = useState<number>(1);
  const [passwordIsCorrect, setCorrectPassword] = useState<boolean>(false);

  useEffect(() => {
    if (showComponent === 1) {
      setTimeout(() => {
        setShowComponent(2);
      }, 6000);
    }
  }, [showComponent]);

  const verificatedPassword = (password: string): void => {
    if (password === "Password") {
      setCorrectPassword(true);
      setShowComponent(3);
    } else {
      console.log("Incorrect password");
    }
  };

  return (
    <>
      <div className="">
        {showComponent === 1 && <Error />}
        {showComponent === 2 && <EnterPas />}
        {showComponent === 3 && passwordIsCorrect && <Chat2 />}
        {showComponent === 3 && !passwordIsCorrect && (
          <div>
            <p>enter the correct password</p>
          </div>
        )}
      </div>
    </>
  );
}