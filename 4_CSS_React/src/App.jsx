import "./App.css";
import MyComponents from "./components/MyComponents";

export default function App() {
  return (
    <div className="App">
      {/* CSS global */}
      <h1>React com c0ss</h1>
      {/* CSS de componente */}
      <MyComponents />
      <p>Este p é do app.js</p>
    </div>
  );
}
