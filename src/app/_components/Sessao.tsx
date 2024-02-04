import React from 'react';

const Sessao: React.FC<{
  title?: string;
  subtitle?: string;
  description?: string;
  full?: boolean;
  children: React.ReactNode;
}> = ({ title, subtitle, description, children, full }) => {
  return (
    <section
      className={`${
        full ? '' : 'max-w-full w-mobile md:w-tablet lg:w-desktop'
      } `}
    >
      {/* <!-- Cabeçalho da seção --> */}
      {title && subtitle && description && (
        <header
          className={`${
            full ? 'text-center mx-auto' : ''
          } mb-14 md:w-[475px] lg:w-[600px]`}
        >
          <h2 className="font-display text-xs md:text-base font-bold text-blue uppercase tracking-[0.3rem] pl-0.5 -mb-1.5">
            {subtitle}
          </h2>
          <h1 className="font-display text-2xl md:text-3xl font-semibold">
            {title}
          </h1>
          <p className="text-xs md:text-base w-[290px] md:w-full">
            {description}
          </p>
        </header>
      )}

      {/* <!-- Conteúdo --> */}
      {children}
    </section>
  );
};

export default Sessao;

