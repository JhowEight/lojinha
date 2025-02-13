'use client'
import { useState } from "react";


function Produtos() {

    //const[produto, setProduto] = useState({});
    const [produtos, setProdutos] = useState([{
        nome: "Havaianas",
        preco: "15,90",
        quantidade: 60

    },{
        nome: "Sapatênis",
        preco: "29,90",
        quantidade: 40

    }
]);

    const[nome, setNome] = useState("");
    const[preco, setPreco] = useState("");
    const[quantidade, setQuantidade] = useState("");

    const[mostraListagem, setListagem] = useState(true);
    const[mostraCadastro, setCadastro] = useState(true);

    function setExibicao(tela){
        
        if(tela == "cadastro"){
            setCadastro(true);
            setListagem(false);
        }

        if(tela == "listagem"){
            setCadastro(false);
            setListagem(true);
        }

        
    }

    function salvar(e){
        e.preventDefault();// Não fazer reload da pagina quando enviar
        const objeto = {
            nome: nome,
            preco: preco,
            quantidade: quantidade

        }

        setProdutos([...produtos, objeto]);

    }

    return ( 
        <div className="p-10 " >
            <h1 className="text-lg mb-10" > Administração de Produtos </h1>

            <div className="flex gap-10" >

                {/* Menu Lateral */}
                <div>
                    <button onClick={()=> setExibicao("cadastro") } className="bg-garay-200 p-5 mb-5" >Cadastro</button>
                    <br/>
                    <button onClick={()=> setExibicao("listagem") } className="bg-garay-200 p-5 mb-5" >Listagem</button>
                </div>
                    
                {/* Painel Principal */}
                <div >
                    
                    {/* Cadastro */}
                    {
                        mostraCadastro == true &&

                        <div className="border-solid p-5" >
                        <h2 className="font-bold mb-2" >Cadastro de Produto</h2>
                        <form onSubmit={(e)=> salvar(e) } >

                            <label>
                                Digite o nome:
                                <br/>
                                <input onChange={(e)=> setNome(e.target.value) } className="outline" />
                            </label>
                            <br/>
                            <br/>

                            <label>
                                Digite o preço:
                                <br/>
                                <input onChange={(e)=> setPreco(e.target.value) } className="outline" />
                            </label>
                            <br/>
                            <br/>

                            <label>
                                Digite a quantidade:
                                <br/>
                                <input onChange={(e)=> setQuantidade(e.target.value) } className=" outline" />
                            </label>
                            <br/>

                            <button className="bg-gray-300 mt-5 p-5" >Salvar</button>

                        </form>
                    </div>

                    }

                </div>

                {/* Listagem */}
                {
                    mostraListagem == true &&

                    <div className="border-solid p-5" >
                        <h2 className="font-bold mb-5" >Listagem de Produtos</h2>

                        <ul>
                             {produtos.map((i)=> <span><li> {i.nome} - {i.preco} - {i.quantidade} </li></span>)}
                        </ul>

                    </div>

                }

            </div>

        </div>
     );
}

export default Produtos;