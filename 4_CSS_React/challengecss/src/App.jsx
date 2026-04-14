function App() {
  const myCars = [
    { id: 1, brand: "Ford", model: "Mustang", year: 2020 },
    { id: 2, brand: "Chevrolet", model: "Camaro", year: 2019 },
    { id: 3, brand: "Dodge", model: "Challenger", year: 2021 },
  ];

  return (
    <div className="App">
      <h1>Showroom de carros</h1>
      <div className="car-container">
        {myCars.map((car) => (
          <Car car={car} />
        ))}
      </div>
    </div>
  );
}

export default App;
