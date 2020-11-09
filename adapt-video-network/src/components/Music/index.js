import React, { Fragment } from "react";
import styled from "styled-components";

function Music() {
  return (
    <Fragment>
      <StyleMusic>
        <div className="container-cards">
          <p>
            <strong>Popular</strong>
          </p>
          <div className="grid-popular-genero">
            <div>
              {/* BOX CARDS POPULAR */}
              <div className="grid-card-popular">
                <div>
                  <img
                    src="https://i1.wp.com/reggaetonytrap.com/wp-content/uploads/2020/08/InShot_20200804_094427412.jpg?resize=640%2C640&ssl=1"
                    alt=""
                    height="24px"
                    width="24 px"
                  />
                </div>
                <div className="mt-txt-card">
                  <p>1</p>
                </div>
                <div className="mt-txt-card">
                  <p>Love song</p>
                </div>
                <div className="mt-txt-card">
                  <p>3:24</p>
                </div>
                <div className="mt-txt-card">
                  <p>
                    <span
                      className="material-icons"
                      style={{ fontSize: "24px", color: "#909090" }}
                    >
                      more_horiz
                    </span>
                  </p>
                </div>
              </div>
              <div className="grid-card-popular">
                <div className="padding-img-popular">
                  <img
                    src="https://i1.wp.com/reggaetonytrap.com/wp-content/uploads/2020/08/InShot_20200804_094427412.jpg?resize=640%2C640&ssl=1"
                    alt=""
                    height="24px"
                    width="24px"
                  />
                </div>
                <div className="mt-txt-card">
                  <p>2</p>
                </div>
                <div className="mt-txt-card">
                  <p>Love song</p>
                </div>
                <div className="mt-txt-card">
                  <p>3:24</p>
                </div>
                <div className="mt-txt-card">
                  <p>
                    <span
                      className="material-icons"
                      style={{ fontSize: "24px", color: "#909090" }}
                    >
                      more_horiz
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div>
              {/* BOX OF GENEROS */}
              <div className="grid-generos">
                <div className="box-genero">
                  <p className="mt-genero">Cumbia</p>
                </div>
                <div className="box-genero">
                  <p className="mt-genero">Trap</p>
                </div>
                <div className="box-genero">
                  <p className="mt-genero">Bachata</p>
                </div>
                <div className="box-genero">
                  <p className="mt-genero">Electro House</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
      </StyleMusic>
    </Fragment>
  );
}

export default Music;

const StyleMusic = styled.div`
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

  /* CARDS POPULAR AND GENEROS */
  .grid-card-popular {
    display: grid;
    grid-template-columns: 10% 5% auto 14% 6%;
    background-color: #25262c;
    padding: 5px;
    cursor: pointer;
    transition: 0.5s;
    margin-bottom: 5px;
  }
  .grid-card-popular:hover {
    transition: 0.5s;
    background-color: #000000;
  }
  .mt-txt-card {
    margin-top: 5px;
  }

  .grid-generos {
    display: grid;
    grid-template-columns: 50% 50%;
  }
  .box-genero {
    width: 90%;
    height: 100px;
    background-color: #25262c;
    text-align: center;
    transition: 0.5s;
    margin-top: 5px;
    cursor: pointer;
  }

  .box-genero:hover {
    transition: 0.5s;
    background-color: #000000;
  }
  .mt-genero {
    margin-top: 20%;
  }

  /* MEDIA QUERIES OF BOX POPULAR AND OF TYPES OF MUSIC */
  /* DESKTOP */
  @media (min-width: 1024px) {
    .grid-popular-genero {
      display: grid;
      grid-template-columns: 50% 40%;
      grid-gap: 10px;
    }
  }

  /* MOBILE */
  @media (max-width: 1024px) {
    .grid-popular-genero {
      display: grid;
      grid-template-columns: 100%;
      grid-gap: 10px;
    }
  }
`;
