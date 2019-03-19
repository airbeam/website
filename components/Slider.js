import React, { Component } from 'react';
import Slider from 'react-slick';
import { css } from 'emotion';

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      className      : css``,
      dots           : false,
      infinite       : true,
      slidesToShow   : 1,
      slidesToScroll : 1,
      adaptiveHeight : true,
      autoplay       : true
    };
    return (
      <div className={css`width: 100%;`}>
        <Slider {...settings}>
          <div className={css`position: relative;`}>
            <img
              className={css`
                width: 100%;
                @media (max-width: 1000px) {
                  height: 400px;
                }
                @media (max-width: 420px) {
                  height: 200px;
                  width: 500px;
                }
              `}
              src="/static/carousel_a.png"
              alt="carousel_a"
            />
            <TextBlock />
          </div>
          <div className={css`position: relative;`}>
            <img
              className={css`
                width: 100%;
                @media (max-width: 1000px) {
                  height: 400px;
                }
                @media (max-width: 420px) {
                  height: 200px;
                  width: 500px;
                }
              `}
              src="/static/carousel_b.png"
              alt="carousel_a"
            />
            <TextBlock />
          </div>
          <div className={css`position: relative;`}>
            <img
              className={css`
                width: 100%;
                @media (max-width: 1000px) {
                  height: 400px;
                }
                @media (max-width: 420px) {
                  height: 200px;
                  width: 500px;
                }
              `}
              src="/static/carousel_c.png"
              alt="carousel_a"
            />
            <TextBlock />
          </div>
        </Slider>
      </div>
    );
  }
}

const TextBlock = () => (
  <h2
    className={css`
      position: absolute;
      top: 20px;
      left: 20px;
      background-color: transparent;
      color: white;
      padding-left: 20px;
      padding-right: 20px;
      font-family: Helvetica;
      font-size: 40px;
      color: #ffffff;
      letter-spacing: 0;
      line-height: 50px;
      @media (max-width: 420px) {
        font-size: 18px;
   
      }
    `}
  >
    Airbeam’s 60 GHz WiHD and WiGig <br />
    products offers real-time, low latency, <br />
    wireless communication
  </h2>
);
