import "./App.css";
import MyComponents from "./components/MyComponents";

export default function App() {
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
    </div>
  );
}
