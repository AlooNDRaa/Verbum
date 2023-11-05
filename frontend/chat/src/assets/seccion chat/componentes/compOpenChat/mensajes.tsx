import { useState } from "react";
import {io} from "socket.io-client"

const socket = io('/');

function Mensajes (){
    const [chat, setChat] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(chat);
    };
    return(
        <>
        <div className="w-full h-[90vh] bg-[#1a1143] opacity-90">
            <form onSubmit={handleSubmit}>
                <input type="text" 
                 placeholder="Escribir"
                 onChange={(e) => setChat(e.target.value)}
                 />
                 <button>Enviar</button>
            </form>
        </div>
        </>
    )
}
export default Mensajes;