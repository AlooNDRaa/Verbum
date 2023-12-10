import { useState } from 'react';
import Person from '../personasChat';
import Mensajes from '../compOpenChat/mensajes';

function Chatuser() {
  const [selectedUser, setSelectedUser] = useState<string | null>(null);

  const handleUserClick = (username: string) => {
    setSelectedUser(username);
  };

  return (
    <div className="flex">
      <Person onUserClick={handleUserClick} />
      {selectedUser && <Mensajes selectedUser={selectedUser} />}
    </div>
  );
}

export default Chatuser;
