// import logo from './logo.svg';
// import './App.css';
import Home from "./Home";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Paysuccess from "./Paysuccess";
function App() {
  return (
    <div className="App">
     <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/paysuccess" element={<Paysuccess/>}/>
      </Routes>
     </Router>
    </div>
  );
}

export default App;
