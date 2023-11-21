import { useState } from "react";
import { RestoreModal } from "./restoreP";

export function ModalShowRestore() {
  const [show, setShow] = useState(false);
  return(
    <div
    typeof="onClick" 
    className="font-medium text-base text-pink-800 hover:text-pink-400">
      <RestoreModal onClose={() => setShow(false)} show={show}/>
    </div>
    
    )
}