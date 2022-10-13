import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { Carousel } from '@mantine/carousel';
import Autoplay from 'embla-carousel-autoplay';
import styled from 'styled-components';
import audio from '../assets/examples/audio_visualizer.jpg';
import monolith from '../assets/examples/monolith.jpeg';
import polySynth from '../assets/examples/polysynth.jpeg';
import spider from '../assets/examples/spider.jpg';
import tic from '../assets/examples/tic-tac-toe.jpg';
import aiee from '../assets/examples/aiee.jpg';

const HomeContainer = styled.main`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 20px;
  align-items:  center;
  justify-items: center;
  gap: 20px; 

  h1{
    grid-column: 1 / 2;
    text-align: center;
    font-size: clamp(1.3rem, 3vw, 2.5rem);
    color: var(--dark-spring-bud);
  }


  div{
    grid-column: 2 / -1;

    img{
      width: 100%;
      border-radius: 10%;
    }
  }

  @media (max-width: 700px){
    grid-template-columns: 1fr;

    h1 {
      font-size 1.5rem;
    }
    div{
      grid-column 1 / 2;
    }
}
`;

function Home({ opaque }) {
  // carousel auto play
  const autoplay = useRef(Autoplay({ delay: 4000 }));
  return (
    <HomeContainer id="home" className={opaque ? 'opaque' : ''}>
      <h1>Development Boards for all your needs</h1>
      <Carousel
        sx={{ maxWidth: 600 }}
        align="center"
        mx="auto"
        height="100%"
        slideSize="95%"
        slideGap="md"
        controlsOffset="xl"
        plugins={[autoplay.current]}
        onMouseEnter={autoplay.current.stop}
        onMouseLeave={autoplay.current.reset}
        slidesToScroll="1"
        // withControls={false}
        loop
      >
        <Carousel.Slide>
          <img src={monolith} alt="monolith" />
        </Carousel.Slide>
        <Carousel.Slide>
          <img src={audio} alt="audio visualizer" />
        </Carousel.Slide>
        <Carousel.Slide>
          <img src={polySynth} alt="polysynth" />
        </Carousel.Slide>
        <Carousel.Slide>
          <img src={spider} alt="spider robot" />
        </Carousel.Slide>
        <Carousel.Slide>
          <img src={tic} alt="tic tact toe game" />
        </Carousel.Slide>
        <Carousel.Slide>
          <img src={aiee} alt="video game emulator" />
        </Carousel.Slide>
      </Carousel>
    </HomeContainer>
  );
}

Home.propTypes = {
  opaque: PropTypes.bool.isRequired,
};

export default Home;
