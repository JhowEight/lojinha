'use client'
import { useState } from "react";


export default function Home() {

  //Aqui se faz o javascript normal
  let [carrinho, setCarrinho] =useState(0);
  let [cupom, setCupom] = useState(25);

  function manipulaCarrinho(adicionar){
    if(adicionar == true){
      setCarrinho(carrinho + 1);
    }
    else{
      setCarrinho(carrinho - 1);

      if(carrinho <= 0){
        setCarrinho(0);
      }

    }
  }

  function limpaCarrinho(){
    setCarrinho(0);
  }

  function addCupom(){
    setCupom(cupom - (cupom * 0,1))
  }

  return (
    <div className="p+5" >

      <h1 className="bg-sky-500 text-white p-3" >Lojinha do Next</h1>
      <p className="p-3 text-lg" >
          Carrinho: <strong>{carrinho}</strong> itens
      </p>
      <button onClick={()=>limpaCarrinho()} className="bg-yellow-300 text-black border p-3" >Limpar</button>
      <button onClick={()=> addCupom()} className="bg-yellow-900 text-white border mt-5 ml-2 p-3" >Adicionar Cupom</button>

      <hr/>

      <h2>Produtos</h2>

      <div className="border bg-sky-700 w-fit p-2 text-center text-white" >
          <img src="https://placehold.co/200" />
          <h3 className="text-lg text-lime-200 font-bold" >Produto Modelo</h3>
          <p> Valor Total: <br/> R$ 0 </p>
          <button onClick={()=>manipulaCarrinho(true)} className="bg-lime-400 text-black mt-5 p-3" >Adicionar ao Carrinho</button>
          <br/>
          <button onClick={()=>manipulaCarrinho(false)} className="bg-red-400 text-black mt-5 p-3" >Remover do Carrinho</button>

      </div>

    </div>
  );
}
