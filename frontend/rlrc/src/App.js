import React from "react";
import Layout from "../src/components/Layout";
import { Routes, Route } from "react-router-dom";
import AboutRLRC from "./pages/AboutRLRC";
import Research from "./pages/Research";
import NewNotice from "./pages/NewNotice";
import NewNoticeAdmin from "./pages/NewNoticeAdmin";
import ResearchField from "./pages/ResearchField";
import Detail from "./pages/Detail";
import ResearchOutcomes from "./pages/ResearchOutcomes";
import ResearchOutcomesAdmin from "./pages/ResearchOutcomesAdmin";
import PathSelection from "./pages/PathSelection";
import UserLogin from "./pages/UserLogin";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          style={{ textDecoration: "none" }}
          element={
            <Layout>
              <AboutRLRC />
            </Layout>
          }
        ></Route>
        <Route
          path="/AboutRLRC"
          style={{ textDecoration: "none" }}
          element={
            <Layout>
              <AboutRLRC />
            </Layout>
          }
        ></Route>
        <Route
          className="rearch"
          path="/Research"
          style={{ textDecoration: "none" }}
          element={
            <Layout>
              <Research />
            </Layout>
          }
        ></Route>
        <Route
          className="rearchField"
          path="/ResearchField"
          style={{ textDecoration: "none" }}
          element={<ResearchField />}
        ></Route>
        <Route
          className="newNotice"
          path="/NewNotice"
          style={{ textDecoration: "none" }}
          element={
            <Layout>
              <NewNotice />
            </Layout>
          }
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
        <Route
          className="PathSelection"
          path="/PathSelection"
          style={{ textDecoration: "none" }}
          element={<PathSelection />}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
