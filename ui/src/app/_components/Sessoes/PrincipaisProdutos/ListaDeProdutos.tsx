'use client';
import React, { useState } from 'react';
import { Produto } from '.';
import { useWindowDimensions } from '@/hooks/useWindowDimensions';
import { useSwipeable } from 'react-swipeable';
import { BiLeftArrow, BiRightArrow } from 'react-icons/bi';

const ListaDeProdutos: React.FC<{
  list: Produto[];
}> = ({ list }) => {
  const [scrollx, setScrollx] = useState(0);
  const { width } = useWindowDimensions();

  const handleLeftArrow = () => {
    let x = scrollx + 240 + 12;
    if (x > 0) {
      x = 0;
    }
    setScrollx(x);
  };

  const handleRightArrow = () => {
    const over = width < 769 ? 0 : width < 1024 ? 1 : 3;
    const jump = 240 + 12;

    let x = scrollx - jump;
    const listWidth = list.length * 240;
    if (-x > listWidth - over * jump) {
      x += jump;
    }
    setScrollx(x);
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => handleRightArrow(),
    onSwipedRight: () => handleLeftArrow(),
    // preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  return (
    <>
      <div className="overflow-x-hidden w-[252px] md:w-[496px] lg:w-[998px]">
        <div
          className="overflow-x-hidden transition-all ease-out duration-300"
          style={{ marginLeft: scrollx }}
        >
          <div {...handlers} className="flex items-center gap-3">
            {list.map(produto => (
              <div
                key={produto.id}
                className="flex flex-col gap-4 pb-4 min-w-[240px]"
              >
                <img src={produto.image} className="self-center h-[160px]" />
                <div className="flex gap-1.5">
                  {produto.categories.map(category => (
                    <button
                      key={category}
                      className="bg-whitebg dark:bg-whitebglight3 text-blue font-bold text-xs px-4 py-[5px] rounded-lg dark:hover:bg-blue hover:bg-blue hover:text-whitebg transition duration-50 ease-linear"
                    >
                      {category}
                    </button>
                  ))}
                </div>
                <h3 className="font-bold leading-5">{produto.name}</h3>
                <button className="self-center w-full font-bold text-blue text-sm bg-transparent ring-2 ring-blue ring-inset px-20 py-3 rounded-xl hover:bg-blue hover:text-whitebg transition duration-50 ease-linear">
                  Leia Mais
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      <button
        className="absolute -left-16 top-0 bottom-0 my-auto mx-0 text-blue bg-whitebg dark:bg-whitebglight3 dark:text-whitebg rounded-full w-12 h-12 flex items-center justify-center"
        onClick={handleLeftArrow}
      >
        <BiLeftArrow />
      </button>
      <button
        className="absolute -right-14 top-0 bottom-0 my-auto mx-0 text-blue bg-whitebg dark:bg-whitebglight3 dark:text-whitebg rounded-full w-12 h-12 flex items-center justify-center"
        onClick={handleRightArrow}
      >
        <BiRightArrow />
      </button>
    </>
  );
};

export default ListaDeProdutos;

