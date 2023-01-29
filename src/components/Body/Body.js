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
  return (
    <Container>
      <BoxTitle>
        <ParagraphUp>3 For €20</ParagraphUp>
        <ParagraphDown>The 3 For €20 Multibuy or €9.99 Each</ParagraphDown>
      </BoxTitle>
      <BoxSortBy>
        <div>
          <label htmlFor="name"> buscar</label>
          <input
            type="text"
            id="name"
            value={buscaName}
            onChange={(event) => {
              setBuscaName(event.target.value);
            }}></input>
          <label htmlFor="priceMax"> priceMax</label>
          <input
            type="number"
            id="priceMax"
            value={buscaPriceMax}
            onChange={(event) => {
              setBuscaPriceMax(event.target.value);
            }}></input>
          <label htmlFor="priceMin"> PriceMIN</label>
          <input
            type="number"
            id="priceMin"
            value={buscaPriceMin}
            onChange={(event) => {
              setBuscaPriceMin(event.target.value);
            }}></input>
        </div>
        <div>TypeShow</div>
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
      />
    </Container>
  );
}
