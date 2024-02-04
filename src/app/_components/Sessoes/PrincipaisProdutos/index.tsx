import React from 'react';
import Sessao from '../../Sessao';
import ListaDeProdutos from './ListaDeProdutos';

export interface Produto {
  id: number;
  image: string;
  categories: string[];
  name: string;
}

const getProdutos = async (): Promise<Produto[]> => {
  const res = await fetch('http://localhost:3001/produtos', {
    method: 'GET',
    cache: 'force-cache', // similar to getStaticProps
  });
  return await res.json();
};

const PrincipaisProdutos: React.FC = async () => {
  const list: Produto[] = await getProdutos();

  return (
    <Sessao
      subtitle="Produtos"
      title="Principais produtos"
      description="Vendemos os produtos mais confiáveis para resolver suas necessidades."
    >
      {/* <!-- Lista de principais produtos --> */}
      <div className="relative w-[252px] md:w-[496px] lg:w-[998px] m-auto">
        <ListaDeProdutos list={list} />
      </div>
    </Sessao>
  );
};

export default PrincipaisProdutos;

