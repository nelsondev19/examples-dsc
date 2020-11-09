import React, { Fragment } from "react";
import styled from "styled-components";

function NavegacionTop() {
  return (
    <Fragment>
      <StyleNavegacionTop>
        {/* NAVBAR TOP MOBILE */}
        <div className="top-navbar-mobile">
          <div className="grid-nav-mobile">
            <div>
              <img
                style={{ marginLeft: "20px", marginTop: "5px" }}
                src="https://i.ibb.co/jTjcwvN/headphones-alt-solid.png"
                alt=""
                height="24px"
                width="24px"
              />
            </div>
            <div className="flex-icons--nav-mobile">
              <span
                className="material-icons"
                style={{ fontSize: "24px", color: "#ffffff" }}
              >
                search
              </span>
            </div>
          </div>
        </div>
      </StyleNavegacionTop>
    </Fragment>
  );
}

export default NavegacionTop;

const StyleNavegacionTop = styled.div`
  /*NAVBAR TOP*/

  /* MOBILE */
  @media (max-width: 1025px) {
    .top-navbar {
      display: none;
    }
    .top-navbar-mobile {
      width: 100%;
      padding: 10px;
      background-color: #000000;
    }
    .grid-nav-mobile {
      display: grid;
      grid-template-columns: auto auto;
    }
    .flex-icons--nav-mobile {
      display: flex;
      justify-content: flex-end;
      align-items: flex-end;
    }
  }
  /* WE HIDE THE NAVBAR MOBILE IN DESKTOP */
  @media (min-width: 1025px) {
    .top-navbar-mobile {
      display: none;
    }
  }
`;
