import React from "react";
import { css } from "emotion";

const Header = ({ style }) => (
  <header
    className={css`
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
      top: 0;
      right: auto;
      bottom: auto;
      left: 0;
      z-index: 900;
      display: flex;
      align-items: center;
      width: 100%;
      height: 110px;
      opacity: 100;
      transition: background-color 200ms ease-out, opacity 200ms ease-out,
        box-shadow 200ms ease-out;
    `}
  >
    <div
      className={css`
        display: flex;
        width: 100%;
        margin: 0 auto;
        padding-left: 30px;
        padding-right: 20px;
      `}
    >
      <div
        className={css`
          width: 234px;
          height: 49px;
        `}
      >
        <a
          href="/"
          className={css`
            margin-left: 5px;

            display: flex;
          `}
        >
          <img src="/static/logo.svg" alt="AirBeam Logo" />
        </a>
      </div>
    </div>
  </header>
);

export default Header;
