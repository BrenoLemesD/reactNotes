import { useState } from "react";

const ManageData = () => {
  let someData = 10;

  const [number, setNumber] = useState(someData / 2);

  return (
    <div>
      <div>
        <p>Valor: {someData}</p>
        {/* errado, devemos usar o setNome (no caso setNumber) para setar valor */}
        <p>Errado / Certo</p>
        <button onClick={() => (someData = 15)}>Mudar com variavel</button>

        <button onClick={() => setNumber(32)}>Mudar com set</button>
      </div>
      <div>
        <p>Novo Valor: {number}</p>
        <button onClick={() => setNumber(25)}>Muda o State</button>
      </div>
    </div>
  );
};

export default ManageData;
