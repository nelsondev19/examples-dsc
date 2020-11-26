import React, { Fragment, useState } from "react";
import styled from "styled-components";
import Cards from "../../components/Cards";
import CardsDrags from "../../components/CardsDrags";

function Home() {
  const [SearchState, setSearchState] = useState("");
  const changeSearch = (e) => {
    setSearchState(e.target.value);
  };
  return (
    <Fragment>
      <div className="center">
        <div className="search-wrapper" id="searchLine">
          <input
            className="search-input"
            type="text"
            placeholder="Search"
            onChange={(e) => changeSearch(e)}
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            className="feather feather-search"
            viewBox="0 0 24 24"
          >
            <defs />
            <circle cx={11} cy={11} r={8} />
            <path d="M21 21l-4.35-4.35" />
          </svg>
        </div>
      </div>
      <CardsDrags />
      <Cards />
      <br/><br/>
      <br/><br/><br/>
    </Fragment>
  );
}

export default Home;