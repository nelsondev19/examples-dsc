import { Fragment } from "react";
import styled from "styled-components";
import Navigation from "./components/Navigation";
import Home from "./views/Home";

function App() {
  return (
    <Fragment>
      <StyleApp>
        <div className="box-shawdow">
          <Home />
          <Navigation />
        </div>
      </StyleApp>
    </Fragment>
  );
}

export default App;

const StyleApp = styled.div`
  .box-shawdow {
    min-height: 100vh;
    height: 100%;
    background-color: #ffffff;
    -webkit-box-shadow: 0px 3px 5px -1px rgba(204, 174, 204, 1);
    -moz-box-shadow: 0px 3px 5px -1px rgba(204, 174, 204, 1);
    box-shadow: 0px 3px 5px -1px rgba(204, 174, 204, 1);
    width: 100%;
    max-width: 600px;
    margin: auto;
  }

  /*INPUT SEARCH*/

  .search-wrapper {
    border-radius: 4px;
    background-color: #fff;
    padding-right: 12px;
    height: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 2px 6px 0 rgba(136, 148, 171, 0.2),
      0 24px 20px -24px rgba(71, 82, 107, 0.1);
    overflow: hidden;
  }

  .center {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .search-input {
    border: none;
    outline: none;
    height: 100%;
    padding: 0 12px;
    font-size: 16px;
    width: 500px;
  }
`;
