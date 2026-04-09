import { useState } from "react";
import "./App.css";
import City from "./assets/city.jpg";
import ListRender from "./components/ListRender";
import ManageData from "./components/ManageData";
import ConditionalRender from "./components/ConditionalRender";
import ShowUserName from "./components/ShowUserName";
import CarDetails from "./components/CarDetails";

function App() {
  const name = "Breno";
  const [UserName] = useState("Breno");

  return (
    <div className="App">
      <h1>Avançando em React</h1>
      {/* Imagem em public  */}
      <div>
        <img src="/img1.jpg" alt="Paisagem" />
      </div>
      <div>
        {/* Imagem em assets */}
        <img src={City} alt="Cidade" />
      </div>
      <ManageData />
      <ListRender />
      <ConditionalRender />
      {/* props */}
      <ShowUserName name={UserName} />
      {/* destructuring */}
      <CarDetails brand="VW" km={10000} color="black" newCar={false} />
      {/* reaproveitando componentes */}
      <CarDetails brand="Ford" km={0} color="white" newCar={true} />
      <CarDetails brand="Ford" km={10} color="black" newCar={false} />
    </div>
  );
}

export default App;
