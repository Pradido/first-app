import Homepage from "./Pages/Homepage";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
       <Route path="/" element={<Homepage />} />
       
       {/* <Route path="/services" element={Services} /> */}
       
    </Routes>
  );
}

export default App;
