
class Square extends Vector{

    constructor() {
        this.width = null
        this.height = null
        this.color = null
    }


    setColor(rgb){
        //need to validate
        this.color = rgb
    }

    setWidthAndHeight(w, h){
        //need to validate
        this.width = w
        this.height = h
    }

}

module.exports = Square



// function createSquare(e) {

//     //console.log("worked")
//     //get mouse position
//     let rect = svg.getBoundingClientRect();
//     let x = event.clientX - rect.left - (currentSize * 1.5);
//     let y = event.clientY - rect.top - (currentSize * 1.5);


//     // create the svg element
//     const svg1 = document.createElementNS("http://www.w3.org/2000/svg", "svg");

//     // set width and height
//     svg1.setAttribute("x", x);
//     svg1.setAttribute("y", y);

//     // create a circle
//     const cir1 = document.createElementNS("http://www.w3.org/2000/svg", "rect");
//     cir1.setAttribute("x", currentSize);
//     cir1.setAttribute("y", currentSize);
//     cir1.setAttribute("width", currentSize);
//     cir1.setAttribute("height", currentSize);
//     cir1.setAttribute("fill", "red");
//     cir1.dataset["color"] = "rgb(255, 0, 0)"

//     // attach it to the container
//     svg1.appendChild(cir1);

//     // attach container to document
//     svg.appendChild(svg1);
// }