import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Body from "./Components/Body.jsx";
import Foot from "./Components/Foot.jsx";
import Header from "./components/Header.jsx";
import Login from "./passing/Login.jsx";
import Signup from "./passing/Signup.jsx";
function App() {
  return (
    <div className="App">
      <Header />
      <Body/>
      <Foot />
      <Router>

      <Routes>
        <Route path="/about" element={<Login />} />
        <Route path="/contact" element={<Signup />} />
      </Routes>
      </Router>
    </div>
  );

}
export default App;