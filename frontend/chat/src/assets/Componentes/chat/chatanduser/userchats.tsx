import { useState } from 'react';
import Person from '../personasChat';
import Mensajes from '../compOpenChat/mensajes';

function Chatuser() {
  const [selectedUser, setSelectedUser] = useState<string | null>(null);

  const handleUserClick = (username: string) => {
    setSelectedUser(username);
  };

  return (
    <div className="flex justify-between w-full bg-[#101015]">
      <Person onUserClick={handleUserClick} />
      <div className="bg-[#101015]">
      {selectedUser && <Mensajes selectedUser={selectedUser} userId={0}/>}
    </div>
    </div>
  );
}

export default Chatuser;
