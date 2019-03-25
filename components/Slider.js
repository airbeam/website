import React, { Component } from "react";
import Slider from "react-slick";
import { css } from "emotion";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      className: css``,
      dots: false,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      adaptiveHeight: true,
      autoplay: true,
      autoplaySpeed: 4000

    };
    return (
      <div
        className={css`
          width: 100%;
        `}
      >
        <Slider {...settings}>
          <div
            className={css`
              position: relative;
            `}
          >
            <img
              className={css`
                width: 100%;
                @media (max-width: 1000px) {
                  height: 500px;
                }
                @media (max-width: 420px) {
                  height: 200px;
                  width: 500px;
                }
              `}
              src="/static/carousel_a.png"
              alt="carousel_a"
            />
            <TextBlock
              text1="Airbeam is shaping the future"
              text2="of 5G wireless backhaul"
            />
          </div>
          <div
            className={css`
              position: relative;
            `}
          >
            <img
              className={css`
                width: 100%;
                @media (max-width: 1000px) {
                  height: 500px;
                }
                @media (max-width: 420px) {
                  height: 200px;
                  width: 500px;
                }
              `}
              src="/static/carousel_b.png"
              alt="carousel_a"
            />
            <TextBlock
              text1="Airbeam links IoT to the"
              text2="5G networks of the future"
            />
          </div>
          <div
            className={css`
              position: relative;
            `}
          >
            <img
              className={css`
                width: 100%;
                @media (max-width: 1000px) {
                  height: 500px;
                }
                @media (max-width: 420px) {
                  height: 200px;
                  width: 500px;
                }
              `}
              src="/static/carousel_c.png"
              alt="carousel_a"
            />
            <TextBlock 
            text1="Shaping the future of 60 GHz"
            text2="wireless communication"
            />
          </div>
        </Slider>
      </div>
    );
  }
}

const TextBlock = ({ text1, text2 }) => (
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
    {text1}
    <br />
    {text2}
  </h2>
);
