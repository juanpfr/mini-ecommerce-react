import React, { useState } from 'react';
import './App.css'
import Header from './components/Header';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import LoginModal from './components/LoginModal';
import ProductList from './components/ProductList';
import CarrinhoModal from './components/CarrinhoModal';

function App() {
  const [mostrarModalLogin, setMostrarModalLogin] = useState(false);
  const [mostrarCarrinho, setMostrarCarrinho] = useState(false);
  const [carrinho, setCarrinho] = useState([]);

  const produtos = [
    { id: 1, nome: 'Camisa Loja Gambeta', preco: 59.90 },
    { id: 2, nome: 'Boné Estiloso', preco: 39.90 },
    { id: 3, nome: 'Tênis Urbano', preco: 129.90 }
  ];

  const abrirModalLogin = () => setMostrarModalLogin(true);
  const fecharModalLogin = () => setMostrarModalLogin(false);
  const abrirCarrinho = () => setMostrarCarrinho(true);
  const fecharCarrinho = () => setMostrarCarrinho(false);

  const adicionarAoCarrinho = (produto) => {
    setCarrinho([...carrinho, produto]);
  };

  const removerItemDoCarrinho = (index) => {
    const novoCarrinho = [...carrinho];
    novoCarrinho.splice(index, 1);
    setCarrinho(novoCarrinho);
  };

  return (
    <div class="body">
      <Header>
        <button 
          onClick={abrirCarrinho} 
          style={{
            background: 'none', 
            border: '1px solid #ccc', 
            padding: '8px 16px', 
            borderRadius: '5px', 
            cursor: 'pointer',
            marginLeft: '20px'
          }}
        >
          Ver Carrinho ({carrinho.length})
        </button>
      </Header>

      <HeroSection onLoginClick={abrirModalLogin} />
      <ProductList produtos={produtos} onAdicionarAoCarrinho={adicionarAoCarrinho} />

      {mostrarModalLogin && <LoginModal onClose={fecharModalLogin} />}
      
      {mostrarCarrinho && (
        <CarrinhoModal
          carrinho={carrinho}
          onFechar={fecharCarrinho}
          onRemoverItem={removerItemDoCarrinho}
        />
      )}

      <Footer />
    </div>
  );
}

export default App;