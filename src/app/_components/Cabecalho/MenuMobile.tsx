import React, { useState } from 'react';
import { IoCloseSharp, IoMenuSharp } from 'react-icons/io5';
import BotaoTema from './BotaoMudarTema';
import { usePathname } from 'next/navigation';
import { IoIosArrowDown } from 'react-icons/io';

const MenuMobile: React.FC = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const path = usePathname();

  return (
    <div className="relative">
      <button
        onClick={() => setMenuOpen(prev => !prev)}
        className="bg-blue text-whitebg w-menu text-left inline box-border px-4 py-3"
      >
        {isMenuOpen ? (
          <IoCloseSharp className="text-whitebg h-[32px] w-[32px] mr-4 inline" />
        ) : (
          <IoMenuSharp className="text-whitebg h-[32px] w-[32px] mr-4 inline" />
        )}
        <span className="font-semibold text-base align-middle">Menu</span>
      </button>

      {/* <!-- Menu --> */}
      {isMenuOpen ? (
        <div className="bg-whitebg text-text px-5 py-8 absolute top-[56px] left-0 z-10 w-[330px]">
          <nav className="flex flex-col justify-center gap-8">
            <ol className="flex flex-col gap-6 mr-4 font-bold text-sm uppercase">
              <li
                className={`cursor-pointer ${path === '/' ? 'text-blue' : ''}`}
              >
                <a href="/">Página Inicial</a>
              </li>
              <li className="flex items-center cursor-pointer">
                <a href="#" className="mr-2">
                  Produtos
                </a>
                <IoIosArrowDown />
              </li>
              <li className="flex items-center cursor-pointer">
                <a href="#" className="mr-2">
                  Serviços
                </a>
                <IoIosArrowDown className="rotate-180" />
              </li>
              {/* <!-- Subnav --> */}
              <li className="ml-4">
                <ol className="flex flex-col gap-7">
                  <li>Serviço 1</li>
                  <li>Serviço 2</li>
                  <li>Serviço 3</li>
                </ol>
              </li>
              <li className="cursor-pointer">
                <a href="#">Assistência Técnica</a>
              </li>
              <li
                className={`cursor-pointer ${
                  path === '/quem-somos' ? 'text-blue' : ''
                }`}
              >
                <a href="/quem-somos">Quem somos</a>
              </li>
              <li className="cursor-pointer">
                <a target="#">Contate-nos</a>
              </li>
            </ol>
            <BotaoTema />
          </nav>
        </div>
      ) : null}
    </div>
  );
};

export default MenuMobile;

