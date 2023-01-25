import React from 'react';
import SwiperCore, { Autoplay, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import audio from '../assets/examples/audio_visualizer.jpg';
import monolith from '../assets/examples/monolith.jpeg';
import polySynth from '../assets/examples/polysynth.jpeg';
import spider from '../assets/examples/spider.jpg';
import tic from '../assets/examples/tic-tac-toe.jpg';
import aiee from '../assets/examples/aiee.jpg';

import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


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
      border-radius: 2rem;
      max-height: 80%;
      max-width: 100%;
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
  return (
    <HomeContainer id="home" className={opaque ? 'opaque' : ''}>
      <h1>Development Boards for all your needs</h1>
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        spaceBetween={100}
        loop
        centeredSlides
        slideToClickedSlide
        navigation
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          type: 'bullets',
        }}
      >
        <SwiperSlide>
          <img src={monolith} alt="monolith" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={audio} alt="audio visualizer" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={polySynth} alt="polysynth" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={spider} alt="spider robot" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={tic} alt="tic tact toe game" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={aiee} alt="video game emulator" />
        </SwiperSlide>
      </Swiper>
    </HomeContainer>
  );
}

Home.propTypes = {
  opaque: PropTypes.bool.isRequired,
};

export default Home;
