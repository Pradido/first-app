import Homepage from "./Pages/Homepage";
import Services from "./Pages/Services";
import Blog from "./Pages/Blog";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
       <Route path="/" element={<Homepage />} />
       {/* <Route path="/services" element={<Services/>} />
       <Route path="/blog" element={<Blog />} /> */}


    </Routes>
  );
}

export default App;
