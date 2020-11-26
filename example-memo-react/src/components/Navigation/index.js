import React, { Fragment } from "react";
import styled from "styled-components";

function Navigation() {
  return (
    <Fragment>
      <StyleNavigation>
        <div className="fixed-navbar grid-navigation">
          <div>
            <div className="img-center">
              <p align="center">
                <span
                  className="material-icons"
                  style={{ fontSize: "24px", color: "black" }}
                >
                  home
                </span>
              </p>
            </div>
          </div>
          <div>
            <div className="img-center">
              <p align="center">
                <span
                  className="material-icons"
                  style={{ fontSize: "24px", color: "#909090" }}
                >
                  location_on
                </span>
              </p>
            </div>
          </div>
          <div>
            <div className="img-center">
              <p align="center">
                <span
                  className="material-icons"
                  style={{ fontSize: "24px", color: "#909090" }}
                >
                  notifications
                </span>
              </p>
            </div>
          </div>
          <div>
            <div className="img-center">
              <p align="center">
                <span
                  className="material-icons"
                  style={{ fontSize: "24px", color: "#909090" }}
                >
                  person
                </span>
              </p>
            </div>
          </div>
        </div>
      </StyleNavigation>
    </Fragment>
  );
}

export default Navigation;

const StyleNavigation = styled.div`
  .fixed-navbar {
    position: fixed;
    bottom: 0;
    z-index: 1030;
    width: 100%;
    background: white;
    max-width: 600px;
    border-top: 0.5px solid #dadce0;
    padding: 5px;
  }

  .grid-navigation {
    display: grid;
    grid-template-columns: 25% 25% 25% 25%;
  }
`;
