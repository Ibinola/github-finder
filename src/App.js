import Navbar from "./components/layouts/Navbar";
import { FaGithub } from "react-icons/fa";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="flex flex-col justify-between h-screen">
        <Navbar />
        <main>
          content
        </main>
      </div>
    </Router>
  );
}

export default App;
