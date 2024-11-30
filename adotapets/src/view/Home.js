import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [objetos, setObjetos] = useState([]);
  const idUsuario = localStorage.getItem('usuario-id');

  useEffect(() => {
    axios
      .get("http://localhost:5196/pet", { withCredentials: true })
      .then((resp) => {
        setObjetos(resp.data);
      })
      .catch((erro) => {
        console.log(erro);
      });
  }, []);
  
  const [mensagem, setMensagem] = useState("");
  const navigate = useNavigate();

  const handleLogout = () => {    
    axios.get(`http://localhost:5196/logout`, { withCredentials: true });
    localStorage.removeItem("usuario-nome");
    localStorage.removeItem("usuario-id");
    navigate("/");
  };

  const handleAdotar = (id) => {

    const animal = objetos.find(animal => 
      animal.id === id
    );
    const adocao = {
      "pet": {
        "id": animal.id,
      },
      "usuario": {
        "id": idUsuario,
      }
    }
    axios.post(`http://localhost:5196/adocao`, adocao , { withCredentials: true } ).then(() => {
      navigate("/usuario/adotados");
    }).catch(erro => { console.log(erro) });

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
                <img src={animal.url} className="card-img-top" alt={animal.nome} />
                <div className="card-body">
                  <h5 className="card-title">{animal.nome}</h5>
                  <h6 className="card-text">Raça: {animal.raca}</h6>
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