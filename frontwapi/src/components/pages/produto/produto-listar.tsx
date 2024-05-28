import { useEffect, useState } from "react";
import { Produto } from "../../../models/Produto";

function ProdutoListar() {
  const [produtos, setProdutos] = useState<Produto[]>([]);
  //evento de carregamento do componente
  useEffect(() => {
    console.log("carreguei meu componente");
    carregarProdutos();
  }, []);

  function carregarProdutos() {
    fetch("http://localhost:5181/api/produtos/listar")
      .then((resposta) => resposta.json())
      .then((produtos: Produto[]) => {
        setProdutos(produtos);
        console.table(produtos);
      })
      .catch((erro) => {
        console.log("deu erro");
      });
  }

  return (
    <div>
      <h1>Lista de Produtos</h1>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Nome</th>
            <th>Descirção</th>
            <th>Status</th>
            <th>Preço</th>
            <th>Quantidade</th>
            <th>Criado Em</th>
          </tr>
          </thead>
          <tbody>
             {
                produtos.map((produto) => (
                  <tr key={produto.id}>
                    <td>{produto.id}</td>
                    <td>{produto.nome}</td>
                    <td>{produto.descricao}</td>
                    <td>{produto.status}</td>
                    <td>{produto.preco}</td>
                    <td>{produto.quantidade}</td>
                    <td>{produto.criadoEm}</td>
                  </tr>
                ))
             }
          </tbody>

      </table>
    </div>
  );
}

export default ProdutoListar;
