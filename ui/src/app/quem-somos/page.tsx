const QuemSomos = (): JSX.Element => {
  return (
    // <!-- Conteúdo principal da pagina -->
    <main className="max-w-full">
      <div className="w-screen max-w-full flex justify-center">
        <div className="inline-flex flex-col flex-wrap gap-20 py-24 w-mobile md:w-tablet lg:w-desktop">
          {/* <!-- Sobre nós --> */}
          <section className="max-w-full w-mobile md:w-tablet lg:w-desktop">
            <div className="flex flex-col lg:flex-row gap-20 lg:gap-14">
              <img
                src="/facade/facade-desktop.png"
                className="h-[220px] md:h-[308px] lg:h-[240px] lg:w-[420px]"
              />
              <div>
                <h1 className="font-display font-bold text-center uppercase text-2xl mb-6">
                  Um pouco sobre nós
                </h1>
                <div className="font-display">
                  <p className="mb-8">
                    Bem-vindo à MV Bombas, sua fonte confiável para soluções em
                    bombas d&apos;água, motores, equipamentos de jardinagem e
                    geradores.
                  </p>
                  <p className="mb-8">
                    Somos especialistas em fornecer produtos de qualidade para
                    atender às diversas necessidades residenciais, comerciais e
                    industriais. Nossa seleção abrangente, combinada com a
                    dedicação à satisfação do cliente, faz da MV Bombas a
                    escolha ideal.
                  </p>
                  <p className="mb-8">
                    Descubra soluções eficientes e confiáveis para garantir um
                    abastecimento de água constante, motores duráveis,
                    ferramentas de jardinagem de alto desempenho e geradores
                    confiáveis para suas necessidades energéticas. Conte conosco
                    para qualidade, inovação e suporte excepcionais.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
};

export default QuemSomos;

