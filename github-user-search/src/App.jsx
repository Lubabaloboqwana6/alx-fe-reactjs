import Homepage from "./components/Homepage";
import React from "react";
import Aboutpage from "./components/Aboutpage";
import ReactDOM from "react-dom";
import Search from "./components/Search";
import index from "./index.css";
import {
  Route,
  Link,
  BrowserRouter as Router,
  BrowserRouter,
  Routes,
} from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <nav>
          <ul>
            <li>
              <Link to="/"> Home</Link>
            </li>
            <li>
              <Link to="about"> About</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="about" element={<Aboutpage />} />
        </Routes>
      </BrowserRouter>
      <Search />
    </>
  );
}

export default App;
