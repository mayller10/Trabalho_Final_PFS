import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Adotados = () => {
  const [objetos, setObjetos] = useState([
    {
      id: 1,
      nome: "QQ",
      raça: "Pastor Alemão",
      sexo: "M",
      imagem: "https://cobasi.vteximg.com.br/arquivos/ids/728382/pastor-alemao-filhote.png?v=637593663339670000",
      adotado: true,
      usuario: "João"
    },
    {
      id: 2,
      nome: "Max",
      raça: "Golden Retriever",
      sexo: "M",
      imagem: "https://example.com/golden_retriever.png",
      adotado: true,
      usuario: "Maria"
    },
    {
      id: 3,
      nome: "Luna",
      raça: "Bulldog Francês",
      sexo: "F",
      imagem: "https://example.com/bulldog_frances.png",
      adotado: true,
      usuario: "Carlos"
    },
    {
      id: 4,
      nome: "Bella",
      raça: "Beagle",
      sexo: "F",
      imagem: "https://example.com/beagle.png",
      adotado: true,
      usuario: "Ana"
    },
    {
      id: 5,
      nome: "Charlie",
      raça: "Poodle",
      sexo: "M",
      imagem: "https://example.com/poodle.png",
      adotado: true,
      usuario: "Lucas"
    },
    {
      id: 6,
      nome: "Daisy",
      raça: "Shih Tzu",
      sexo: "F",
      imagem: "https://example.com/shih_tzu.png",
      adotado: true,
      usuario: "Fernanda"
    },
    {
      id: 7,
      nome: "Rocky",
      raça: "Rottweiler",
      sexo: "M",
      imagem: "https://example.com/rottweiler.png",
      adotado: true,
      usuario: "Ricardo"
    },
    {
      id: 8,
      nome: "Molly",
      raça: "Cocker Spaniel",
      sexo: "F",
      imagem: "https://example.com/cocker_spaniel.png",
      adotado: true,
      usuario: "Patrícia"
    },
  ]);
  
  const [mensagem, setMensagem] = useState("");
  const navigate = useNavigate();

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
          <li><a href="/adm/home" style={{ textDecoration: 'none', color: 'black', fontWeight: 'bold' }}>Home</a></li>
          <li><a href="/adm/adotados" style={{ textDecoration: 'none', color: 'black', fontWeight: 'bold' }}>Adotados</a></li>
          <li><a href="/adm/cadastrar" style={{ textDecoration: 'none', color: 'black', fontWeight: 'bold' }}>Adicionar Pet</a></li> {/* Novo item na navbar */}
          <li>
            <button 
              onClick={handleLogout} 
              style={{ 
                background: 'none', 
                border: 'none', color: 'black', 
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
              <img src={animal.imagem} alt={animal.nome} style={{ width: '100px', height: 'auto', marginRight: '20px' }} />
              <div>
                <h5 className="mb-1">{animal.nome}</h5>
                <h6 className="mb-1">Raça: {animal.raça}</h6>
                <p className="mb-1">Sexo: {animal.sexo}</p>
                <p className="mb-1">Adotado por: {animal.usuario}</p>
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
                  Excluir
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>


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