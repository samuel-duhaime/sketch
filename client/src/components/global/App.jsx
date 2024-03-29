import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GlobalStyles from "./styles/GlobalStyles";
import Home from "../home/Home";
import Create from "../create/Create";
import View from "../view/View";

// Routes of the application
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
          path="/create/:sketchId"
          element={<Create />}
        />
        <Route
          path="/view/:sketchId"
          element={<View />}
        />
      </Routes>
    </Router>
  );
};

export default App;
