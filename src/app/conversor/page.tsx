"use client";
import React, { useState } from "react";
import "./style.css";
import { RomanNumbers } from "../../types";
import Header from "@/components/header";

export default function Conversor(): JSX.Element {
    const [type, setType] = useState<string>("romano");
    const [conversion, setConversion] = useState("");

    const ROMAN_NUMBERS: RomanNumbers = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    };

    const romanToArabicConversion = (): number | JSX.Element => {
        const roman = conversion.toUpperCase();

        if (roman.match(/[^IVXLCDM]/g)) {
            return <span id="error">Por favor, insira um número Romano!</span>;
        }

        const romanArray = roman.split("");
        let arabic = 0;

        for (let i = 0; i < romanArray.length; i++) {
            const currentNum = ROMAN_NUMBERS[romanArray[i]];
            const nextNum = ROMAN_NUMBERS[romanArray[i + 1]];

            if (nextNum && currentNum < nextNum) {
                arabic -= currentNum;
            } else {
                arabic += currentNum;
            }
        }

        return arabic;
    };

    function arabicToRoman(arabic: string | number): string {
        const romanNumbers = [
            ["M", 1000],
            ["CM", 900],
            ["D", 500],
            ["CD", 400],
            ["C", 100],
            ["XC", 90],
            ["L", 50],
            ["XL", 40],
            ["X", 10],
            ["IX", 9],
            ["V", 5],
            ["IV", 4],
            ["I", 1],
        ];

        let roman = "";

        for (const [letter, value] of romanNumbers) {
            while (arabic >= value) {
                roman += letter;
                arabic -= value;
            }
        }

        return roman;
    }

    return (
        <>
            <title>Conversor</title>

            <Header title="Conversor" />

            <main>
                <section className="grid-container">
                    <select
                        name="select"
                        id="select-type"
                        value={type}
                        onChange={(e) => setType(e.target.value)}>
                        <option value="romano">Romano</option>
                        <option value="arabico">Arábico</option>
                    </select>

                    {type === "romano" ? (
                        <label
                            htmlFor="conversion"
                            id="label">
                            Insira um número romano:
                            <input
                                name="conversion"
                                type="text"
                                value={conversion}
                                onChange={(e) => setConversion(e.target.value)}
                            />
                        </label>
                    ) : (
                        <label
                            htmlFor="conversion"
                            id="label">
                            Insira um número arábico:
                            <input
                                name="conversion"
                                type="number"
                                value={conversion}
                                onChange={(e) => setConversion(e.target.value)}
                            />
                        </label>
                    )}

                    {conversion && (
                        <section className="grid-container result-container">
                            Resultado:
                            <span id="result">
                                {type === "romano"
                                    ? romanToArabicConversion()
                                    : arabicToRoman(conversion)}
                            </span>
                        </section>
                    )}
                </section>
            </main>
        </>
    );
}
