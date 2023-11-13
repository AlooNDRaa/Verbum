import React, { useState, useEffect } from "react";
import io from "socket.io-client";

const Socket = io('/');

function Mensajes() {
    const [chat, setChat] = useState<string>("");
    const [chats, setChats] = useState<{ body: string; from: string }[]>([]); 

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const newChat = {
            body: chat,
            from: "me"
        }
        setChats([...chats, newChat]);
        Socket.emit("chat", chat);
    };

    useEffect(() => {
        Socket.on("chat", receiveChat);
        return () => {
            Socket.off("chat", receiveChat);
        };
        
    },);

    const receiveChat = (newChat: { body: string; from: string}) => {
        const remitente = newChat.from === "me" ? "Me" : newChat.from; //cambio de remitente, o nombre de el. Para los mensajes del ME. funciona bien.
        newChat.from = remitente;
        setChats((state: { body: string; from: string }[]) => [...state, newChat]);  
             
    };
    

    return (
        <>
            <div className="w-full h-screen bg-[#161616] opacity-90 flex items-center justify-center overflow-y-scroll scroll-smooth pb-[48px]  ">
                <form onSubmit={handleSubmit} className="absolute bottom-0 flex items-stretch w-[77%]">
                    <input
                        type="text"
                        placeholder="Escribir"
                        value={chat}
                        onChange={(e) => setChat(e.target.value)}
                        className="bg-[#ec4899] border-stone-700 bg-stone-900 rounded-md flex-auto  h-[50px]  "
                    />
                    <button type="submit" className=" text-[#fdf4ff]">Enviar</button>
                </form>
                <ul>
                    {chats.map((chat, i) => (
                        <li className={`text-white text-1xl my-2 p-2 table  rounded-md ${chat.from === 'me' ? 'bg-[#C83C83] ml-[40vw]': `bg-[#f472b6] mr[5vw]`}`} key={i}>
                            <span className=" font-bold block ">{chat.from}</span> <span className="text-sm ">{chat.body}</span> 
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}

export default Mensajes;
