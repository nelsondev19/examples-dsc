import React, { Fragment } from "react";
import styled from "styled-components";
import Image from "./Image";

function Home() {
  const images = [
    "https://cdn.pixabay.com/photo/2019/09/06/00/32/landscape-4455224__340.jpg",
    "https://cdn.pixabay.com/photo/2020/10/24/06/04/stream-5680609__340.jpg",
    "https://cdn.pixabay.com/photo/2020/10/01/17/11/temple-5619197__340.jpg",
    "https://cdn.pixabay.com/photo/2020/10/30/17/42/paint-5699263__340.jpg",
    "https://cdn.pixabay.com/photo/2020/11/02/15/39/road-5707070__340.jpg",
    "https://cdn.pixabay.com/photo/2020/07/22/15/04/river-5429113__340.jpg",
    "https://cdn.pixabay.com/photo/2015/02/15/03/04/japanese-umbrellas-636870__340.jpg",
    "https://cdn.pixabay.com/photo/2019/09/06/00/32/landscape-4455224__340.jpg",
    "https://cdn.pixabay.com/photo/2020/09/06/20/21/cat-5550033__340.jpg"
  ];
  return (
    <Fragment>
      <StyleHome>
        <div className="container-cards">
          <div className="grid-cards">
            {images.map((image) => {
              return (
                <div className="card-youtube">
                  <div>
                    <Image src={image} />
                  </div>
                  <div className="grid-body-card">
                    <div>
                      <img
                        src="https://miro.medium.com/fit/c/48/48/1*dzjBE-so9O03P4ns3a4qQw.png"
                        alt=""
                        className="img-avatar-card"
                      />
                    </div>
                    <div>
                      <p className="title-card">
                        Como obtener ficheros por extension con Python 3
                      </p>
                      <p className="author-card">Nelsonher</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </StyleHome>
    </Fragment>
  );
}

export default Home;

const StyleHome = styled.div`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
  }
  body {
    font-family: "Roboto", sans-serif;
    background-color: #ffffff;
    font-size: 14px;
    color: rgb(0, 0, 0);
  }

  /*CARDS*/
  .grid-body-card {
    display: grid;
    grid-template-columns: 20% 80%;
    margin-top: 10px;
  }
  .title-card {
    font-size: 15px;
  }
  .author-card {
    margin-top: 5px;
    color: #aaaaaa;
  }
  .img-avatar-card {
    height: 36px;
    width: 36px;
    border-radius: 50px;
    margin-left: 5px;
    margin-right: 10px;
  }

  /* MOBILE */
  @media (max-width: 1025px) {
    .container-cards {
      margin-left: 10px;
      margin-right: 10px;
      margin-top: 50px;
    }
    .grid-cards {
      display: grid;
      grid-template-columns: 100%;
    }
    .card-youtube {
      width: 100%;
      height: 200px;
      background-color: transparent;
      margin-bottom: 50px;
    }
    .img-card {
      height: 170px;
      width: 100%;
    }
  }

  /* DESKTOP */
  @media (min-width: 720px) {
    .container-cards {
      margin-left: 5%;
      margin-top: 50px;
    }
    .grid-cards {
      display: grid;
      grid-template-columns: 33.33% 33.33% 33.33%;
    }
    .card-youtube {
      width: 250px;
      height: auto;
      background-color: transparent;
      -webkit-box-shadow: 0px 3px 5px -1px rgba(204, 174, 204, 1);
      -moz-box-shadow: 0px 3px 5px -1px rgba(204, 174, 204, 1);
      box-shadow: 0px 3px 5px -1px rgba(204, 174, 204, 1);
      padding-bottom: 4px;
      margin-bottom: 20px;
    }
    .img-card {
      height: 140px;
      width: 250px;
    }
  }
  /* DESKTOP */
  @media (min-width: 1025px) {
    .container-cards {
      margin-left: 5%;
      margin-top: 50px;
    }
    .grid-cards {
      display: grid;
      grid-template-columns: 25% 25% 25% 25%;
    }
    .card-youtube {
      width: 250px;
      height: auto;
      background-color: transparent;
      -webkit-box-shadow: 0px 3px 5px -1px rgba(204, 174, 204, 1);
      -moz-box-shadow: 0px 3px 5px -1px rgba(204, 174, 204, 1);
      box-shadow: 0px 3px 5px -1px rgba(204, 174, 204, 1);
      padding-bottom: 4px;
    }
    .img-card {
      height: 140px;
      width: 250px;
    }
  }
`;
