/* eslint-disable jsx-a11y/anchor-is-valid */
import "./App.css";
import Alert from "./components/Alert";
// import AboutUs from "./components/AboutUs";
import Form from "./components/Form";
import Navbar from "./components/Navbar";
import React, { useState } from "react";
// import { BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });

    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const modeClick = () => {
    if (mode === "dark") {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
    } else {
      setMode("dark");
      document.body.style.backgroundColor = "#052450";
      showAlert("Dark mode has been enabled", "success");
    }
  };

  return (
    <>
      {/* <BrowserRouter> */}
        <Navbar
          title="Tiger"
          about="About Us"
          mode={mode}
          modeClick={modeClick}
        ></Navbar>

        <div className="container">
          {/* <Routes> */}
            {/* <Route path="/" element={ */}
            <Form
                showAlert={showAlert}
                heading="Likh de kch bhi Dost"
                btnText="Convert to UpperCase"
                btnText2="Convert to LowerCase"
                btnText3="Convert to Alternate Case"
                mode={mode}
              ></Form>
              {/* }> */}
            {/* </Route>
            <Route exact path="/about" element={<AboutUs></AboutUs>}>
            </Route>
          </Routes> */}
        </div>
        <Alert alert={alert}></Alert>
      {/* </BrowserRouter> */}
    </>
  );
}

export default App;
