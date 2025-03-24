import { useEffect, useState } from "react";
import Board from "../elements/Board";


function MainPage(){
    return (
        <>
            <div className="w-[100%] h-[100%] flex justify-center p-[50px]">
                <Board/>
            </div>
        </>
    )
}

export default MainPage;