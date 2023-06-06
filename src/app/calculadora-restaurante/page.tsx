'use client'
import React, { FormEvent, useState } from "react";
import "./style.css";
import { Product } from "../../types";
import Header from "@/components/header";

function Calculadora(): JSX.Element {
  const [nomeProduto, setNomeProduto] = useState("");
  const [valorProduto, setValorProduto] = useState(0);
  const [quantidadeProduto, setQuantidadeProduto] = useState(0);
  const [nomePessoa, setNomePessoa] = useState("");
  const [products, setProducts] = useState<Product[]>([]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const newProduct: Product = {
      nomePessoa: nomePessoa,
      nomeProduto: nomeProduto,
      valorProduto: valorProduto,
      quantidadeProduto: quantidadeProduto,
    };

    if (!nomeProduto || !valorProduto || !quantidadeProduto || !nomePessoa) {
      alert("Preencha todos os campos!");
      return;
    }

    setProducts([...products, newProduct]);
  };

  const calculateTotalSpends = (personName: string): number => {
    return products.reduce((total, product) => {
      if (product.nomePessoa === personName) {
        return total + product.valorProduto * product.quantidadeProduto;
      }
      return total;
    }, 0);
  };

  return (
    <>
      <Header title="Calculadora de Restaurante" />

      <main>
        <form className="container" onSubmit={(e) => handleSubmit(e)}>
          <label htmlFor="">
            <span>Nome do produto:</span>
            <input
              type="text"
              name=""
              id=""
              value={nomeProduto}
              onChange={(e) => setNomeProduto(e.target.value)}
            />
          </label>

          <label htmlFor="">
            <span>Valor do produto:</span>
            <input
              type="number"
              name=""
              id=""
              value={valorProduto}
              onChange={(e) => setValorProduto(+e.target.value)}
            />
          </label>

          <label htmlFor="">
            <span>Quantidade do produto:</span>
            <input
              type="number"
              name=""
              id=""
              value={quantidadeProduto}
              onChange={(e) => setQuantidadeProduto(+e.target.value)}
            />
          </label>

          <label htmlFor="">
            <span>Insira o nome da pessoa que consumiu o produto:</span>
            <input
              type="text"
              name=""
              id=""
              value={nomePessoa}
              onChange={(e) => setNomePessoa(e.target.value)}
            />
          </label>

          <button type="submit">Adicionar produto</button>
        </form>

        <section className="table">
          <table>
            <thead>
              <tr>
                <th>Nome do produto</th>
                <th>Valor do produto</th>
                <th>Quantidade do produto</th>
                <th>Nome da pessoa</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product: Product, index) => (
                <tr key={index}>
                  <td>{product.nomeProduto}</td>
                  <td>{product.valorProduto}</td>
                  <td>{product.quantidadeProduto}</td>
                  <td>{product.nomePessoa}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <div>
            <h2>Valor total da conta por pessoa:</h2>
            {Array.from(new Set(products.map((product) => product.nomePessoa))).map((personName) => (
              <div key={personName}>
                <p>{personName}:</p>
                <p>R$ {calculateTotalSpends(personName)}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}

export default Calculadora;
