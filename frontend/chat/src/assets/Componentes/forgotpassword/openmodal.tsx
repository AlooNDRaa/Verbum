import { useState } from "react";
import Modal from "./forgotpassword";

export function ModalShow() {
    const [show, setShow] = useState(false);
return(
    <div 
    onClick={() => setShow(true)}
    className="font-medium text-base text-pink-800">
      Forgot password?
      <Modal onClose={() => setShow(false)} show={show}/>
    </div>
    )
}