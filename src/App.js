import { Register } from "./pages/Register";
import { Login } from "./pages/Login";
import { Home } from "./pages/Home";
import React, { useState } from "react";
import "./style.scss";

function App() {
  const [login, isLogin] = useState(false);

  return <Home />;
}

export default App;
