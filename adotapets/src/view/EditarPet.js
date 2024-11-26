import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const EditarPet = () => {
  const [pet, setPet] = useState({
    id: 1,
    nome: "QQ",
    raça: "Pastor Alemão",
    sexo: "M",
    imagem: "https://cobasi.vteximg.com.br/arquivos/ids/728382/pastor-alemao-filhote.png?v=637593663339670000",
    adotado: true,
    usuario: "João"
  });

  const [mensagem, setMensagem] = useState("");
  const navigate = useNavigate();

  const handleLogout = () => {
    console.log("Logout realizado");
    navigate('/');
  };

  const handleSalvarInformacoes = () => {
    
    setMensagem("Informações salvas com sucesso!");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPet(prevPet => ({
      ...prevPet,
      [name]: value
    }));
  };

  return (
    <div style={{ 
      paddingBottom: '50px', 
      backgroundImage: 'url("https://img.freepik.com/vetores-gratis/quadro-com-vetor-de-caes-em-fundo-branco_53876-127700.jpg")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      position: 'relative', 
      minHeight: '100vh' 
    }}>
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

      {/* Card do Pet */}
      <div style={{
          maxWidth: '400px', 
          margin: '0 auto',
          padding: '20px',
          backgroundColor: '#333',
          color: 'yellow',
          borderRadius: '10px',
          opacity: '0.9' 
        }}
      >
        <img src={pet.imagem} alt={pet.nome} style={{ width: '100%', height: 'auto', borderRadius: '10px' }} />
        
        <h5 className="mb-1">
          Nome: 
          <input 
            type="text" 
            name="nome" 
            value={pet.nome} 
            onChange={handleChange} 
            style={{ backgroundColor: '#333', color: 'yellow', border: 'none', width: '100%' }} 
          />
        </h5>
        
        <h6 className="mb-1">
          Raça: 
          <input 
            type="text" 
            name="raça" 
            value={pet.raça} 
            onChange={handleChange} 
            style={{ backgroundColor: '#333', color: 'yellow', border: 'none', width: '100%' }} 
          />
        </h6>
        
        <p className="mb-1">
          Sexo: 
          < input 
            type="text" 
            name="sexo" 
            value={pet.sexo} 
            onChange={handleChange} 
            style={{ backgroundColor: '#333', color: 'yellow', border: 'none', width: '100%' }} 
          />
        </p>
        
        <div style={{ textAlign: 'center' }}> 
          <button 
            type="button" 
            style={{ 
              backgroundColor: 'blue', 
              borderColor: 'blue', 
              fontWeight: 'bold', 
              color: 'white',
              padding: '10px 20px',
              borderRadius: '5px',
              cursor: 'pointer' 
            }} 
            onClick={handleSalvarInformacoes} 
          >
            Salvar Informações
          </button>
        </div>
        {mensagem && <div className="alert alert-success text-center">{mensagem}</div>}
      </div>

      {/* Rodapé */}
      <footer style={{ 
        position: 'fixed', 
        bottom: 0, 
        left: 0, 
        right: 0, 
        backgroundColor: 'black', 
        color: 'yellow', 
        textAlign: 'center', 
        padding: '10px 0' 
      }}>
        <p>Feito por Mayller - Trabalho Fullstack</p>
      </footer>
    </div>
  );
};

export default EditarPet;