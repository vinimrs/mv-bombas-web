'use client';
import React from 'react';
import json from '../../../public/heroItems.json';
import Image from 'next/image';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { ResponsiveType } from 'react-multi-carousel/lib/types';

const responsive: ResponsiveType = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const CustomDot: React.FC<{
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  active?: boolean;
}> = ({ onClick, active }) => {
  return (
    <button
      className={`${
        active ? 'ring-blue bg-blue w-7' : 'bg-white'
      } w-2.5 h-2.5 rounded-full mx-1.5 mb-4 transition-all 1s ease-in-out hover:bg-blue hover:ring-blue hover:w-7`}
      onClick={onClick}
    />
  );
};

const Hero: React.FC = () => {
  const { items } = json;

  return (
    <Carousel
      ssr
      deviceType={'desktop'}
      swipeable={true}
      draggable={false}
      showDots={true}
      arrows={false}
      responsive={responsive}
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={7000}
      keyBoardControl={true}
      pauseOnHover={true}
      customTransition="all .5s ease-in-out"
      transitionDuration={500}
      slidesToSlide={1}
      minimumTouchDrag={80}
      rewind={true}
      rewindWithAnimation={true}
      customDot={<CustomDot />}
    >
      {items.map(item => (
        <div
          key={item.id}
          className="h-[520px] relative flex items-center justify-center"
          style={{
            perspective: '2000px',
            backfaceVisibility: 'hidden',
          }}
        >
          <Image
            src={item.image}
            alt="Imagem do banner"
            fill={true}
            className="-z-10 absolute object-cover"
          />
          <div className="h-full flex flex-nowrap flex-col md:flex-row items-center justify-center md:justify-between px-2 md:px-0 w-mobile md:w-tablet lg:w-desktop">
            <div className="order-1 md:order-0 text-white text-start w-[340px] md:w-[380px] lg:w-[520px]">
              <h2 className="text-base md:text-xl lg:text-4xl font-bold mb-4">
                {item.title}
              </h2>
              <p className="text-xs md:text-sm lg:text-xl font-medium leading-4 md:leading-5 text-justify mb-4">
                {item.description}
              </p>
              <button className="text-xs md:text-sm lg:text-base font-semibold px-6 py-2 ring-2 ring-white ring-inset">
                Saiba mais
              </button>
            </div>
            <div className="order-0 md:order-1 flex">
              {item.equipments.map(
                (equipment: { name: string; image: string }) => (
                  <img
                    key={equipment.name}
                    src={equipment.image}
                    alt={equipment.name}
                    className="h-[152px] md:h-[197px] lg:h-[244px] inline"
                  />
                )
              )}
            </div>
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export default Hero;

