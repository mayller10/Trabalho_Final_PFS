import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AdicionarPet = () => {
    const navigate = useNavigate();
    const [objeto, setObjeto] = useState({ nome: "", raca: "", sexo: "", imagem: "" });
    const [preview, setPreview] = useState(null);

    const salvar = (e) => {
        e.preventDefault();
        axios.post('http://localhost:5146/carros', objeto).then(resp => {
            navigate('/adm/home');
        });
    }

    const voltar = (e) => {
        e.preventDefault();
        navigate('/adm/home');
    }

    const atualizarCampo = (nome, valor) => {
        let objNovo = { ...objeto };
        objNovo[nome] = valor;
        setObjeto(objNovo);
        setPreview(objNovo);
    }

    return (
        <div style={{
            backgroundImage: 'url(https://img.freepik.com/vetores-gratis/quadro-com-vetor-de-caes-em-fundo-branco_53876-127700.jpg)',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            minHeight: '100vh',
            padding: '20px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <div className="card" style={{
                backgroundColor: '#343a40',
                color: 'yellow',
                maxWidth: '400px',
                margin: 'auto',
                borderRadius: '8px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                padding: '20px'
            }}>
                <div className="card-header">
                    <h1>Cadastro do Pet</h1>
                </div>
                <div className="card-body">
                    <form>
                        <div className="mb-3">
                            <label htmlFor="nome" className="form-label">Nome</label>
                            <input
                                type="text"
                                className="form-control"
                                value={objeto.nome}
                                onChange={e => atualizarCampo('nome', e.target.value)}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="raca" className="form-label">Raça</label>
                            <input
                                type="text"
                                className="form-control"
                                value={objeto.raca}
                                onChange={e => atualizarCampo('raca', e.target.value)}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="sexo" className="form-label">Sexo</label>
                            <input
                                type="text"
                                className="form-control"
                                value={objeto.sexo}
                                onChange={e => atualizarCampo('sexo', e.target.value)}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="imagem" className="form-label">Imagem do Pet</label>
                            <input
                                type="text"
                                className="form-control"
                                value={objeto.imagem}
                                onChange={e => atualizarCampo('imagem', e.target.value)}
                                placeholder="Insira a URL da imagem do pet"
                                style={{ fontStyle: 'italic' }}
                            />
                        </div>
                    </form>
                </div>
                <div className="card-footer d-flex justify-content-center">
                    <button
                        type="button"
                        className="btn btn-primary"
                        style={{
                            backgroundColor: 'blue',
                            borderColor: 'blue',
                        }}
                        onClick={e => salvar(e)}
                    >
                        Cadastrar
                    </button>
                </div>
            </div>

            {preview && (
                <div className="card" style={{
                    backgroundColor: '#343a40',
                    color: 'yellow',
                    maxWidth: '400px',
                    margin: '20px auto',
                    borderRadius: '8px',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                    padding: '20px'
                }}>
                    <div className="card-header">
                        <h2>Prévia do Cadastro</h2>
                    </div>
                    <div className="card-body">
                        <img src={preview.imagem} alt={preview.nome} style={{ width: '100%', borderRadius: '8px' }} />
                        <h5>Nome: {preview.nome}</h5>
                        <p>Raça: {preview.raca}</p>
                        <p>Sexo: {preview.sexo}</p>
                    </div>
                </div>
            )}

            <footer style={{
                backgroundColor: 'black',
                color: 'yellow',
                textAlign: 'center',
                padding: '10px',
                position: 'fixed',
                left: 0,
                bottom: 0,
                width: '100%',
            }}>
                <p>Feito por Mayller - Trabalho Fullstack</p>
            </footer>
        </div>
    );
};

export default AdicionarPet;