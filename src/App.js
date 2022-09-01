import React  from "react";
import RoutesPages from "./Routes";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="App" style={{ backgroundImage: 'url("img/quiz.png")' , height:"100vh", }}>
      <RoutesPages />
    </div>
  );
}

export default App;
