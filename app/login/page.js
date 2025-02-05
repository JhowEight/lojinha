'use client'

import { useState } from "react";

function Login() {

    const [admin, setAdmin] = useState(true);

    return ( 
        
        <div>
            <h1 className="text-lg text-blue-500 mb-2 " >Página de Login</h1>
            <p>Você está logado como <strong>{admin == false ? <span>Administrador</span> : <span>Usuario</span> }</strong>. </p>
            {/* <button onClick={()=> setAdmin(!admin)} className={`mt-3  ${ admin == true ? `bg-sky-500` : `bg-red-500` } text-white p-2`} > {admin == true ? <span>Entrar como adiministrador</span> : <span>Voltar para usuario</span> } </button> */}
            <button onClick={()=> setAdmin(!admin)} className={"mt-3"+ (admin == true ? "bg-sky-500" : "bg-red-500" + "text-white p-2" )} > {admin == true ? <span>Entrar como adiministrador</span> : <span>Voltar para usuario</span> } </button>


            {
                admin == true ? 
                <div>
                <h2 className=" text-lg text-lime-800 mt-10 " >Olá Administrador</h2>
                <p>Seja Bem-Vindo</p>

                <button className="bg-black text-white p-3 mt-5" >Cadastrar usuário</button>
                <p>Digite o nome:</p>
                <input className="border-2" />

                </div>
                : 
                <div></div>
            }

        </div>

     );
}

export default Login;