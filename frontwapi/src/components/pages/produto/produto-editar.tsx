import { useEffect, useState } from "react";
import { Produto } from "../../../models/Produto";
import axios from "axios";
import { useParams } from "react-router-dom";

function ProdutoEditar() {

    const {id} = useParams<{ id : string }>();
    const [preco, setPreco] = useState("");
    const [quantidade, setQuantidade] = useState("");
    const [nome, setNome] = useState("");
    const [descricao, setDescricao] = useState("");
    const [status, setStatus] = useState<"ativo" | "inativo">("ativo");

    useEffect(() => {
        if(id){
            axios.get<Produto>(`http://localhost:5181/api/produtos/buscar/${id}`).then(resposta => {
                setNome(resposta.data.nome);
                setDescricao(resposta.data.descricao);
                setPreco(resposta.data.preco.toString());
                setQuantidade(resposta.data.quantidade.toString());
                setStatus(resposta.data.status as "ativo" | "inativo");
            });
        }
    }, []);

    function produtoEditado(e : any) {
        e.preventDefault();
        const produto = {
            nome: nome,
            descricao: descricao,
            preco: parseFloat(preco),
            quantidade: parseInt(quantidade),
            status
        };
        axios.put<Produto>(`http://localhost:5181/api/produtos/editar/${id}`, produto);
    }
  
  return (
    <div>
        <h1>Editar Produto</h1>
        <form onSubmit={produtoEditado}>
        <label>
          Nome:
          <input type="text" value={nome} onChange={(e : any) => setNome(e.target.value)} required/>
          <br />
        </label>
        <label>
          Descrição:
          <input type="text" value={descricao} onChange={(e : any) => setDescricao(e.target.value)} required/>
          <br />
        </label>
        <label>
          Preço:
          <input type="text" value={preco} onChange={(e : any) => setPreco(e.target.value)} required/>
          <br />
        </label>
        <label>
          Quantidade:
          <input type="text" value={quantidade} onChange={(e : any) => setQuantidade(e.target.value)} required/>
        </label>
        <div>
            <p>Status: </p>
            <label>
                <input
                    type="radio"
                    value="ativo"
                    checked={status === "ativo"}
                    onChange={() => setStatus("ativo")}
                />
                Ativo
            </label>
            <label>
                <input
                    type="radio"
                    value="inativo"
                    checked={status === "inativo"}
                    onChange={() => setStatus("inativo")}
                />
                Inativo
            </label>
        </div>
        <br />
        <button type="submit">Salvar</button>
        </form>
    </div>
  );
}

export default ProdutoEditar;