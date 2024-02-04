'use client';
import React from 'react';
import Sessao from '../Sessao';
import Carousel from 'react-multi-carousel';
import { ResponsiveType } from 'react-multi-carousel/lib/types';
import 'react-multi-carousel/lib/styles.css';

const assistencias: { id: number; name: string; image: string }[] = [
  {
    id: 1,
    name: 'Schineider',
    image: '/brands/schineider.svg',
  },
  {
    id: 2,
    name: 'Buffalo',
    image: '/brands/buffalo.svg',
  },
  {
    id: 3,
    name: 'Toyama',
    image: '/brands/toyama.svg',
  },
  {
    id: 4,
    name: 'Tramontina',
    image: '/brands/tramontina.svg',
  },
];

const responsive: ResponsiveType = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Assistencias: React.FC = () => {
  return (
    <Sessao
      subtitle="Assistência"
      title="Nossas assistências técnicas"
      description="Oferecemos assistência técnica para as principais marcas do mercado."
    >
      <Carousel
        ssr
        deviceType={'desktop'}
        swipeable={true}
        draggable={false}
        showDots={false}
        arrows={false}
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={0}
        keyBoardControl={true}
        pauseOnHover={true}
        customTransition="all 2s linear"
        transitionDuration={2000}
        slidesToSlide={1}
        minimumTouchDrag={80}
        rewind={false}
        rewindWithAnimation={false}
      >
        {assistencias.map(assistencia => (
          <div
            key={assistencia.id}
            className="bg-gradient-to-br from-blue w-[300px] h-[142px] p-[1px] rounded-xl"
          >
            <div className="bg-white dark:bg-whitebg rounded-xl px-2 flex justify-center w-full h-full">
              <img
                src={assistencia.image}
                className="w-[220px]"
                alt={assistencia.name}
              />
            </div>
          </div>
        ))}
      </Carousel>
    </Sessao>
  );
};

export default Assistencias;

