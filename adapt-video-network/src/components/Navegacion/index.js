import React, { Fragment } from "react";
import styled from "styled-components";

function Navegacion() {
  return (
    <Fragment>
      <StyleNavegacion>
        {/* SIDEBAR DESKTOP */}
        <div className="wrapper-left">
          <div className="sidebar-left">
            <br />
            <div
              className="grid-sidebar bg-active"
              style={{ marginTop: "12px" }}
            >
              <div className="icon-sidebar-align">
                <span
                  className="material-icons"
                  style={{ fontSize: "24px", color: "#ffffff" }}
                >
                  home
                </span>
              </div>
              <div>
                <p style={{ marginTop: "4px" }}>Explore</p>
              </div>
            </div>
            <div className="grid-sidebar">
              <div className="icon-sidebar-align">
                <span
                  className="material-icons"
                  style={{ fontSize: "24px", color: "#909090" }}
                >
                  library_music
                </span>
              </div>
              <div>
                <p style={{ marginTop: "4px" }}>library music</p>
              </div>
            </div>
            <div className="grid-sidebar">
              <div className="icon-sidebar-align">
                <span
                  className="material-icons"
                  style={{ fontSize: "24px", color: "#909090" }}
                >
                  insert_chart
                </span>
              </div>
              <div>
                <p style={{ marginTop: "4px" }}>Top charts</p>
              </div>
            </div>
            <br />
            <br />
            <br />
            <div className="grid-sidebar">
              <div className="icon-sidebar-align">
                <span
                  className="material-icons"
                  style={{ fontSize: "24px", color: "#909090" }}
                >
                  favorite
                </span>
              </div>
              <div>
                <p style={{ marginTop: "4px" }}>Favorite</p>
              </div>
            </div>
            <div className="grid-sidebar">
              <div className="icon-sidebar-align">
                <span
                  className="material-icons"
                  style={{ fontSize: "24px", color: "#909090" }}
                >
                  album
                </span>
              </div>
              <div>
                <p style={{ marginTop: "4px" }}>Albums</p>
              </div>
            </div>
            <div className="grid-sidebar">
              <div className="icon-sidebar-align">
                <span
                  className="material-icons"
                  style={{ fontSize: "24px", color: "#909090" }}
                >
                  playlist_play
                </span>
              </div>
              <div>
                <p style={{ marginTop: "4px" }}>Play list</p>
              </div>
            </div>
          </div>
        </div>

        {/* NAVBAR FOOTER */}
        <div className="navbar-zoom fixed-bottom grid-navigation">
          <div>
            <div className="img-center">
              <p align="center">
                <span
                  className="material-icons"
                  style={{ fontSize: "24px", color: "#3C50FA" }}
                >
                  home
                </span>
              </p>
            </div>
            <p className="title-navegacion-active">Principal</p>
          </div>
          <div>
            <div className="img-center">
              <p align="center">
                <span
                  className="material-icons"
                  style={{ fontSize: "24px", color: "#909090" }}
                >
                  library_music
                </span>
              </p>
            </div>
            <p className="title-navegacion">Library music</p>
          </div>
          <div>
            <div className="img-center">
              <p align="center">
                <span
                  className="material-icons"
                  style={{ fontSize: "24px", color: "#909090" }}
                >
                  favorite
                </span>
              </p>
            </div>
            <p className="title-navegacion">Favorite</p>
          </div>
          <div>
            <div className="img-center">
              <p align="center">
                <span
                  className="material-icons"
                  style={{ fontSize: "24px", color: "#909090" }}
                >
                  playlist_play
                </span>
              </p>
            </div>
            <p className="title-navegacion">Play list</p>
          </div>
        </div>
      </StyleNavegacion>
    </Fragment>
  );
}

export default Navegacion;

const StyleNavegacion = styled.div`
  .wrapper-left {
    display: flex;
    position: relative;
  }
  .wrapper-left .sidebar-left {
    position: fixed;
    width: 240px;
    height: 100%;
    background-color: #191a1f;
    border-right: 1px solid #373e48;
  }
  .grid-sidebar {
    display: grid;
    grid-template-columns: 30% 70%;
    margin-bottom: 5px;
    padding-top: 7px;
    padding-bottom: 7px;
    margin-left: 20px;
    margin-right: 20px;
    border-radius: 10px;
  }
  .icon-sidebar-align {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .bg-active {
    background-color: #3c50fa;
    font-weight: bold;
  }

  /* NAVBAR FOOTER */

  .navbar-zoom {
    background-color: #000000;
    font-size: 12px;
  }
  .navbar-zoom {
    padding-right: 15px;
    padding-left: 15px;
    padding-top: 10px;
    padding-bottom: 10px;
  }
  .fixed-bottom {
    position: fixed;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1030;
  }

  .grid-navigation {
    display: grid;
    grid-template-columns: 25% 25% 25% 25%;
  }
  .title-navegacion-active {
    display: block;
    text-align: center;
    color: #3c50fa;
  }
  .title-navegacion {
    display: block;
    text-align: center;
  }

  @media (max-width: 1025px) {
    .wrapper-left {
      display: none;
    }
    .frase {
      display: none;
    }
  }

  @media (min-width: 1025px) {
    .navbar-zoom {
      display: none;
    }
  }

  /* MOBILE */
  @media (max-width: 1025px) {
    .container-cards {
      margin-left: 10px;
      margin-right: 10px;
      margin-top: 50px;
    }
  }
  /* DESKTOP */
  @media (min-width: 1025px) {
    .container-cards {
      margin-left: 260px;
      margin-top: 50px;
    }
  }
`;
