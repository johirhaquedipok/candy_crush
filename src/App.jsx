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

  // check matching for column of three
  /*   const checkForColumnOfThree = () => {
    for (let i = 0; i <= 47; i++) {
      const columnOfThree = [i, i + width, i + width * 2];
      const decidedColor = currentColorArrangement[i];

      if (
        columnOfThree.every((square) => currentColorArrangement[square]) ===
        decidedColor
      ) {
        columnOfThree.forEach((square) => {
          return (currentColorArrangement[square] = "");
        });
      }
    }
  }; */

  useEffect(() => {
    createBoard();
  }, []);

  useEffect(() => {
    const checkForColumnOfThree = () => {
      for (let i = 0; i <= 47; i++) {
        const columnOfThree = [i, i + width, i + width * 2];
        const decidedColor = currentColorArrangement[i];

        if (
          columnOfThree.every((square) => currentColorArrangement[square]) ===
          decidedColor
        ) {
          columnOfThree.forEach((square) => {
            return (currentColorArrangement[square] = "");
          });
        }
      }
    };

    const timer = setInterval(() => {
      checkForColumnOfThree();
      setCurrentColorArrangement([...currentColorArrangement]);
    }, [100]);
    return () => clearInterval(timer);
  }, [currentColorArrangement]);

  return (
    <div className="max-w-screen-2xl bg-slate-600 py-5 ">
      <div
        className="flex flex-wrap"
        style={{ width: "560px", height: "560px", margin: "0 auto" }}
      >
        {currentColorArrangement.map((item, idx) => (
          <div key={idx} className={`${item} w-16 h-16 `}>
            {idx}
            <img src="" alt="" className="w-full h-full" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
