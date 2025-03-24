import { useEffect, useState } from "react";

function moveFigure(
  figure,
  position,
  color,
  setPole,
  pole,
  stateOfFigure,
  setStateOfFigure
) {
  let tempedpole = [...pole];
  if (stateOfFigure === 0) {
    setStateOfFigure((prev) => position);
  } else if (stateOfFigure !== 0) {
    tempedpole[stateOfFigure].figure = "empty";
    tempedpole[position].figure = "figure";
    setStateOfFigure(0);
  }
  console.log(figure, position, stateOfFigure);
  setPole(tempedpole);
}
function Header() {
  const [pole, setPole] = useState([{}]);
  const [stateOfFigure, setStateOfFigure] = useState(0);
  let tempedpole = [];
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      tempedpole.push({
        index: i % 2 === 0 ? (j % 2 === 0 ? 0 : 1) : j % 2 === 0 ? 1 : 0,
        figure: "empty",
      });
    }
  }
  useEffect(() => {
    setPole(tempedpole);
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
              item.index === 0 ? "bg-white" : "bg-black text-white"
            } hover:bg-gray-400 transition flex justify-center items-center`}
          >
            {item.figure}
          </div>
        ))}
      </div>
    </>
  );
}

export default Header;
