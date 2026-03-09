const increasebtn = document.querySelector('.increase-btn');
const decreasebtn = document.querySelector('.decrease-btn');
const counterHeading = document.querySelector(".counter");

let counter=0;

increasebtn.addEventListener("click", () => {
    counter+= 1;
    counterHeading.textContent=counter;
});

decreasebtn.addEventListener("click" , () => {
    if(counter <0){
        return;
    }
    counter= Math.max(0, counter-1);
    counterHeading.textContent=counter;
})


