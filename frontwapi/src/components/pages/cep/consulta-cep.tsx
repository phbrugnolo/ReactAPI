import { useEffect, useState } from "react";
import { Cep } from "../../../models/Cep";


function ConsultarCep() {
  const [cep, setCep] = useState("");
  const [rua, SetRua] = useState("");
  const [bairro, SetBairro] = useState("");
  const [cidade, SetCidade] = useState("");
  const [estado, SetEstado] = useState("");
  const [ibge, SetIbge] = useState("");
  const [gia, SetGia] = useState("");
  const [ddd, SetDdd] = useState("");
  const [siafi, SetSiafi] = useState("");

  //evento de carregamento do componente
  useEffect(() => {
    console.log("carreguei meu componente");
    carregarCEP();
  }, []);

  function carregarCEP() {
    //FETCH ou AXIOS
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then((resposta) => resposta.json())
      .then((cep : Cep) => {
        SetRua(cep.logradouro);
        SetBairro(cep.bairro);
        SetCidade(cep.localidade);
        SetEstado(cep.uf);
        SetIbge(cep.ibge);
        SetGia(cep.gia);
        SetDdd(cep.ddd);
        SetSiafi(cep.siafi);
      })
      .catch((erro) => {
        console.log("Deu erro", erro);
      });
  }

  return <div>
      <h1>Consultar CEP</h1>
      <input type="text" placeholder="CEP" onChange={(e : any) => setCep(e.target.value)}/>
      <input type="button" value="BUSCAR" onClick={carregarCEP} />
      <p>{rua}</p>
      <p>{bairro}</p>
      <p>{cidade}</p>
      <p>{estado}</p>
      <p>{ibge}</p>
      <p>{gia}</p>
      <p>{ddd}</p>
      <p>{siafi}</p>
  </div>;
}

export default ConsultarCep;
