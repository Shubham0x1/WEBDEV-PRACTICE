let inputColor = document.getElementById("color-input");
let generateColor = document.getElementById("generate-color");
let randomColor= document.getElementById("random-color");

generateColor.addEventListener("click", (e) => {
    if(inputColor.value!= ""){
        document.body.style.backgroundColor= inputColor.value;
    }
    inputColor.value = "";
});

randomColor.addEventListener("click", (e) => {
    document.body.style.backgroundColor = generate_random_color();
    inputColor.value = "";
});

function generate_random_color(){
    let hue= Math.random()*360;
    let saturation= Math.random()*100;
    let lightness = Math.random()*100;
    let alphaValue= Math.random();
    let color = `hsla(${hue}, ${saturation}%, ${lightness}%, ${alphaValue})`;
    return color;
}