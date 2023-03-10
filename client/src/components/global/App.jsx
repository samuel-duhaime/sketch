import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GlobalStyles from "./styles/GlobalStyles";
import Home from "../home/Home";
import Signup from "../signup/Signup";
import Create from "../create/Create";
import View from "../view/View";
import TopMenu from "./navigation/TopMenu";
import styled from "styled-components";
import { SIZE } from "../../helpers/contants/constants";

const App = () => {
   return (
      <Router>
         <GlobalStyles />
         <TopMenu />
         <MainLayout>
            <Routes>
               <Route
                  path="/"
                  element={<Home />}
               />
               <Route
                  path="/signup"
                  element={<Signup />}
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
         </MainLayout>
      </Router>
   );
};

const MainLayout = styled.main`
   display: flex;
   flex-direction: column;
   align-items: center;
   min-height: calc(100vh - ${SIZE.topMenuHeight});
   max-width: 1240px;
   padding: 20px;
   margin: 0 auto;
`;

export default App;
