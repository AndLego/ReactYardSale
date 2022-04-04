import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "../containers/layout";
import Login from "../containers/login";
import RecoveryPass from "../containers/recoverypass";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import "../styles/responsive.scss";
import "../styles/global.scss";

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/recoverypass" element={<RecoveryPass />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
