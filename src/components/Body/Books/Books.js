import React from "react";
import { useState, useEffect } from "react";
import { Photo, CardBooks, CardBook, ButtonAddToCard } from "./style";
import livros from "../../../db.json";

function Books({
  buscaName,
  buscaOrdem,
  buscaPriceMin,
  buscaPriceMax,
  handleClick,
}) {
  const [books, setBooks] = useState(livros.books);
  const fitData = async () => {
    const data = await livros.json();
    setBooks(data);
  };
  useEffect(() => {
    fitData();
  }, []);

  return (
    <CardBooks>
      {books
        .filter((element) => {
          if (element.price <= buscaPriceMax) {
            return element;
          } else if (!buscaPriceMax) {
            return books;
          }
        })
        .filter((element) => {
          if (element.price >= buscaPriceMin) {
            return element;
          } else if (!buscaPriceMin) {
            return books;
          }
        })
        .filter((element) => {
          if (element.name.toLowerCase().includes(buscaName.toLowerCase())) {
            return element;
          }
        })
        .sort((a, b) => {
          if (buscaOrdem === "Crescente") {
            return a.name.localeCompare(b.name);
          } else if (buscaOrdem === "Decrescente") {
            return b.name.localeCompare(a.name);
          } else if (buscaOrdem === "Preco Crescente") {
            return a.price - b.price;
          } else if (buscaOrdem === "Preco Decrescente") {
            return b.price - a.price;
          } else if (buscaOrdem === "Sort") {
            return books;
          }
        })

        .map((element, index) => (
          <CardBook key={index}>
            <Photo src={element.image}></Photo>
            <ButtonAddToCard onClick={() => handleClick(element)}>
              ADD TO CARD
            </ButtonAddToCard>
            <p>{element.name}</p>
            <p>{element.price}</p>
            <p>{element.review}</p>
          </CardBook>
        ))}
    </CardBooks>
  );
}

export default Books;
