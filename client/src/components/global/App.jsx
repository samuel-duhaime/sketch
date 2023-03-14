import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GlobalStyles from "./styles/GlobalStyles";
import Home from "../home/Home";
import Create from "../create/Create";
import View from "../view/View";

const App = () => {
   return (
      <Router>
         <GlobalStyles />
         <Routes>
            <Route
               path="/"
               element={<Home />}
            />
            <Route
               path="/create/:somethingId"
               element={<Create />}
            />
            <Route
               path="/view/:somethingId"
               element={<View />}
            />
         </Routes>
      </Router>
   );
};

export default App;
