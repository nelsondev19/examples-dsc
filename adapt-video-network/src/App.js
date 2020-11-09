import { Fragment, useState, useEffect } from "react";
import Music from "./components/Music";
import Navegacion from "./components/Navegacion";
import NavegacionTop from "./components/Navegacion/NavegacionTop";
import Sugerencias from "./components/Sugerencias";

function App() {
  const [showHighInternet, setshowHighInternet] = useState(false);
  useEffect(() => {
    if (navigator.connection && !!navigator.connection.effectiveType) {
      console.log(navigator.connection.effectiveType);
      if (navigator.connection.effectiveType === "4g") {
        setshowHighInternet(true);
      }
    }
  }, []);
  return (
    <Fragment>
      <NavegacionTop />
      <Navegacion />
      {showHighInternet && <Sugerencias />}
      <Music />
    </Fragment>
  );
}

export default App;
