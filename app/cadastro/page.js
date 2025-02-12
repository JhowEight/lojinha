'use client'

import { useState } from "react";


function Cadastro() {

    const [nome, setNome] = useState("");

    function salvar(){
        console.log("O nome cadastrado é:"+nome);
        setNome( nome.toUpperCase() );
    }

    return ( 
        <div className="p-10" >

            <h1 className="text-lg" >Cadastro</h1>
            
            <hr/>

        <p>Digite seu nome:</p>
        <input onChange={((e)=> setNome( e.target.value ) )} className="outline" />

        <br/>

        <button  onClick={()=> salvar()} value={nome} className="p-3 mt-5 bg-lime-500 text-white ">Salvar</button>

        </div>
     );
}

export default Cadastro;