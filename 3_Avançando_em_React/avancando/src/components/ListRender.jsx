import { useState } from "react";

export default function ListRender() {
  const [list] = useState(["Matheus", "João", "Maria", "Breno"]);

  const [users, setUsers] = useState([
    { id: 1, name: "Matheus", age: 30 },
    { id: 2, name: "João", age: 25 },
    { id: 3, name: "Maria", age: 28 },
    { id: 4, name: "Breno", age: 35 },
  ]);

  const deleteRandom = () => {
    const randomNumber = Math.floor(Math.random() * 5);

    setUsers((prevUsers) => {
      console.log(prevUsers);
      return prevUsers.filter((user) => randomNumber !== user.id);
    });
  };

  return (
    <div>
      <ul>
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.id} - {user.name} - {user.age} anos
          </li>
        ))}
      </ul>
      <button onClick={deleteRandom}>Delete Random user</button>
    </div>
  );
  s;
}
