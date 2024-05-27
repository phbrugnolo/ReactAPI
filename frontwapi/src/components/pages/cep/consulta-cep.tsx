import { useEffect, useState } from "react";

function ConsultarCep() {
  const [lista, setLista] = useState("");

  //evento de carregamento do componente
  useEffect(() => {
    console.log("carreguei meu componente");
    carregarCEP();
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

  return <h1>{lista}</h1>;
}

export default ConsultarCep;
