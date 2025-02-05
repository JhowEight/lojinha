'use client'
import { useState } from "react";


export default function Home() {

  //Aqui se faz o javascript normal
  const [carrinho, setCarrinho] =useState(0);
  const [cupom, setCupom] = useState(25);
  const [valortotal, setTotal] = useState(0);

  function manipulaCarrinho(adicionar){

    let novoCarrinho = carrinho;

    if(adicionar == true){
      setCarrinho(carrinho + 1);
      novoCarrinho++;
    }
    else{
      
      setCarrinho(carrinho - 1);
      novoCarrinho--;

        if(carrinho <= 0){
          setCarrinho(0);
          novoCarrinho = 0;
        }        
    }

      setTotal(novoCarrinho * cupom);
    
  }


  function limpaCarrinho(){
    setCarrinho(0);
    setTotal(0);
  }

  function cupomCarrinho(){
    setCupom(cupom - (cupom * 0,1));
    setTotal(valortotal - (cupom - (cupom * 0,1)))
  }

  return (
    <div className="p+5" >

      <h1 className="bg-sky-500 text-white p-3" >Lojinha do Next</h1>
      <p className="p-3 text-lg" >
          Carrinho: <strong>{carrinho}</strong> itens
      </p>
      <button onClick={()=>limpaCarrinho()} className="bg-yellow-300 text-black border p-3" >Limpar</button>
      <button onClick={()=> cupomCarrinho()} className="bg-yellow-900 text-white border mt-5 ml-2 p-3" >Adicionar Cupom</button>
      <hr/>
      <p className="p-3 text-lg text-red-900">Valor total: R$ <strong>{valortotal}</strong></p>

      <hr/>

      <h2>Produtos</h2>

      <div className="border bg-sky-700 w-fit p-2 text-center text-white" >
          <img src="https://placehold.co/200" />
          <h3 className="text-lg text-lime-200 font-bold" >Produto Modelo</h3>
          <p>R$ {cupom} </p>
          <button onClick={()=>manipulaCarrinho(true)} className="bg-lime-400 text-black mt-5 p-3" >Adicionar ao Carrinho</button>
          <br/>
          <button onClick={()=>manipulaCarrinho(false)} className="bg-red-400 text-black mt-5 p-3" >Remover do Carrinho</button>

      </div>

    </div>
  );
}
