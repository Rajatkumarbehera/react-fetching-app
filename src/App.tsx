import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Details } from "./pages/Details";
import { Home } from "./pages/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/item/:id" element={<Details />} />
      </Routes>
    </Router>
  );
}

export default App;
