import { useEffect, useState } from "react";

function ProdutoListar() {
  const [lista, setLista] = useState("");

  //evento de carregamento do componente
  useEffect(() => {
    console.log("carreguei meu componente");
    carregarCEP();
    //carregarLista();
  }, []);

  function carregarCEP() {
    //FETCH ou AXIOS
    fetch("https://viacep.com.br/ws/81720240/json/")
      .then((resposta) => resposta.json())
      .then((dados) => {
        console.log(dados);
      })
      .catch((erro) => {
        console.log("Deu erro", erro);
      });
  }

  function carregarLista() {
    fetch("http://localhost:5181/api/produtos/listar")
      .then((resposta) => resposta.json)
      .then((dados) => {
        console.log(dados);
      })
      .catch((erro) => {
        console.log("deu erro");
      });
  }

  return <h1>{lista}</h1>;
}

export default ProdutoListar;
