import { Routes, useLocation, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "./views/Home.jsx";
import Questions from "./views/Questions.jsx";
import Results from "./views/Results.jsx";

function App() {

  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/quiz" element={<Questions />} />
        <Route path="/results" element={<Results />} />
      </Routes>
    </AnimatePresence>
  )
}

export default App
