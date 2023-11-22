import { useState } from "react";
import { Modal } from "./forgotpassword";

export function ModalShow() {
  const [show, setShow] = useState(false);
  return(
    <div
    typeof="onClick" 
    onClick={() => setShow(true)}
    className="font-medium text-base text-pink-800 hover:text-pink-400">
    <h5
    className="animate-pulse"
    >Forgot password?</h5>  
      <Modal onClose={() => setShow(false)} show={show} Onclick={undefined}/>
    </div>
    
    )
}