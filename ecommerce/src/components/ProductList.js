import React from 'react';
import './ProductList.css';

function ProductList({ produtos, onAdicionarAoCarrinho }) {
  return (
    <div className="produtos-container">
      <h2>Produtos em Destaque</h2>
      <div className="grid-produtos">
        {produtos.map(produto => (
          <div key={produto.id} className="produto">
            <h3>{produto.nome}</h3>
            <p>R$ {produto.preco.toFixed(2)}</p>
            <button onClick={() => onAdicionarAoCarrinho(produto)}>Comprar</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;