import React, { useEffect, useState } from "react";
import Component from "./components/Component";
import "./index.css";
import Preloader from "./components/Preloader";
import UserProfile from "./hooks/userdata";
const App = () => {
  const { loading } = UserProfile();

  return (
    <>
      {loading && <Preloader />}
      <Component />
    </>
  );
};

export default App;
