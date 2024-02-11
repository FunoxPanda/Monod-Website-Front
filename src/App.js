import { Routes, Route, BrowserRouter as Router } from "react-router-dom";

/* PAGES */

import Home from "./pages/Home";
import Formations from "./pages/Formations";
import Clubs from "./pages/Clubs";
import Instances from "./pages/Instances";
import Legal from "./pages/Legal";
import Plan from "./pages/Plan";

import './components/styles/global.scss';

const App = () => {
    return (

        <Router>
            <Routes>
                <Route path={"/*"} element={<Home />} />
                <Route path={"/formations"} element={<Formations />} />
                <Route path={"/clubs/et/activites"} element={<Clubs />} />
                <Route path={"/union/lyceene"} element={<Instances />} />
                <Route path={"/mentions/legales"} element={<Legal />} />
                <Route path={"/plan"} element={<Plan />} />

                
            </Routes>
        </Router>
    );
};

export default App;