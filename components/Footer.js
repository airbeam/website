import React from 'react';
import { css } from 'emotion';
import Social from './Social'

const Footer = ({ style }) => (
  <footer
    className={css`
      position: relative;
      display: flex;
      flex-direction: column;
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
        align-items: center;
        justify-content: space-between;
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
          <img
            className={css`
              width: 234px;
              margin-top: 20px;
            `}
            src="/static/footer_logo.svg"
            alt="AirBeam Logo"
          />
        </a>
        
      </section>
      <div
        className={css`
        display: flex;
        margin-bottom: 20px;
        flex-direction: column;
      
        `}
      >
      <Social copy={true}/>
      </div>
     
    </div>
  
  </footer>
);

export default Footer;
