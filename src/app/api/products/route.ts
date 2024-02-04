import { readFile } from 'fs/promises';

export async function GET() {
  try {
    // Leia os dados do arquivo produtos.json
    const produtosData = await readFile('./public/products.json', 'utf-8');
    const produtos = JSON.parse(produtosData);

    // Envie a lista de produtos como resposta
    return Response.json(produtos);
  } catch (error) {
    console.error('Erro ao ler o arquivo de produtos:', error);
    return Response.json(
      { message: 'Erro interno do servidor' },
      { status: 500 }
    );
  }
}

