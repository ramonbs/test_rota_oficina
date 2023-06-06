"use client";
import React, { FormEvent } from "react";
import "./style.css";
import { useState } from "react";
import { Product } from "../../types";
import Header from "@/components/header";

function Calculadora(): JSX.Element {
    const [nomeProduto, setNomeProduto] = useState("");
    const [valorProduto, setValorProduto] = useState(0);
    const [quantidadeProduto, setQuantidadeProduto] = useState(0);
    const [nomePessoa, setNomePessoa] = useState('');
    const [products, setProducts] = useState<Product[]>([]);

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        const product: Product = {
            nomeProduto,
            valorProduto,
            quantidadeProduto,
            nomePessoa
        }

        setProducts([...products, product]);
    }

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

                    <button type="submit">
                        Adicionar produto
                    </button>
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
                            {products.map((product, index) => (
                                <tr key={index}>
                                    <td>{product.nomeProduto}</td>
                                    <td>{product.valorProduto}</td>
                                    <td>{product.quantidadeProduto}</td>
                                    <td>{product.nomePessoa}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    <div className="total">
                        <h2>Total:</h2>
                        <p>
                            {products.reduce((acc, product) => {
                                return acc + (product.valorProduto * product.quantidadeProduto);
                            }
                                , 0)}
                        </p>
                    </div>

                    <div>
                        <h2>Valor por pessoa:</h2>
                        <p>
                            {products.reduce((acc, product) => {
                                return acc + (product.valorProduto * product.quantidadeProduto);
                            }
                                , 0) / products.length}
                        </p>

                    </div>

                    <div>
                        <h2>Valor unitário com acréscimo:</h2>
                        <p>
                            {products.reduce((acc, product) => {
                                return acc + (product.valorProduto * product.quantidadeProduto) * 1.1;
                            }
                                , 0) / products.length}
                        </p>
                        
                    </div>
                </section>
            </main>
        </>
    );
}

export default Calculadora;
