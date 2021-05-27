const btn = document.querySelector("#btn1");
const lb1 = document.querySelector("#rate1");
const lb2 = document.querySelector("#rate2");
const lb3 = document.querySelector("#rate3");
const lb4 = document.querySelector("#rate4");
const lb5 = document.querySelector("#rate5");
const lb6 = document.querySelector("#rate6");
const lb7 = document.querySelector("#rate7");
const lb8 = document.querySelector("#rate8");
const lb9 = document.querySelector("#rate9");
const lb10 = document.querySelector("#rate10");
const lb11 = document.querySelector("#rate11");
const lb12 = document.querySelector("#rate12");
const lb13 = document.querySelector("#rate13");
const lb14 = document.querySelector("#rate14");
const lb15 = document.querySelector("#rate15");
const lb16 = document.querySelector("#rate16");
const lb17 = document.querySelector("#rate17");
const lb18 = document.querySelector("#rate18");
const lb19 = document.querySelector("#rate19");
const lb20 = document.querySelector("#rate20");

const valueObj = {
    1 : "Extremely Good",
    2 : "Good", 
    3 : "Neutral",
    4 : "Bad",
    5 : "Extremely Bad",
};
const result = [];

// const arr = [lb1, lb2, lb3, lb4, lb5, lb6, lb7, lb8, lb9, lb10, lb11, lb12, lb13, lb14, lb15, lb16, lb17, lb18, lb19, lb20];
const printInfo = (event) => {
    // console.log(event);
    // console.log(event.target.dataset.value);
    // console.log(event.target.parentNode)
    if(event.target.dataset.value % 5 === 1){
        // event.target.parentNode.classList.add("rate-green");

        event.target.parentNode.style.background = 
        "linear-gradient(to right,"+ 
        "#1F9700" + 
        ", " +
        "#1F9700" +
        ")";
        // console.log(valueObj[1]);
        result.push(valueObj[1]);
        
    }
    if(event.target.dataset.value % 5 === 2){
        // event.target.parentNode.classList.add("rate-l-green");
        event.target.parentNode.style.background = 
        "linear-gradient(to right,"+ 
        "#A2FF55" + 
        ", " +
        "#A2FF55" +
        ")";
        // console.log(valueObj[2]);
        result.push(valueObj[2]);
    }
    if(event.target.dataset.value % 5 === 3){
        event.target.parentNode.classList.add("rate-orange");
        event.target.parentNode.style.background = 
        "linear-gradient(to right,"+ 
        "#FF8C00" + 
        ", " +
        "#FF8C00" +
        ")";
        // console.log(valueObj[3]);
        result.push(valueObj[3]);
    }
    if(event.target.dataset.value % 5 === 4){
        // event.target.parentNode.classList.add("rate-yellow");
        event.target.parentNode.style.background = 
        "linear-gradient(to right,"+ 
        "#FFFF00" + 
        ", " +
        "#FFFF00" +
        ")";
        // console.log(valueObj[4]);
        result.push(valueObj[4]);
    }
    if(event.target.dataset.value % 5 === 0){
        // event.target.parentNode.classList.remove("rating");
        // event.target.parentNode.classList.add("rate-l-yellow");
        event.target.parentNode.style.background = 
        "linear-gradient(to right,"+ 
        "#fffac1" + 
        ", " +
        "#fffac1" +
        ")";
        // console.log(valueObj[5]);
        result.push(valueObj[5]);
    }
}
const printValConsole = () => {
    for(let i = 0; i < result.length; i++){
        console.log(result[i]);
    }
} 

// const 

btn.addEventListener('click', printValConsole);
lb1.addEventListener('click', printInfo);
lb2.addEventListener('click', printInfo);
lb3.addEventListener('click', printInfo);
lb4.addEventListener('click', printInfo);
lb5.addEventListener('click', printInfo);
lb6.addEventListener('click', printInfo);
lb7.addEventListener('click', printInfo);
lb8.addEventListener('click', printInfo);
lb9.addEventListener('click', printInfo);
lb10.addEventListener('click', printInfo);
lb11.addEventListener('click', printInfo);
lb12.addEventListener('click', printInfo);
lb13.addEventListener('click', printInfo);
lb14.addEventListener('click', printInfo);
lb15.addEventListener('click', printInfo);
lb16.addEventListener('click', printInfo);
lb17.addEventListener('click', printInfo);
lb18.addEventListener('click', printInfo);
lb19.addEventListener('click', printInfo);
lb20.addEventListener('click', printInfo);