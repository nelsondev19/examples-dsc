import React, { Fragment, lazy, Suspense, useEffect, useState } from "react";
import Cards from "../../components/Cards";
import SearchInput from "./SearchInput";

const CardsDrags = lazy(() => import("../../components/CardsDrags"));

function Home() {
  const [showComponent, setshowComponent] = useState(false);
  useEffect(() => {
    if (navigator.connection && !!navigator.connection.effectiveType) {
      console.log(navigator.connection.effectiveType);
      if (navigator.connection.effectiveType === "4g") {
        setshowComponent(true);
      }
    }
  }, []);

  return (
    <Fragment>
      <div className="center">
        <SearchInput />
      </div>
      <Suspense
        fallback={<p align="center">Gracias por ver esta charla :))</p>}
      >
        {showComponent && <CardsDrags />}
      </Suspense>
      <Cards />
      <br />
      <br />
      <br />
      <br />
      <br />
    </Fragment>
  );
}

export default Home;