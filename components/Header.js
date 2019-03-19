import React from 'react';
import { css } from 'emotion';
import Router from 'next/router';

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
      transition: background-color 200ms ease-out, opacity 200ms ease-out, box-shadow 200ms ease-out;
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
    <div>
      <svg
        className={css`margin-right: 40px;`}
        width="86px"
        height="21px"
        viewBox="0 0 86 21"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" opacity="0.300000012">
          <g id="social" fill="#000000">
            <path
              onClick={() => Router.push('https://www.linkedin.com/company/airbeam-60ghz/')}
              d="M65.0884952,20.7388048 L65.0884952,6.88627115 L69.4507358,6.88627115 L69.4507358,20.7388048 L65.0884952,20.7388048 Z M67.2704318,4.99300822 C65.8704987,4.99300822 64.741573,3.87458083 64.741573,2.49569775 C64.741573,1.11762103 65.8704987,3.55271368e-15 67.2704318,3.55271368e-15 C68.6646509,3.55271368e-15 69.7968417,1.11762103 69.7968417,2.49569775 C69.7968417,3.87458083 68.6646509,4.99300822 67.2704318,4.99300822 Z M85.7748539,20.7391273 L81.4175111,20.7391273 L81.4175111,14.0027593 C81.4175111,12.3956751 81.388941,10.3289632 79.1523132,10.3289632 C76.8838501,10.3289632 76.5385605,12.0803866 76.5385605,13.8874492 L76.5385605,20.7391273 L72.1852991,20.7391273 L72.1852991,6.88578733 L76.3630587,6.88578733 L76.3630587,8.77993725 L76.4226477,8.77993725 C77.0038444,7.69053898 78.4266335,6.5422761 80.5473486,6.5422761 C84.9593827,6.5422761 85.7748539,9.41051419 85.7748539,13.1415622 L85.7748539,20.7391273 Z"
              id="linkedin"
            />
            <path
              d="M50.537642,5.00382819 C49.7088904,5.36641692 48.8178838,5.61213131 47.8846227,5.7214923 C48.8370392,5.15715619 49.5697322,4.2627892 49.915374,3.19756306 C49.0243675,3.72071487 48.033922,4.10111303 46.98263,4.30425177 C46.1397935,3.4176764 44.9397657,2.86363636 43.6104391,2.86363636 C41.0588306,2.86363636 38.9923038,4.90587636 38.9923038,7.42590979 C38.9923038,7.78404617 39.032023,8.13188647 39.1094896,8.46553489 C35.2716541,8.27658804 31.8681949,6.45919202 29.590959,3.69956618 C29.1926399,4.37326328 28.9644656,5.15715619 28.9644656,5.99392083 C28.9644656,7.57673335 29.8273025,8.97282519 31.0673313,9.79150213 C30.3095672,9.76701418 29.0213683,9.56304062 29.0213683,9.22048749 L29.0213683,9.27781157 C29.0213683,11.4884063 30.5659112,13.333073 32.6794813,13.7518727 C32.2921484,13.8562248 31.8605891,13.911601 31.4386075,13.911601 C31.1416992,13.911601 30.8402837,13.8826607 30.5571786,13.8283976 C31.1447978,15.6413412 32.8442739,16.9620213 34.8665743,16.9981967 C33.2856926,18.2228728 31.2912801,18.9522244 29.1255961,18.9522244 C28.7534748,18.9522244 28.3841704,18.9307974 28.0224719,18.887387 C30.066463,20.1833008 32.4944066,20.9393665 35.1023544,20.9393665 C43.5997346,20.9393665 48.2449128,13.9847866 48.2449128,7.95629669 C48.2449128,7.75761031 48.240969,7.56087183 48.2319547,7.36524644 C49.1350743,6.72215929 49.9165008,5.91823078 50.537642,5.00382819"
              id="twitter"
            />
            <path
              d="M10.62771,4.19275054 L8.70261592,4.19275054 C7.19188918,4.19275054 6.89840405,4.87809708 6.89840405,5.88004392 L6.89840405,8.09338088 L10.5011144,8.09338088 L10.0326208,11.5607989 L6.89840405,11.5607989 L6.89840405,20.4545455 L3.14233566,20.4545455 L3.14233566,11.5607989 L0,11.5607989 L0,8.09338088 L3.14233566,8.09338088 L3.14233566,5.53937626 C3.14233566,2.57049632 5.04427566,0.954545455 7.82065702,0.954545455 C9.15336818,0.954545455 10.2954343,1.04995532 10.6292135,1.09264622 L10.6292135,4.19275054 L10.62771,4.19275054 Z"
              id="f"
            />
          </g>
        </g>
      </svg>
    </div>
  </header>
);

export default Header;
