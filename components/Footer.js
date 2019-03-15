import React from "react";
import { css } from "emotion";

const Footer = ({ style }) => (
  <footer
  className={css`
    position: relative;
    display: flex;
    flex-direction: column;
    padding: 10px 0;
    background-color: #f7f7f7;
    overflow: hidden;
  `}
>
  <div
    className={css`
      display: flex;
      width: 100%;
      margin: 0 auto;
      padding-left: 20px;
      padding-right: 20px;
      max-width: 1040px;
    `}
  >
    <section
      className={css`
        position: relative;
        z-index: 2;
        display: flex;
      `}
    >
      <a href="/" className={css`margin-bottom: 50px;`}>
        <img className={css`width: 234px;`} src="/static/footer_logo.svg" alt="AirBeam Logo" />
      </a>
      <div
        className={css`


          font-size: 12px;
        `}
      >
        <span
          className={css`
            flex-grow: 1;
            margin-right: 20px;
          `}
        >
          ©<span id="js-year" /> 2019 Airbeam Inc. All Rights Reserved
        </span>
      </div>
    </section>
  </div>
</footer>
);

export default Footer;
