import Figures from "../elements/Figures";

function getFigureImage(Figure:string){
    let img;
    Figures.forEach((item) => {
        if (item.name === Figure){
            img = item.image
        }
    })
    return img
}

export default getFigureImage;