'use client';
import { usePathname } from 'next/navigation';
import React from 'react';
import BotaoMudarTema from './BotaoMudarTema';
import { FaPhoneAlt, FaSearch, FaWhatsapp } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';
import MenuMobile from './MenuMobile';
import { IoIosArrowDown } from 'react-icons/io';
import Image from 'next/image';

const Cabecalho: React.FC = () => {
  const path = usePathname();

  return (
    <header className="flex flex-col justify-center items-center md:items-start lg:items-center pt-10 pb-4 max-w-full w-mobile md:w-tablet lg:w-desktop">
      {/* <!-- Primeira seção --> */}
      <div className="flex flex-col w-full flex-wrap md:flex-row lg:flex-nowrap justify-between items-center mb-6 lg:mb-10">
        {/* <!-- Logo --> */}
        <a href="/">
          <Image
            src="/logo.svg"
            alt="Logo da MV Bombas"
            width={256}
            height={28}
          />
        </a>

        {/* <!-- Barra de pesquisa --> */}
        <div className="w-full order-2 text-center mt-8 lg:mt-0 lg:order-1 lg:w-auto">
          <form className="inline-block text-center lg:flex lg:items-center">
            <input
              type="text"
              placeholder="O que você deseja..."
              className="px-3 py-2.5 border-2 border-r-0 dark:bg-whitebglight3 border-whitebg dark:border-whitebglight align-middle w-60 text-xs placeholder:text-graytext placeholder:text-xs focus:border-whitebg dark:focus:border-whitebglight focus:border-transparent focus:ring-0"
            />
            <button
              type="submit"
              className="w-10 h-10 align-middle bg-whitebg dark:bg-whitebglight"
            >
              <FaSearch className="w-5 h-5 m-auto text-blue" />
            </button>
          </form>
        </div>

        {/* <!-- Contatos da empresa --> */}
        <address className="mt-8 md:mt-0 font-medium text-sm not-italic text-center lg:order-2">
          <div className="flex flex-row mb-3">
            <div className="border-r-2 pr-4 dark:border-whitebg border-blackbg">
              <FaPhoneAlt className="w-3.5 h-3.5 inline mr-1" />
              <a href="tel:+558233166531" className="align-middle">
                (82) 3316-6531
              </a>
            </div>
            <div className="text-center ml-4">
              <FaWhatsapp className="w-[18px] h-[18px] inline mr-1" />
              <a href="tel:+5582993165234" className="align-middle">
                (82) 9 9316-5234
              </a>
            </div>
          </div>

          <div>
            <FaLocationDot className="w-3 h-4 inline mr-2" />
            <a href="mail:" className="align-middle">
              Av. Muniz Falcão, 2** B Maceió - AL
            </a>
          </div>
          <div></div>
        </address>
      </div>

      {/* <!-- Segunda seção --> */}
      {/* <!-- Menu de navegação tablet e smartphone --> */}
      <div className="lg:hidden">
        <MenuMobile />
      </div>

      {/* <!-- Barra de navegação desktop --> */}
      <nav className="hidden lg:flex justify-center items-center">
        <ol className="flex flex-row mr-4 font-bold text-sm uppercase">
          <li
            className={`mr-6 cursor-pointer ${path === '/' ? 'text-blue' : ''}`}
          >
            <a href="/">Página Inicial</a>
          </li>
          <li className="flex items-center mr-6 cursor-pointer">
            <a href="#" className="mr-2">
              Produtos
            </a>
            <IoIosArrowDown />
          </li>
          <li className="flex items-center mr-6 cursor-pointer">
            <a href="#" className="mr-2">
              Serviços
            </a>
            <IoIosArrowDown />
          </li>
          <li className="mr-6 cursor-pointer">
            <a href="#">Assistência Técnica</a>
          </li>
          <li
            className={`mr-6 cursor-pointer ${
              path === '/quem-somos' ? 'text-blue' : ''
            }`}
          >
            <a href="/quem-somos">Quem somos</a>
          </li>
          <li className="mr-6 cursor-pointer">
            <a href="#">Contate-nos</a>
          </li>
        </ol>
        <BotaoMudarTema />
      </nav>
    </header>
  );
};

export default Cabecalho;

