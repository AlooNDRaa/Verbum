import React, { useState, useEffect, useCallback } from "react";
import io from "socket.io-client";
import '../../../Styles/index.css'
import Navopen from "./navOpenChat";

const Socket = io('/');

interface MensajesProps {
    selectedUser: string;
    userId: number;
}

function Mensajes(props: MensajesProps) {
    const { selectedUser } = props;
    const [chat, setChat] = useState<string>("");
    const [chats, setChats] = useState<{
        receptor: string; body: string; from: string;
    }[]>([]);

    const displayedChats = chats.filter((chat) => chat.from === selectedUser || chat.from === "me");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (chat.trim() === "") {
            return;
        }

        const newChat = {
            body: chat,
            from: "me",
            receptor: selectedUser
        };

        Socket.emit("chat", chat);

        const response = await fetch('http://localhost:3000/messages', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ message_content: chats, user_id: selectedUser }),
          });
          
          if (response.ok) {
            try {
              const result = await response.json();
              console.log('Mensaje creado con éxito:', result);
            } catch (error) {
              console.error('Error al procesar la respuesta JSON:', error);
            }
          } else {
            console.error('Error al crear el mensaje:', response.statusText);
          }
          

        setChats([...chats, newChat]);
        setChat("");
    };

    const receiveChat = useCallback((newChat: { body: string; from: string }) => {
        const remitente = newChat.from === selectedUser ? "Me" : selectedUser;
        const receptor = newChat.from === selectedUser ? selectedUser : "Me";
        const updatedChat = { ...newChat, from: remitente, receptor: receptor };
        setChats((state: { body: string; from: string; receptor: string }[]) => [...state, updatedChat]);
    }, [selectedUser]);

    useEffect(() => {
        if (selectedUser) {
            Socket.on("chat", receiveChat);
            return () => {
                Socket.off("chat", receiveChat);
            };
        }
    }, [selectedUser, receiveChat]);

    return (
        <>
        <div className="fixed">
          <Navopen selectedUser={selectedUser} />
          </div>
          <div className="w-[69rem] flex  items-center justify-center">
            <form onSubmit={handleSubmit} className="absolute bottom-0 flex items-stretch w-[60rem] p-2 ">
              <input
                type="text"
                placeholder="Escribir"
                value={chat}
                onChange={(e) => setChat(e.target.value)}
                className="text-white border-stone-700 bg-[#161610] bg-opacity-60 px-4 rounded-xl flex-auto h-[4rem]"
              />
              <button type="submit" className="text-[#fdf4ff] font-semibold bg-pink-600 rounded-xl ml-1 px-3">Enviar</button>
            </form>
            <ul className="overflow-y-auto w-full h-[30rem] mt-24 text-clip overflow-hidden">
              {displayedChats.map((chat, i) => (
                <li
                  style={{ maxWidth: "300px", overflowWrap: "break-word" }}
                  className={`text-white text-1xl my-2 p-3 rounded-md ${chat.from === "me" ? 'bg-[#C83C83] ml-[50rem] mr-7 rounded-ee	 rounded-es-3xl' : `bg-[#f472b6] block ml-[3rem] rounded-se-xl	 rounded-r-3xl`}`}
                  key={i}
                >
                  <span className="font-bold block">{chat.from}</span>
                  <span className="text-sm">{chat.body}</span>
                </li>
              ))}
            </ul>
          </div>
        </>
    );
}

export default Mensajes;
