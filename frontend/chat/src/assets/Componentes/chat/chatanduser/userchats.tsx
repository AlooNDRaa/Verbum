import { useState } from 'react';
import Person from '../personasChat';
import Mensajes from '../compOpenChat/mensajes';
import Nav from '../navChat';

function Chatuser() {
  const [selectedUser, setSelectedUser] = useState<string | null>(null);
  const [personVisible, setPersonVisible] = useState(true);

  const handleUserClick = (username: string) => {
    setSelectedUser(username);
  };

  const handleTogglePerson = () => {
    setPersonVisible((prev) => !prev);
  };

  return (
    <>
      <Nav onTogglePerson={handleTogglePerson} />
      <div className="flex justify-between w-full bg-[#101015]">
        {personVisible && <Person onUserClick={handleUserClick} />}
        <div>
          {selectedUser && <Mensajes selectedUser={selectedUser} userId={0} />}
        </div>
      </div>
    </>
  );
}

export default Chatuser;
