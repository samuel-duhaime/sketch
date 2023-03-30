import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GlobalStyles from "./styles/GlobalStyles";
import Home from "../home/Home";
import Create from "../create/Create";
import View from "../view/View";
import { SketchProvider } from "./context/SketchContext";

const App = () => {
  return (
    <Router>
      <GlobalStyles />
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
      </Routes>

      {/* Sketch provider context */}
      <SketchProvider>
        <Routes>
          <Route
            path="/create/:sketchId"
            element={<Create />}
          />
          <Route
            path="/view/:sketchId"
            element={<View />}
          />
        </Routes>
      </SketchProvider>
    </Router>
  );
};

export default App;
