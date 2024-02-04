import React from 'react';
import { Metadata } from 'next';
import Hero from './_components/Hero';
import { FaCheck, FaHandshake, FaPlus, FaTools } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';
import { MdEngineering, MdHomeWork } from 'react-icons/md';
import { FiArrowRight, FiArrowUpRight } from 'react-icons/fi';
import dynamic from 'next/dynamic';
import Sessao from './_components/Sessao';
import PrincipaisProdutos from './_components/Sessoes/PrincipaisProdutos';
import Assistencias from './_components/Sessoes/Assistencias';

const Map = dynamic(() => import('./_components/Map'), { ssr: false });

export const metadata: Metadata = {
  title: 'MV Bombas - Home',
  description: 'Página inicial',
};

const Home: React.FC = () => {
  return (
    // <!-- Conteúdo principal da pagina -->
    <main className="max-w-full">
      {/* <!-- Hero --> */}
      <Hero />
      {/* <!-- Seções principais --> */}
      <div className="w-screen max-w-full flex justify-center">
        <div className="inline-flex flex-col flex-wrap gap-20 pt-14 items-center">
          {/* <!-- Principais produtos --> */}
          <PrincipaisProdutos />

          {/* <!-- Assistências técnicas --> */}
          <Assistencias />

          {/* <!-- Dados de confiança --> */}
          <Sessao
            subtitle="Confiança"
            title="Confiança construída em anos"
            description="Confiada por centenas de clientes e diversas multinacionais, construídas em anos de serviços prestados para todas as necessidades."
          >
            <div className="md:w-auto flex flex-row flex-wrap gap-8 justify-center">
              <div className="bg-gradient-to-br from-blue w-[320px] h-[240px] p-[1px] rounded-xl">
                <div className="bg-white dark:bg-blackbg rounded-xl grid content-center px-6 h-full w-full">
                  <div className="w-full mb-4">
                    <FaPlus className="text-blue h-[30px] w-[30px] inline mr-2" />
                    <h2 className="text-xl font-bold inline align-middle">
                      de 10 anos de mercado
                    </h2>
                  </div>
                  <p className="text-justify">
                    Mais de uma década atuando no ramo de equipamentos
                    motorizados na região de Maceió-AL.
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue w-[320px] h-[240px] p-[1px] rounded-xl">
                <div className="bg-white dark:bg-blackbg rounded-xl grid content-center px-6 h-full w-full">
                  <div className="w-full mb-4">
                    <FaLocationDot className="text-blue h-[30px] w-[30px] inline mr-2" />
                    <h2 className="text-xl font-bold inline align-middle">
                      Excelente localização
                    </h2>
                  </div>
                  <p className="text-justify">
                    Sua localização central é perfeita para conseguir atender os
                    clientes de todos os bairros da cidade.
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue w-[320px] h-[240px] p-[1px] rounded-xl">
                <div className="bg-white dark:bg-blackbg rounded-xl grid content-center px-6 h-full w-full">
                  <div className="w-full mb-4">
                    <FaPlus className="text-blue h-[30px] w-[30px] inline mr-2" />
                    <h2 className="text-xl font-bold inline align-middle">
                      de 5 multinacionais parceiras!
                    </h2>
                  </div>
                  <p className="text-justify">
                    Prestamos assistência para as principais marcas do mercado
                    no setor.
                  </p>
                </div>
              </div>
            </div>
          </Sessao>
          {/* <!-- Serviços --> */}
          <Sessao
            title="Excedemos as expectativas"
            subtitle="Serviços"
            description="Prestamos serviços de qualidade e rapidez para solucionar o seu problema."
          >
            <div className="lg:pl-12">
              <div className="gap-8 flex flex-row flex-wrap justify-center lg:justify-normal">
                <div className="bg-gradient-to-br from-blue w-[320px] h-[364px] p-[1px] rounded-xl">
                  <div className="bg-white dark:bg-blackbg px-6 py-8 rounded-xl flex flex-col gap-5 w-full h-full">
                    <div className="bg-whitebgOpacity dark:bg-whitebglight3 rounded-lg h-[70px] w-[70px]">
                      <FaTools className="text-blue h-[34px] w-[34px] ml-[18px] mt-[18px]" />
                    </div>

                    <h2 className="font-bold">
                      Manutenção de equipamentos motorizados
                    </h2>
                    <p className="text-justify text-xs leading-4">
                      Nós realizamos manutenção de praticamente todo equipamento
                      motorizado, incluindo para jardinagem, bombeamento de
                      fluidos e de propósito geral.
                    </p>
                    <button className="font-semibold w-[160px] h-[54px] bg-yellow dark:text-text rounded-lg">
                      <span className="align-middle">Saiba Mais</span>
                      <FiArrowRight className="h-[34px] w-[34px] inline ml-1.5" />
                    </button>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-blue w-[320px] h-[364px] p-[1px] rounded-xl">
                  <div className="bg-white dark:bg-blackbg px-6 py-8 rounded-xl flex flex-col gap-5 w-full h-full">
                    <div className="bg-whitebgOpacity dark:bg-whitebglight3 rounded-lg h-[70px] w-[70px]">
                      <FaHandshake className="text-blue h-[34px] w-[34px] ml-[18px] mt-[18px]" />
                    </div>

                    <h2 className="font-bold">
                      Assistência técnica autorizada
                    </h2>
                    <p className="text-justify text-xs leading-4">
                      Somos autorizados pelos principais fabricantes para
                      manutenção dos equipamentos ainda no prazo da garantia
                      legal ou garantia contratual, sem custo para o cliente.
                    </p>
                    <button className="font-semibold w-[160px] h-[54px] bg-yellow dark:text-text rounded-lg">
                      <span className="align-middle">Saiba Mais</span>
                      <FiArrowRight className="h-[34px] w-[34px] inline ml-1.5" />
                    </button>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-blue w-[320px] h-[364px] p-[1px] rounded-xl">
                  <div className="bg-white dark:bg-blackbg px-6 py-8 rounded-xl flex flex-col gap-5 w-full h-full">
                    <div className="bg-whitebgOpacity dark:bg-whitebglight3 rounded-lg h-[70px] w-[70px]">
                      <MdEngineering className="text-blue h-[34px] w-[34px] ml-[18px] mt-[18px]" />
                    </div>

                    <h2 className="font-bold">Rebobinamento de motores</h2>
                    <p className="text-justify text-xs leading-4">
                      Temos profissionais especialistas no rebobinamento de
                      motores elétricos. Através dela é possível trocar toda a
                      bobinagem do motor, fazendo a mudança para fios de melhor
                      qualidade.
                    </p>
                    <button className="font-semibold w-[160px] h-[54px] bg-yellow dark:text-text rounded-lg">
                      <span className="align-middle">Saiba Mais</span>
                      <FiArrowRight className="h-[34px] w-[34px] inline ml-1.5" />
                    </button>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-blue w-[320px] h-[364px] p-[1px] rounded-xl">
                  <div className="bg-white dark:bg-blackbg px-6 py-8 rounded-xl flex flex-col gap-5 w-full h-full">
                    <div className="bg-whitebgOpacity dark:bg-whitebglight3 rounded-lg h-[70px] w-[70px]">
                      <MdHomeWork className="text-blue h-[34px] w-[34px] ml-[18px] mt-[18px]" />
                    </div>

                    <h2 className="font-bold">Limpeza de poços artesianos</h2>
                    <p className="text-justify text-xs leading-4">
                      Somos especialistas em limpeza de poços artesianos
                      tubulares residenciais e empresariais, utilizamos
                      equipamentos de última linha.
                    </p>
                    <button className="font-semibold w-[160px] h-[54px] bg-yellow dark:text-text rounded-lg">
                      <span className="align-middle">Saiba Mais</span>
                      <FiArrowRight className="h-[34px] w-[34px] inline ml-1.5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Sessao>

          {/* <!-- Orçamentos --> */}
          <Sessao
            title="Solicite um orçamento"
            subtitle="Orçamento"
            description="Nos envie o seu problema que iremos analisar e encontrar a melhor solução."
          >
            <div className="flex items-end md:items-center pb-6 md:pb-0 pl-5 md:pl-12 lg:pl-16 text-whitebg bg-cover bg-center bg-[url('/banners/banner-orcamento-mobile.png')] md:bg-[url('/banners/banner-orcamento-tablet.png')] lg:bg-[url('/banners/banner-orcamento-desktop.png')] h-[425px] md:h-[296px] lg:h-[406px]">
              <div className="w-5/6 md:w-4/6 lg:w-1/2">
                <h3 className="font-bold lg:text-2xl mb-6">
                  Planeje quanto recurso será necessário para solucionar seu
                  problema.
                </h3>
                <ul className="text-sm mb-6 flex flex-col gap-2">
                  <li className="flex gap-1 font-medium items-center">
                    <FaCheck className="h-[20px] w-[28px]" />
                    Previsão de entrega
                  </li>
                  <li className="flex gap-1 font-medium items-center">
                    <FaCheck className="h-[20px] w-[28px]" />
                    Assistência técnica
                  </li>
                  <li className="flex gap-1 font-medium items-center">
                    <FaCheck className="h-[20px] w-[28px]" />
                    Produtos de qualidade
                  </li>
                  <li className="flex gap-1 font-medium items-center">
                    <FaCheck className="h-[20px] w-[28px]" />
                    Garantia
                  </li>
                </ul>
                <button className="text-sm lg:text-base px-6 py-1.5 ring-2 ring-whitebg ring-inset rounded-xl flex items-center gap-2 font-bold hover:bg-whitebg hover:text-blue transition duration-50 ease-linear">
                  Solicite um orçamento
                  <FiArrowUpRight className="h-[32px] w-[32px]" />
                </button>
              </div>
            </div>
          </Sessao>

          {/* <!-- Maps --> */}
          <Sessao
            title="Traga seu equipamento para nós"
            subtitle="Localização"
            description="Nos visite em nossa sede localizada no bairro do Barro duro, em Maceió-AL."
            full
          >
            <Map />
          </Sessao>
        </div>
      </div>
    </main>
  );
};

export default Home;

