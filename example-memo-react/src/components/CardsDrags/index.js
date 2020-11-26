import React, { Fragment } from "react";
import styled from "styled-components";

function CardsDrags() {
  const images = [
    {
      image:
        "https://cdn.pixabay.com/photo/2019/08/22/14/14/sunset-4423621_960_720.jpg",
      text: "Happiness & Tears",
    },
    {
      image:
        "https://cdn.pixabay.com/photo/2015/04/20/13/09/beach-731137_960_720.jpg",
      text: "Sun and beach",
    },
    {
      image:
        "https://cdn.pixabay.com/photo/2019/08/01/11/57/gaztelugatxe-4377342_960_720.jpg",
      text: "Gaztelugatxe Bizkaia",
    },
    {
      image:
        "https://cdn.pixabay.com/photo/2020/08/09/11/30/bar-5475279_960_720.jpg",
      text: "local businesses",
    },
    {
      image:
        "https://cdn.pixabay.com/photo/2020/04/01/06/51/waterfall-4990163_960_720.jpg",
      text: "Cascade",
    },
  ];
  return (
    <Fragment>
      <StyleCardsDrags>
        {/* CONTAINER OF CARDS DRAGS HORIZONTAL */}
        <div className="container-cards">
          <div>
            <div className="cards scroll-container">
              {images.map((image) => {
                return (
                  <div className="card">
                    <StyleBgImage src={image.image}>
                      <div className="bg-image">
                        <div className="banner-imagen">
                          <div className="box-mt-txt">
                            <p>
                              <strong>{image.text}</strong>
                            </p>
                          </div>
                        </div>
                      </div>
                    </StyleBgImage>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </StyleCardsDrags>
    </Fragment>
  );
}

export default CardsDrags;

const StyleCardsDrags = styled.div`
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
    background: transparent;
  }
  /* Handle */
  .scroll-container::-webkit-scrollbar-thumb {
    background: transparent;
  }
  /* Handle on hover */
  .scroll-container::-webkit-scrollbar-thumb:hover {
    background: #dadce0;
    border-radius: 5px;
  }
`;

const StyleBgImage = styled.div`
  .bg-image {
    background-image: url(${(props) => props.src}); /* The image used */
    background-position: center; /* Center the image */
    background-repeat: no-repeat; /* Do not repeat the image */
    background-size: cover; /* Resize the background image to cover the entire container */
    height: 200px;
    width: 140px;
    border-radius: 12px;
  }
  .banner-imagen {
    position: relative;
    width: 100%;
    height: 200px;
    background: transparent;
    font-size: 14px;
    transition: 0.3s;
    color: transparent;
    padding: 5px;
    border-radius: 12px;
    text-align: center;
  }
  .banner-imagen:hover {
    color: white;
    transition: 0.3s;
    background: rgba(0, 0, 0, 0.5);
  }

  .box-mt-txt {
    margin-top: 55%;
  }
`;
