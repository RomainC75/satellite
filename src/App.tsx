import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Home } from "./pages";

function App() {
  return (
    <main className="bg-slate-300/20">
      <Router>
        {/* <h1 className="text-3xl font-bold underline">Hello world!</h1> */}
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </main>
  );
}

export default App;
