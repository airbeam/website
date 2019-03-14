import Header from "./Header";
import Footer from "./Footer";
import { css } from "emotion";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
function Home({ style }) {
  return (
    <div>
      <Header />
      <CarouselProvider
      isPlaying
        naturalSlideWidth={10}
        naturalSlideHeight={125}
        totalSlides={3}
      >
        <Slider>
          <Slide index={0}>
            <img src="/static/carousel_a.png" alt="my image" />
          </Slide>
          <Slide index={1}>
            <img src="/static/carousel_b.png" alt="my image" />
          </Slide>
          <Slide index={2}>
            <img src="/static/carousel_c.png" alt="my image" />
          </Slide>
        </Slider>
        <ButtonBack>Back</ButtonBack>
        <ButtonNext>Next</ButtonNext>
      </CarouselProvider>

      <Footer />
    </div>
  );
}

export default Home;
