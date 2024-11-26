import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const HomeADM = () => {
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
    
  ]);

  const [mensagem, setMensagem] = useState("");
  const navigate = useNavigate();

  const handleLogout = () => {
    console.log("Logout realizado");
    navigate('/');
  };

  const handleDelete = (id) => {
    setObjetos(objetos.filter(animal => animal.id !== id));
    setMensagem("Animal excluído com sucesso!");
  };

  const handleEdit = (id) => {
    
    console.log(`Editar animal com id: ${id}`);
    navigate('/adm/editar');

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
          <li><a href="/adm/home" style={{ textDecoration: 'none', color: 'black', fontWeight: 'bold' }}>Home</a></li>
          <li><a href="/adm/adotados" style={{ textDecoration: 'none', color: 'black', fontWeight: 'bold' }}>Adotados</a></li>
          <li><a href="/adm/cadastrar" style={{ textDecoration: 'none', color: 'black', fontWeight: 'bold' }}>Adicionar Pet</a></li>
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

        <div className="row row-cols-1 row-cols-md-3 g-4">
          {objetos.map(animal => (
            <div className="col" key={animal.id}>
              <div 
                className="card h-100" 
                style={{ 
                  backgroundColor: '#333', 
                  color: 'yellow', 
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' 
                }}
              >
                <img src={animal.imagem} className="card-img-top" alt={animal.nome} />
                <div className="card-body">
                  <h5 className="card-title">{animal.nome}</h5>
                  <h6 className="card-text">Raça: {animal.raça}</h6>
                  <p className="card-text">Sexo: {animal.sexo}</p>
 <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <button 
                      onClick={() => handleDelete(animal.id)} 
                      style={{ backgroundColor: 'red', color: 'white', border: 'none', padding: '5px 10px', cursor: 'pointer' }}
                    >
                      Excluir
                    </button>
                    <button 
                      onClick={() => handleEdit(animal.id)} 
                      style={{ backgroundColor: 'blue', color: 'white', border: 'none', padding: '5px 10px', cursor: 'pointer' }}
                    >
                      Editar
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

export default HomeADM;