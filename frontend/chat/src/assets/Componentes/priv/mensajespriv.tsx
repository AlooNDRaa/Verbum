import React, { useState, useEffect } from "react";
import IconChat from '../../imgs/Group 5.svg'
import io from "socket.io-client";

const Socket = io('/');
function Mensajes() {
    const [chat, setChat] = useState<string>("");
    const [chats, setChats] = useState<{ body: string; from: string }[]>([]);
  
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
  
      if (!chat.trim()) {
        return;
      }
  
      const newChat = {
        body: chat,
        from: "Anonimus",
      };
      setChats([...chats, newChat]);
      Socket.emit("chat", chat);
      setChat("");
    };
  
    useEffect(() => {
      Socket.on("chat", receiveChat);
      return () => {
        Socket.off("chat", receiveChat);
      };
    }, [chats]);
  
    const receiveChat = (newChat: { body: string; from: string }) => {
      const remitente = newChat.from === "Anonimus" ? "Anonimus" : newChat.from;
      newChat.from = remitente;
      setChats((state: { body: string; from: string }[]) => [...state, newChat]);
    };
  
    return (
      <>
        <div className="w-full flex items-center justify-center">
          <form onSubmit={handleSubmit} className="absolute bottom-0 flex justify-center mb-8">
            <input
              type="text"
              placeholder="يرسل"
              value={chat}
              onChange={(e) => setChat(e.target.value)}
              className="text-red-300 px-5 bg-stone-950 rounded-md flex lg:w-[40rem] mr-3 h-[3rem]"
            />
            <button type="submit" className=" text-[#fdf4ff]">
                <img src={IconChat} alt="iconchat" 
                className="h-12"/>
            </button>
          </form>
          <ul className="lg:w-[49rem] border-2 rounded-xl border-red-800 py-3 h-[470px] overflow-y-auto">
            {chats.map((chat, i) => (
              <li className={`text-white text-1xl p-8 rounded-md ${chat.from === 'Anonimus' ? ' ml-[40vw]' : ' mr-[5vw]'}`} key={i}>
                <span className=" font-semibold text-red-400 block ">{chat.from}</span>{" "}
                <span className="text-sm text-white">{chat.body}</span>
              </li>
            ))}
          </ul>
        </div>
      </>
    );
  }
  
  export default Mensajes;