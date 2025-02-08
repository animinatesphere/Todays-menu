import { Route, Routes } from "react-router";
import "./App.css";

import Mar from "../src/Mar";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Mar />} />
        {/* <Route path="/" element={<Menu />} /> */}
        {/* <Route path="H" element={<MEnu3 />} /> */}
      </Routes>
    </>
  );
}

export default App;
