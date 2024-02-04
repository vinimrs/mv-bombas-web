import type { Metadata } from 'next';
import './globals.css';
import Cabecalho from './_components/Cabecalho';
import Rodape from './_components/Rodape';

export const metadata: Metadata = {
  title: 'MV Bombas - Home',
  description: 'Pãgina inicial do site institucional',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-br">
      <body className="bg-white dark:bg-blackbg max-w-full flex flex-col items-center text-text dark:text-whitebg">
        {/* <!-- Cabeçalho --> */}
        <Cabecalho />

        {/* Recebe o componente filho */}
        {children}

        {/* <!-- Rodapé --> */}
        <Rodape />
      </body>
    </html>
  );
}

