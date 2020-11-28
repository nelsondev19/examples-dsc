import React, { Fragment, useState } from "react";

function SearchInput() {
  const [SearchState, setSearchState] = useState("");

  const changeInput = (e) => {
    setSearchState(e.target.value);
  };
  return (
    <Fragment>
      <div className="search-wrapper" id="searchLine">
        <input
          className="search-input"
          type="text"
          placeholder="Search"
          onChange={(e) => changeInput(e)}
          value={SearchState}
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
    </Fragment>
  );
}

export default SearchInput;
