import axios from "axios";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const Login = () => {
    const [objeto, setObjeto] = useState({
        login: '', 
        hashSenha: ''
    });

    const navigate = useNavigate();
    
    const sucessoLogin = (usuario) => {
        localStorage.setItem("usuario-nome", usuario.nome);
        localStorage.setItem("usuario-id", usuario.id);
        localStorage.setItem("usuario-role", usuario.role);

        if(usuario.role == "Cliente")
            navigate("/usuario/home");
        else
            navigate("/adm/home");
    };
    
    const logar = (e) => {
        e.preventDefault();
        axios.post('http://localhost:5196/login', objeto, { withCredentials: true })
            .then(res => {
                sucessoLogin(res.data);
            })
            .catch(error => {
                console.log("Falha ao logar. Verifique suas credenciais.");
            });
    };


    return (
        <div style={{
            backgroundImage: `url('https://img.freepik.com/vetores-gratis/quadro-com-vetor-de-caes-em-fundo-branco_53876-127700.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            paddingBottom: '60px'
        }}>
            <div className="card" style={{
                width: "30rem", 
                backgroundColor: '#343a40',
                borderRadius: '10px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                padding: '20px'
            }}>
                <h1 style={{ textAlign: "center", marginBottom: '20px', color: 'yellow' }}>Acessar página</h1>
                
                <div className="card-body">
                    <div className="mb-3">
                        <label htmlFor="staticlogin" className="form-label" style={{ color: 'yellow' }}>Login</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="staticlogin" 
                            value={objeto.login} 
                            onChange={e => setObjeto({...objeto, login: e.target.value})} 
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="inputPassword" className="form-label" style={{ color: 'yellow' }}>Senha</label>
                        <input 
                            type="password" 
                            className="form-control" 
                            id="inputPassword" 
                            value={objeto.hashSenha} 
                            onChange={e => setObjeto({...objeto, hashSenha: e.target.value})} 
                        />
                    </div>
                    <div style={{ display: "flex", justifyContent: "center", marginTop: 10 }}>
                        <button type="button" className="btn btn-success" onClick={e => logar(e)} style={{ marginRight: 10 }}>Entrar</button>
                        <Link to="cadastro" className="btn btn-primary">Cadastrar</Link>
                    </div>
                </div>
            </div>
            <footer style={{ backgroundColor: 'black', color: 'yellow', textAlign: 'center', padding: '10px 0', position: 'fixed', bottom: 0, width: '100%' }}>
                Feito por Mayller - Trabalho FullStack
            </footer>
        </div>
    );
};

export default Login;