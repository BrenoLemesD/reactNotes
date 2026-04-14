import "./App.css";
import MyComponents from "./components/MyComponents";
import { useState } from "react";
import Title from "./components/Title";

export default function App() {
  const n = 15;
  const [name] = useState("Breno");

  const redTitle = true;

  return (
    <div className="App">
      {/* CSS global */}
      <h1>React com css</h1>
      {/* CSS de componente */}
      <MyComponents />
      <p>Este p é do app.js</p>
      {/* inline css */}
      <p style={{ color: "blue", padding: "25px", borderTop: "2px solid red" }}>
        Este elemento foi estilizado inline
      </p>
      <p
        style={{
          color: "magenta",
          padding: "25px",
          borderTop: "2px solid red",
        }}
      >
        Este elemento foi estilizado inline
      </p>
      {/* CCS Inline dinamico */}
      <h2 style={n < 10 ? { color: "purple" } : { color: "blue" }}>
        Css dinamico
      </h2>
      <h2 style={n > 10 ? { color: "purple" } : { color: "blue" }}>
        Css dinamico
      </h2>
      <h2
        style={
          name === "Breno" ? { color: "purple", background: "pink" } : null
        }
      >
        Css dinamico
      </h2>
      {/* Classe Dinamica */}
      <h2 className={redTitle ? "red-title" : "title"}>
        Este titulo vai ter classe dinamica
      </h2>
      {/* css modules */}
      <Title />
    </div>
  );
}
