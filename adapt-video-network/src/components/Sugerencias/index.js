import React, { Fragment } from "react";
import styled from "styled-components";

function Sugerencias() {
  return (
    <Fragment>
      <StyleSugerencias>
        {/* CONTAINER OF CARDS DRAGS HORIZONTAL */}
        <div className="container-cards">
          <div>
            <b>Sugerencias para ti</b>
            <div className="cards scroll-container">
              <div className="card">
                <div>
                  <img
                    src="https://i1.sndcdn.com/artworks-000090157335-29upvk-t500x500.jpg"
                    alt=""
                    className="img-card-drag"
                  />
                </div>
                <br />
                <p>
                  <strong>King Flyp</strong>
                </p>
              </div>
              <div className="card">
                <div>
                  <img
                    src="https://www.pdvg.it/wp-content/uploads/2020/07/POST-HYPERX-HXCKED-DATED724.jpg"
                    alt=""
                    className="img-card-drag"
                  />
                </div>
                <br />
                <p>
                  <strong>Post Malone</strong>
                </p>
              </div>
              <div className="card">
                <div>
                  <img
                    src="https://img.discogs.com/LH6jUajJwjZSbALaKSL3RNEb6vE=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-11092513-1515537014-7038.jpeg.jpg"
                    alt=""
                    className="img-card-drag"
                  />
                </div>
                <br />
                <p>
                  <strong>Bebe Rexha</strong>
                </p>
              </div>
              <div className="card">
                <div>
                  <img
                    src="https://i.pinimg.com/originals/dc/bf/18/dcbf18b7d7ce59389e97a3117df68a88.jpg"
                    alt=""
                    className="img-card-drag"
                  />
                </div>
                <br />
                <p>
                  <strong>Rihana</strong>
                </p>
              </div>
              <div className="card">
                <div>
                  <img
                    src="https://www.rockandpop.cl/wp-content/uploads/2019/11/weeknd-400x360.jpg"
                    alt=""
                    className="img-card-drag"
                  />
                </div>
                <br />
                <p>
                  <strong>The Weeknd</strong>
                </p>
              </div>
              <div className="card">
                <div>
                  <img
                    src="https://los40es00.epimg.net/los40/imagenes/2018/07/13/musica/1531482325_607205_1531483331_noticia_normal.jpg"
                    alt=""
                    className="img-card-drag"
                  />
                </div>
                <br />
                <p>
                  <strong>Drake</strong>
                </p>
              </div>
              <div className="card">
                <div>
                  <img
                    src="https://www.edjes.net/wp-content/uploads/2019/08/67240119_2229205990531851_1618911467514363904_o-756x756.jpg"
                    alt=""
                    className="img-card-drag"
                  />
                </div>
                <br />
                <p>
                  <strong>Bad Bunny</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </StyleSugerencias>
    </Fragment>
  );
}

export default Sugerencias;

const StyleSugerencias = styled.div`
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
  /* CARDS DRAGS */
  .cards {
    display: flex;
    -webkit-overflow-scrolling: touch;
    background-color: transparent;
    max-width: 100%;
    padding: 1em;
    overflow-y: hidden;
  }
  .card {
    scroll-snap-align: start;
    scroll-snap-stop: always;
    background-color: transparent;
    margin-right: 1em;
    padding: 10px;
    flex: 1 0 10em;
    border: 0px solid #000000;
  }
  .img-card-drag {
    height: 160px;
    width: 160px;
    border-radius: 10px;
  }

  /* SCROLL CONTAINER */
  .scroll-container {
    overflow: scroll;
    height: 250px;
    width: auto;
    overflow-y: hidden;
    transition: 1s;
    }
  .scroll-container::-webkit-scrollbar {
    width: 5px;
  }
  /* Track */
  .scroll-container::-webkit-scrollbar-track {
    background: #191a1f;
  }
  /* Handle */
  .scroll-container::-webkit-scrollbar-thumb {
    background: #191a1f;
  }
  /* Handle on hover */
  .scroll-container::-webkit-scrollbar-thumb:hover {
    background: #3c50fa;
    border-radius: 5px;
  }
`;
