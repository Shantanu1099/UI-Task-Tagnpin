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
const arr = [lb1, lb2, lb3, lb4, lb5, lb6, lb7, lb8, lb9, lb10, lb11, lb12, lb13, lb14, lb15, lb16, lb17, lb18, lb19, lb20];
const printInfo = () => {
    console.log(event);
    // for(let i = 0; i < arr.length; i++){
        console.log(event.target.dataset.value);
        // const result = arr.filter()
        // if()
        // console.log(event)
    // }
    // if()
}

// const 

btn.addEventListener('click', printInfo);
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