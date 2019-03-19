import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';

import Header from './Header';
import Footer from './Footer';
import { css } from 'emotion';
import Slide from './Slider';
import MobileIcon from './MobileIcon';
import MainCard from './MainCard';
import ContactCard from './ContactCard';
import { Global, jsx } from '@emotion/core';

import './main.css';

function Home({ style }) {
  return (
    <div>
      <Header />
      <Slide />
      <div
        className={css`
          display: flex;
          margin-left: 40px;
          margin-top: 20px;
        `}
      >
        <MobileIcon />

        <Typography
          className={css`
            margin-left: 30px;
            font-family: "CircularAirPro-Book", sans-serif, helvetica;
          `}
          variant="h5"
          gutterBottom
        >
          Customer’s of Lattice <br />
          Semiconductor
        </Typography>
      </div>

      <Divider />

      <div
        className={css`
          display: flex;
          margin-top: 20px;
          margin-bottom: 200px;
          flex-wrap: wrap;
        `}
      >
        <MainCard />
        <ContactCard />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
