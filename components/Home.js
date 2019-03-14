import Header from "./Header";
import Footer from "./Footer";
import { css } from "emotion";
function Home() {
  return (
    <div>
      <Header />

      <div
        className={css`
          margin-top: 90px;
          display: flex;
          justify-content: center;
          align-items: center;
        `}
      >
        <h3>
          This site is under construction, email inquiries to: 

          {'  '}<a href="mailto:sales@airbeamtech.com">sales@airbeamtech.com</a>
        </h3>
      </div>

      <Footer />
    </div>
  );
}

export default Home;
