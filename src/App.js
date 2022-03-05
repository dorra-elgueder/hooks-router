import Conteur from "./Counter/Counter";
import Form from "./Counter/Form";
import Navigation from "./Counter/Navigation";
import { Routes, Route } from "react-router-dom";
import Home from "./Counter/Home";
function App() {
  return (
    <div className="App">
      <Navigation></Navigation>
      <Routes>
        <Route path="Home" element={<Home />} />
      </Routes>
      <Form />
      <Conteur />
    </div>
  );
}

export default App;
