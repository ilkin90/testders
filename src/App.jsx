import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Haqqinda from "./Haqqinda";
import Elaqe from "./Elaqe";
import IsNumuneleri from "./IsNumuneleri";

function App() {
  return (
    <>
      <div className="Page">
        <Link to="/haqqinda">Haqqında</Link>
        <Link to="/isler">İş Nümunələri</Link>
        <Link to="/elaqe">Əlaqə</Link>
      </div>

      <Routes>
        <Route path="/haqqinda" element={<Haqqinda />} />
        <Route path="/isler" element={<IsNumuneleri />} />
        <Route path="/elaqe" element={<Elaqe />} />
      </Routes>
    </>
  );
}

export default App;
