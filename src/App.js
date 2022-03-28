import React from "react";
import Home from "./pages/home";
import Browse from "./pages/browse";
import Signup from "./pages/signup";
import Signin from "./pages/signin";
import { IsUserRedirect } from "./helpers/routes";
import { Route, Routes } from "react-router-dom";
import { useAuthListener } from "./hooks";

function App() {
  const user = useAuthListener();
  console.log(user)
  return (
    <div className="App">
      <Routes>
        <Route user={user} loggedInPath={"/browse"} path={"/signin"}>
          <Route path="/signin" element={<Signin />} />
        </Route>
        <Route user={user} loggedInPath={"/browse"} path={"/signup"}>
          <Route path="/signup" element={<Signup />} />
        </Route>
        <Route path="/" element={<Home />} />
        <Route path="/browse" element={<Browse />} />
      </Routes>
    </div>
  );
}

export default App;
