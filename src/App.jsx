import { useEffect, useState } from "react";
import "./App.css";

const width = 8;
const candyColor = [
  "bg-red-500",
  "bg-blue-500",
  "bg-green-500",
  "bg-orange-500",
  "bg-purple-500",
  "bg-yellow-500",
];

function App() {
  const [currentColorArrangement, setCurrentColorArrangement] = useState([]);

  // generating the random  colors from the given array
  const createBoard = () => {
    const randomColorArrangement = [];
    for (let i = 0; i < width * width; i++) {
      const randomColor =
        candyColor[Math.floor(Math.random() * candyColor.length)];
      randomColorArrangement.push(randomColor);
      setCurrentColorArrangement(randomColorArrangement);
    }
  };

  useEffect(() => {
    createBoard();
  }, []);

  // move the squres
  const moveIntoSquareBelow = () => {
    for (let i = 0; i < 64 - width; i++) {
      if (currentColorArrangement[i] + width === "") {
        currentColorArrangement[i + width] = currentColorArrangement[i];
        currentColorArrangement[i] = "";
      }
    }
  };
  // check for column 3
  const checkForColumnOfThree = () => {
    for (let i = 0; i <= 47; i++) {
      const columnOfThree = [i, i + width, i + width * 2];
      const decidedColor = currentColorArrangement[i];

      if (
        columnOfThree.every((square) => currentColorArrangement[square]) ===
        decidedColor
      ) {
        columnOfThree.forEach(
          (square) => (currentColorArrangement[square] = "")
        );
      }
    }
  };
  // check for column 4
  const checkForColumnOfFour = () => {
    for (let i = 0; i <= 37; i++) {
      const columnOfFour = [i, i + width, i + width * 2, i + width * 3];
      const decidedColor = currentColorArrangement[i];

      if (
        columnOfFour.every((square) => currentColorArrangement[square]) ===
        decidedColor
      ) {
        columnOfFour.forEach(
          (square) => (currentColorArrangement[square] = "")
        );
      }
    }
  };

  // check for row 3
  const checkForRowOfThree = () => {
    for (let i = 0; i <= 64; i++) {
      const RowOfThree = [i, i + 1, i + 2];
      const decidedColor = currentColorArrangement[i];
      const notValid = [
        6, 7, 14, 15, 22, 23, 30, 31, 38, 39, 46, 47, 54, 55, 62, 63,
      ];

      if (notValid.includes(i)) continue;

      if (
        RowOfThree.every((square) => currentColorArrangement[square]) ===
        decidedColor
      ) {
        RowOfThree.forEach((square) => (currentColorArrangement[square] = ""));
      }
    }
  };

  // check for row 4
  const checkForRowOfFour = () => {
    for (let i = 0; i <= 64; i++) {
      const RowOfFour = [i, i + 1, i + 2];
      const decidedColor = currentColorArrangement[i];
      const notValid = [
        5, 6, 7, 13, 14, 15, 21, 22, 23, 29, 30, 31, 37, 38, 39, 45, 46, 47, 53,
        54, 55, 61, 62, 63,
      ];

      if (notValid.includes(i)) continue;

      if (
        RowOfFour.every((square) => currentColorArrangement[square]) ===
        decidedColor
      ) {
        RowOfFour.forEach((square) => (currentColorArrangement[square] = ""));
      }
    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      checkForColumnOfFour();
      checkForRowOfFour();
      checkForColumnOfThree();
      checkForRowOfThree();
      moveIntoSquareBelow();
      setCurrentColorArrangement([...currentColorArrangement]);
    }, [1000]);
    return () => clearInterval(timer);
  }, [
    currentColorArrangement,

    checkForColumnOfFour,
    checkForRowOfFour,
    checkForColumnOfThree,
    checkForRowOfThree,
    moveIntoSquareBelow,
  ]);

  return (
    <div className="max-w-screen-2xl bg-slate-600 py-5 ">
      <div
        className="flex flex-wrap"
        style={{ width: "560px", height: "560px", margin: "0 auto" }}
      >
        {currentColorArrangement.map((item, idx) => (
          <div>
            {idx}
            <img src="" alt={""} key={idx} className={`${item} w-16 h-16`} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
