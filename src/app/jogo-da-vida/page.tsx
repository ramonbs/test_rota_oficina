"use client";
import React, { useEffect, useState, useRef } from "react";
import "./style.css";

const numRows = 10;
const numCols = 10;

function JogoDaVida() {
  const [grid, setGrid] = useState(() => {
    const rows = Array(numRows).fill(Array(numCols).fill(false));
    return rows;
  });

  const [isRunning, setIsRunning] = useState(false);
  const runningRef = useRef(isRunning);
  runningRef.current = isRunning;

  useEffect(() => {
    createGrid();
  }, []);

  useEffect(() => {
    if (isRunning) {
      const intervalId = setInterval(evolveGrid, 1000);
      return () => clearInterval(intervalId);
    }
  }, [isRunning]);

  function createGrid() {
    setGrid((prevGrid) =>
      prevGrid.map((row) => row.map(() => false))
    );
  }

  function evolveGrid() {
    setGrid((prevGrid) => {
      return prevGrid.map((row, rowIndex) => {
        return row.map((cell: string, colIndex: number) => {
          const aliveNeighbors = countAliveNeighbors(prevGrid, rowIndex, colIndex);
          if (cell) {
            return aliveNeighbors === 2 || aliveNeighbors === 3;
          } else {
            return aliveNeighbors === 3;
          }
        });
      });
    });
  }

  function countAliveNeighbors(grid: string[], row: number, col: number) {
    const neighbors = [
      [row - 1, col - 1],
      [row - 1, col],
      [row - 1, col + 1],
      [row, col - 1],
      [row, col + 1],
      [row + 1, col - 1],
      [row + 1, col],
      [row + 1, col + 1],
    ];

    return neighbors.reduce((count, [nRow, nCol]) => {
      if (
        nRow >= 0 &&
        nRow < numRows &&
        nCol >= 0 &&
        nCol < numCols &&
        grid[nRow][nCol]
      ) {
        count++;
      }
      return count;
    }, 0);
  }

  function handleCellClick(row: number, col: number) {
    setGrid((prevGrid) => {
      return prevGrid.map((rowArr, rowIndex) => {
        if (rowIndex === row) {
          return rowArr.map((cell: string, colIndex: number) => {
            if (colIndex === col) {
              return !cell;
            }
            return cell;
          });
        }
        return rowArr;
      });
    });
  }

  function handleStartClick() {
    setIsRunning(!isRunning);
  }

  return (
    <>
      <header>
        <h1>Jogo da Vida</h1>
      </header>
      <main>
        <section className="container">
          {grid.map((row, rowIndex) => (
            <div key={rowIndex} className="row">
              {row.map((cell: string, colIndex: number) => (
                <div
                  key={`${rowIndex}-${colIndex}`}
                  className={`cell ${cell ? "active" : ""}`}
                  onClick={() => handleCellClick(rowIndex, colIndex)}
                  />
                  ))}
            </div>
          ))}
        </section>
        <button onClick={handleStartClick}>{isRunning ? "Stop" : "Start"}</button>
      </main>
    </>
  );
}

export default JogoDaVida;
