import React from "react";
import { Route, Routes } from "react-router-dom";
import AboutRLRC from "./pages/AboutRLRC";
import Detail from "./pages/Detail";
import Landing from "./pages/Landing";
import NewNotice from "./pages/NewNotice";
import NewNoticeAdmin from "./pages/NewNoticeAdmin";
import Research from "./pages/Research";
import ResearchField from "./pages/ResearchField";
import ResearchOutcomes from "./pages/ResearchOutcomes";
import ResearchOutcomesAdmin from "./pages/ResearchOutcomesAdmin";
import SiteMap from "./pages/SiteMap";
import UserLogin from "./pages/UserLogin";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          style={{ textDecoration: "none" }}
          element={<Landing />}
        ></Route>
        <Route
          path="/SiteMap"
          style={{ textDecoration: "none" }}
          element={<SiteMap />}
        ></Route>
        <Route
          path="/AboutRLRC"
          style={{ textDecoration: "none" }}
          element={<AboutRLRC />}
        ></Route>
        <Route
          className="research"
          path="/Research"
          style={{ textDecoration: "none" }}
          element={<Research />}
        ></Route>
        <Route
          className="researchField"
          path="/ResearchField"
          style={{ textDecoration: "none" }}
          element={<ResearchField />}
        ></Route>
        <Route
          className="newNotice"
          path="/NewNotice"
          style={{ textDecoration: "none" }}
          element={<NewNotice />}
        ></Route>
        <Route
          className="newNoticeAdmin"
          path="/NewNoticeAdmin"
          style={{ textDecoration: "none" }}
          element={<NewNoticeAdmin />}
        ></Route>
        <Route
          className="UserLogin"
          path="/UserLogin"
          style={{ textDecoration: "none" }}
          element={<UserLogin />}
        ></Route>
        <Route
          className="Detail"
          path="/Detail"
          style={{ textDecoration: "none" }}
          element={<Detail />}
        ></Route>
        <Route
          className="ResearchOutcomes"
          path="/ResearchOutcomes"
          style={{ textDecoration: "none" }}
          element={<ResearchOutcomes />}
        ></Route>
        <Route
          className="ResearchOutcomesAdmin"
          path="/ResearchOutcomesAdmin"
          style={{ textDecoration: "none" }}
          element={<ResearchOutcomesAdmin />}
        ></Route>
        {/* <Route
          className="PathSelection"
          path="/PathSelection"
          style={{ textDecoration: "none" }}
          element={<PathSelection />}
        ></Route> */}
      </Routes>
    </div>
  );
}

export default App;
