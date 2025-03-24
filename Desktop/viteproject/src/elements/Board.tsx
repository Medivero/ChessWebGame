import { useEffect, useState } from "react";
import Figures from "./Figures";

function GenerateBoard() {
  let tempedpole = [];
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      tempedpole.push({
        index: i % 2 === 0 ? (j % 2 === 0 ? 0 : 1) : j % 2 === 0 ? 1 : 0,
        figure: "empty",
        color: "empty",
      });
    }
  }
  for (let i = 8; i < 16; i++){
    tempedpole[i].figure = "WhitePawn";
    tempedpole[i].color = "White"
  }
  for (let i = 48; i < 56; i++) {
    tempedpole[i].figure = "BlackPawn";
    tempedpole[i].color = "Black";
  }
  return tempedpole;
}

function moveFigure(
  figure: string,
  position: number,
  color: string,
  setPole: Function,
  pole: [item: { figure: string; index: number; color: string }],
  stateOfFigure: number,
  setStateOfFigure: Function
) {
  let tempedpole = [...pole];
  if (stateOfFigure === 0 && tempedpole[position].figure !== "empty") {
    setStateOfFigure(position);
  } else if (stateOfFigure !== 0 && tempedpole[position].figure === "empty") {
    if (position === (stateOfFigure-8 || stateOfFigure-16) || position === (stateOfFigure+8 || stateOfFigure+16)){
    let CurrentColor = tempedpole[stateOfFigure].color;
    let CurrentFigure = tempedpole[stateOfFigure].figure;
    tempedpole[stateOfFigure].figure = "empty";
    tempedpole[position].figure = CurrentFigure;
    tempedpole[position].color = CurrentColor;
      setStateOfFigure(0);
      setPole(tempedpole);
    }
  }
}
function Board() {
  const [pole, setPole] = useState([{}]);
  const [stateOfFigure, setStateOfFigure] = useState(0);

  useEffect(() => {
    setPole(GenerateBoard());
  }, []);
  return (
    <>
      <div className="w-[500px] flex flex-wrap">
        {pole.map((item, index) => (
          <div
            onClick={() =>
              moveFigure(
                item.figure,
                index,
                "",
                setPole,
                pole,
                stateOfFigure,
                setStateOfFigure
              )
            }
            key={index}
            className={`cursor-pointer w-[60px] h-[60px] ${
              item.index === 0 ? "bg-white" : "bg-gray-500 text-white"
            } hover:bg-gray-400 transition flex justify-center items-center ${stateOfFigure !== 0 && stateOfFigure === index? 'border border-solid border-red-700 border-[3px]': ''}`}
          >
            {item.figure === "empty" ? "" : <img src={`src/assets/figures/${item.figure}.png`}></img>}
          </div>
        ))}
      </div>
    </>
  );
}

export default Board;
