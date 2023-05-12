const red = document.querySelector(".red");
const orange = document.querySelector(".orange");
const green = document.querySelector(".green");

function myFunc(){
    setTimeout(()=>{
        red.style.backgroundColor="red";
        orange.style.backgroundColor="gray";
        green.style.backgroundColor="gray";
    },0)

    setTimeout(()=>{
        red.style.backgroundColor="gray";
        orange.style.backgroundColor="orange";
        green.style.backgroundColor="gray";
    },10000)

    setTimeout(()=>{
        red.style.backgroundColor="gray";
        orange.style.backgroundColor="gray";
        green.style.backgroundColor="green";
    },12000)
}

myFunc()
setInterval(myFunc,27000)

