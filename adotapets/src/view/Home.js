import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [objetos, setObjetos] = useState([
    {
      id: 1,
      nome: "QQ",
      raça: "Pastor Alemão",
      sexo: "M",
      imagem: "https://cobasi.vteximg.com.br/arquivos/ids/728382/pastor-alemao-filhote.png?v=637593663339670000"
    },
    {
      id: 2,
      nome: "Max",
      raça: "Golden Retriever",
      sexo: "M",
      imagem: "https://example.com/golden_retriever.png"
    },
    {
      id: 3,
      nome: "Luna",
      raça: "Bulldog Francês",
      sexo: "F",
      imagem: "https://example.com/bulldog_frances.png"
    },
    {
      id: 4,
      nome: "Bella",
      raça: "Beagle",
      sexo: "F",
      imagem: "https://example.com/beagle.png"
    },
    {
      id: 5,
      nome: "Charlie",
      raça: "Poodle",
      sexo: "M",
      imagem: "https://example.com/poodle.png"
    },
    {
      id: 6,
      nome: "Daisy",
      raça: "Shih Tzu",
      sexo: "F",
      imagem: "https://example.com/shih_tzu.png"
    },
    {
      id: 7,
      nome: "Rocky",
      raça: "Rottweiler",
      sexo: "M",
      imagem: "https://example.com/rottweiler.png"
    },
    {
      id: 8,
      nome: "Molly",
      raça: "Cocker Spaniel",
      sexo: "F",
      imagem: "https://example.com/cocker_spaniel.png"
    },
  ]);
  
  const [mensagem, setMensagem] = useState("");
  const navigate = useNavigate();

  const handleLogout = () => {
    console.log("Logout realizado");
    navigate('/login');
  };

  const handleAdotar = (id) => {
    setObjetos(prevObjetos => 
      prevObjetos.map(animal => 
        animal.id === id ? { ...animal, adotado: true } : animal
      )
    );
    setMensagem("Adoção realizada com sucesso!");
  };

  if (!objetos) {
    return <div>Carregando...</div>
  }

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
          <li><a href="/" style={{ textDecoration: 'none', color: 'black', fontWeight: 'bold' }}>Home</a></li>
          <li><a href="/adotados" style={{ textDecoration: 'none', color: 'black', fontWeight: 'bold' }}>Adotados</a></li>
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
          minHeight: '100vh',
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

        <div className="row row-cols-1 row-cols-md-3 g-4">
          {objetos.map(animal => (
            <div className="col" key={animal.id}>
              <div 
                className="card h-100" 
                style={{ 
                  backgroundColor: '#333', 
                  color: 'yellow', 
                  opacity: animal.adotado ? 0.5 : 1, 
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' 
                }}
              >
                <img src={animal.imagem} className="card-img-top" alt={animal.nome} />
                <div className="card-body">
                  <h5 className="card-title">{animal.nome}</h5>
                  <h6 className="card-text">Raça: {animal.raça}</h6>
                  <p className="card-text">Sexo: {animal.sexo}</p>
                  <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <button 
                      type="button" 
                      className="btn" 
                      style={{ 
                        backgroundColor: animal.adotado ? 'gray' : 'green', 
                        borderColor: animal.adotado ? 'gray' : 'green', 
                        cursor: animal.adotado ? 'not-allowed' : 'pointer', 
                        fontWeight: 'bold', 
                        color: 'white' 
                      }} 
                      onClick={() => !animal.adotado && handleAdotar(animal.id)} 
                      disabled={animal.adotado}
                    >
                      {animal.adotado ? 'Adotado' : 'Adotar'}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
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

export default Home;