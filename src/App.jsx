import "./App.css";

const width = 8;
const candyColor = [
  "bg-red-800",
  "bg-blue-800",
  "bg-green-800",
  "bg-orange-800",
  "bg-purple-800",
  "bg-yellow-800",
];

function App() {
  const createBoard = () => {
    const randomColorArrangement = [];
    for (let i = 0; i < width * width; i++) {
      const randomColor =
        candyColor[Math.floor(Math.random() * candyColor.length)];
      randomColorArrangement.push(randomColor);
    }

    createBoard();
  };
  return (
    <div className="max-w-screen-2xl bg-purple-600 ">
      <h1 className="text-5xl text-white ">candy crush</h1>
    </div>
  );
}

export default App;
