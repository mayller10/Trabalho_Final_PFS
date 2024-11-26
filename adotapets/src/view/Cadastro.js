import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Cadastro = () => {
    const navigate = useNavigate();

    const [usuario, setUsuario] = useState({ nome: "", login: "", senha: "" });

    const cadastrar = (e) => {
        e.preventDefault();
        axios.post('http://localhost:5196/usuarios/cliente', usuario).then(resp => {
            console.log(resp.data);
            navigate('/');
        });
    }

    const atualizarCampo = (nome, valor) => {
        let usuNovo = { ...usuario };
        usuNovo[nome] = valor;
        setUsuario(usuNovo);
    }

    return (
        <div style={{ 
            backgroundImage: 'url(https://img.freepik.com/vetores-gratis/quadro-com-vetor-de-caes-em-fundo-branco_53876-127700.jpg)', 
            backgroundSize: 'cover', 
            height: '100vh', 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center' 
        }}>
            <div className="card" style={{ width: "30rem", backgroundColor: '#333', color: '#FFD700' }}>
                <h1 style={{ textAlign: "center" }}>Cadastrar</h1>
                <div className="card-body">
                    <div className="mb-3 row">
                        <label htmlFor="staticNome" className="col-sm-2 col-form-label">Nome</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="staticNome" value={usuario.nome} onChange={e => atualizarCampo('nome', e.target.value)} />
                        </div>
                    </div>
                    <div className="mb-3 row">
                        <label htmlFor="staticlogin" className="col-sm-2 col-form-label">Login</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="staticlogin" value={usuario.login} onChange={e => atualizarCampo('login', e.target.value)} />
                        </div>
                    </div>
                    <div className="mb-3 row">
                        <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Senha</label>
                        <div className="col-sm-10">
                            <input type="password" className="form-control" id="inputPassword" value={usuario.senha} onChange={e => atualizarCampo('senha', e.target.value)} />
                        </div>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <button type="button" className="btn btn-primary" style={{ marginTop: 10 }}>Cadastrar</button>
                    </div>
                </div>
            </div>
            <footer style={{ backgroundColor: 'black', color: 'yellow', textAlign: 'center', padding: '10px', position: 'absolute', bottom: '0', width: '100%' }}>
                Feito por Mayller - Trabalho Fullstack
            </footer>
        </div>
    );
};

export default Cadastro;