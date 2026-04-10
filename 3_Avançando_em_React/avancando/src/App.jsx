import { useState } from "react";
import "./App.css";
import City from "./assets/city.jpg";
import ListRender from "./components/ListRender";
import ManageData from "./components/ManageData";
import ConditionalRender from "./components/ConditionalRender";
import ShowUserName from "./components/ShowUserName";
import CarDetails from "./components/CarDetails";
import Fragment from "./components/Fragment";
import Container from "./components/Container";
import ExecuteFunction from "./components/ExecuteFunction";

function App() {
  // const name = "Breno";
  const [UserName] = useState("Breno");

  const cars = [
    { id: 1, brand: "VW", km: 10000, color: "black", newCar: false },
    { id: 2, brand: "Ford", km: 0, color: "white", newCar: true },
    { id: 3, brand: "Fiat", km: 10, color: "red", newCar: false },
  ];

  function showMessage() {
    console.log("Evento do componente Pai");
  }

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
      <CarDetails
        key={cars.id}
        brand="VW"
        km={10000}
        color="black"
        newCar={false}
      />
      {/* reaproveitando componentes */}
      <CarDetails
        key={cars.id}
        brand="Ford"
        km={0}
        color="white"
        newCar={true}
      />
      <CarDetails
        key={cars.id}
        brand="Ford"
        km={10}
        color="black"
        newCar={false}
      />
      {/* loop em array de objetos */}
      <p>MAP AQ -------------</p>
      {cars.map((cars) => (
        <CarDetails
          key={cars.id}
          brand={cars.brand}
          color={cars.color}
          km={cars.km}
          newCar={cars.newCar}
        />
      ))}
      {/* fragment */}
      <Fragment propFragment={"teste"} />
      {/* children */}
      <Container myValue="testing">
        <p>Este é o conteúdo do container</p>
      </Container>
      <Container myValue="testing 2">
        <h5>testando container </h5>
      </Container>
      {/* executar função em props */}
      <ExecuteFunction myFunction={showMessage} />
    </div>
  );
}

export default App;
