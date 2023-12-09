import { Link } from "react-router-dom";
import { useEffect, useState } from 'react';
import { io } from 'socket.io-client';

interface User {
    username: string;
  }

function Person() {
    const [userList, setUserList] = useState<User[]>([]);

  useEffect(() => {
    const socket = io('http://localhost:5173');

    socket.on('userList', (users) => {
      setUserList(users);
    });

    // return () => {
    //   socket.disconnect();
    // };
  }, []);

  return (
    <>
      <div className="overflow-y-auto h-[37rem]">
        {userList.map((user, index) => (
          <Link key={index} to="/chatopen" className="p-2 mt-8 hover:bg-[#f472b6] active:bg-[#f472b6] focus:outline-none focus:bg-[#f472b6] flex w-full gap-2">
            {/* <div className="">
              <img src="https://img.freepik.com/foto-gratis/retrato-hombre-blanco-aislado_53876-40306.jpg?size=626&ext=jpg&ga=GA1.1.1016474677.1697155200&semt=ais" className="w-10 h-10 object-cover rounded-full" alt="User" />
            </div> */}

            <div className="flex ">
              <div className="flex-none w-28">
                {user.username}
              </div>

              <div className="flex-none w-19">
                20:50 
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}

export default Person;
