import React, { useEffect, useState } from "react";
import axios from "axios";
import { useInfiniteScroll } from "../../hooks/useInfiniteScroll";
import Card from "./Card";

function Cards() {
  const [Loading, setLoading] = useState(false);
  const [data, setdata] = useState([]);
  const [pageNumber, setpageNumber] = useState(10);
  const [error, setError] = useState(false);

  const [element, setElement] = React.useState(null);

  const load = () => {
    setTimeout(() => {
      setpageNumber(pageNumber + 10);
    }, 300);
  };
  useInfiniteScroll({ element: element, fetch: load });

  useEffect(() => {
    setLoading(true);
    setError(false);
    let cancel;
    axios({
      method: "GET",
      url: "https://rickandmortyapi.com/api/character/",
      params: { page: pageNumber },
      cancelToken: new axios.CancelToken((c) => (cancel = c)),
    })
      .then((res) => {
        setdata((prevCharacters) => {
          return [
            ...new Set([...prevCharacters, ...res.data.results.map((b) => b)]),
          ];
        });
        setLoading(false);
      })
      .catch((e) => {
        if (axios.isCancel(e)) return;
        setError(true);
      });
    return () => cancel();
  }, [pageNumber]);

  return (
    <div className="App">
      <ul>
        {data.map((row) => (
          <Card row={row}/>
        ))}

        {Loading && <li>Cargando...</li>}

        {error && <li>{error}</li>}

        {!Loading && (
          <li ref={setElement} style={{ background: "transparent" }}>
            Cargando
          </li>
        )} 
      </ul>
    </div>
  );
}

export default Cards;
