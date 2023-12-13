import { useEffect, useState } from 'react';
import { io } from 'socket.io-client';

interface User {
    username: string;
  }

  function Person({ onUserClick }: { onUserClick: (username: string) => void }) {
    const [userList, setUserList] = useState<User[]>([]);

  useEffect(() => {
    const socket = io('http://localhost:5173');

    socket.on('userList', (users) => {
      setUserList(users);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  
  return (
    <>
      <div className="overflow-y-auto h-[43rem] w-[11rem]  justify-center grid text-gray-400 font-semibold">
        {userList.map((user, index) => (
          <div
          key={index}
          onClick={() => onUserClick(user.username)} 
          className="py-2 mt-4 hover:bg-pink-600  flex">
            <div className="flex ">
              <div className="flex-none w-28 p-2">
                {user.username}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Person;
