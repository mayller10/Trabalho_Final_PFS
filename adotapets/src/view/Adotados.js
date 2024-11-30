import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Adotados = () => {
  const [objetos, setObjetos] = useState([]);
  
  const [mensagem, setMensagem] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:5196/adocao", { withCredentials: true })
      .then((resp) => {
        console.log(resp.data);
        
        setObjetos(resp.data);
      })
      .catch((erro) => {
        console.log(erro);
      });
  }, []);

  const handleLogout = () => {
    console.log("Logout realizado");
    navigate('/');
  };

  const handleCancelarAdocao = (id) => {
    setObjetos(prevObjetos => 
      prevObjetos.filter(animal => animal.id !== id) 
    );
    setMensagem("Adoção cancelada com sucesso!");
  };

  return (
    <div>
      {/* Navbar */}
      <nav style={{ 
        backgroundColor: '#f8f9fa', 
        padding: '10px', 
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)', 
        marginBottom: '20px' 
      }}>
        <ul style={{ 
          listStyleType: 'none', 
          display: 'flex', 
          justifyContent: 'space-around', 
          margin: 0, 
          padding: 0 
        }}>
          <li><a href="/usuario/home" style={{ textDecoration: 'none', color: 'black', fontWeight: 'bold' }}>Home</a></li>
          <li><a href="/usuario/adotados" style={{ textDecoration: 'none', color: 'black', fontWeight: 'bold' }}>Adotados</a></li>
          <li>
            <button 
              onClick={handleLogout} 
              style={{ 
                background: 'none', 
                border: 'none', 
                color: 'black', 
                cursor: 'pointer', 
                fontWeight: 'bold' 
              }}
            >
              Logout
            </button>
          </li>
        </ul>
      </nav>

      {/* Conteúdo Principal */}
      <div style={{
          position: 'relative',
          minHeight : '100vh',
          padding: '20px',
          color: '#fff',
        }}
      >
        <div style={{
          backgroundImage: 'url("https://img.freepik.com/vetores-gratis/quadro-com-vetor-de-caes-em-fundo-branco_53876-127700.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          opacity: 0.7,
          zIndex: -1
        }}></div>

        <h1 className="text-center my-4" style={{ color: 'black' }}>Adote um Amigo!</h1>
        <p className="text-center mb-4" style={{ color: 'black' }}>Encontre seu novo companheiro entre os nossos animais disponíveis para adoção.</p>
        
        {mensagem && <div className="alert alert-success text-center">{mensagem}</div>}

        <ul className="list-group" style={{ maxWidth: '600px', margin: '0 auto' }}>
          {objetos.map(animal => (
            <li className="list-group-item" key={animal.id} style={{ display: 'flex', alignItems: 'center', backgroundColor: '#333', color: 'yellow' }}>
              <img src={animal.pet.url} alt={animal.pet.nome} style={{ width: '100px', height: 'auto', marginRight: '20px' }} />
              <div>
                <h5 className="mb-1">{animal.pet.nome}</h5>
                <h6 className="mb-1">Raça: {animal.pet.raca}</h6>
                <p className="mb-1">Sexo: {animal.pet.sexo}</p>
                <button 
                  type="button" 
                  className="btn" 
                  style={{ 
                    backgroundColor: 'red', 
                    borderColor: 'red', 
                    fontWeight: 'bold', 
                    color: 'white' 
                  }} 
                  onClick={() => handleCancelarAdocao(animal.id)} 
                >
                  Cancelar Adoção
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Rodapé */}
      <footer style={{ 
        backgroundColor: 'black', 
        color: 'yellow', 
        textAlign: 'center', 
        padding: '10px 0', 
        position: 'relative', 
        bottom: 0, 
        width: '100%' 
      }}>
        <p>Feito por Mayller - Trabalho Fullstack</p>
      </footer>
    </div>
  );
};

export default Adotados;