import React, { useState } from "react";
import Books from "./Books/Books";
import {
  Container,
  BoxTitle,
  ParagraphUp,
  ParagraphDown,
  BoxSortBy,
} from "./style";

export default function Body() {
  const [buscaName, setBuscaName] = useState("");
  const [buscaOrdem, setBuscaOrdem] = useState("");
  const [buscaPriceMax, setBuscaPriceMax] = useState();
  const [buscaPriceMin, setBuscaPriceMin] = useState();

  const [cart, setCart] = useState([]);

  const handleClick = (product) => {
    const filterProduct = {
      name: product.name,
      price: product.price,
      quantity: 1,
    };

    setCart([...cart, filterProduct]);
  };

  const handleRemove = (index) => {
    setCart((remove) => remove.filter((_, i) => i !== index));
  };

  return (
    <Container>
      <BoxTitle>
        <ParagraphUp>3 For €20</ParagraphUp>
        <ParagraphDown>
          <span class="material-symbols-outlined">shopping_cart</span>

          <div>
            <p>
              Valor total: ${cart.reduce((acc, item) => acc + item.price, 0)}
            </p>
            <p>
              Quantidade de Livros:
              {cart.reduce((ac, book) => ac + book.quantity, 0)}
            </p>
          </div>

          {cart.map((element, index) => (
            <div key={index}>
              <div>
                {element.index}Nome: {element.name}
              </div>
              <div> -Preço:R$ {element.price}</div>
              <button onClick={() => handleRemove(index)}>
                <div class="material-symbols-outlined">delete</div>
              </button>
            </div>
          ))}
        </ParagraphDown>
      </BoxTitle>
      <BoxSortBy>
        <div>
          <label htmlFor="name"> Buscar</label>
          <input
            type="text"
            id="name"
            value={buscaName}
            onChange={(event) => {
              setBuscaName(event.target.value);
            }}></input>
          <label htmlFor="priceMax"> Price Max</label>
          <input
            type="number"
            id="priceMax"
            value={buscaPriceMax}
            onChange={(event) => {
              setBuscaPriceMax(event.target.value);
            }}></input>
          <label htmlFor="priceMin"> Price Min</label>
          <input
            type="number"
            id="priceMin"
            value={buscaPriceMin}
            onChange={(event) => {
              setBuscaPriceMin(event.target.value);
            }}></input>
        </div>
        <select
          value={buscaOrdem}
          onChange={(event) => {
            setBuscaOrdem(event.target.value);
          }}>
          <option value="Sort">Sort</option>
          <option value="Crescente">Crescente</option>
          <option value="Decrescente">Decrescente</option>
          <option value="Preco Crescente">Preco Crescente</option>
          <option value="Preco Decrescente">Preco Decrescente</option>
        </select>
      </BoxSortBy>
      <Books
        buscaName={buscaName}
        buscaOrdem={buscaOrdem}
        buscaPriceMin={buscaPriceMin}
        buscaPriceMax={buscaPriceMax}
        setBuscaName={setBuscaName}
        setBuscaPriceMax={setBuscaPriceMax}
        setBuscaOrdem={setBuscaOrdem}
        setBuscaPriceMin={setBuscaPriceMin}
        handleClick={handleClick}
      />
    </Container>
  );
}
