
const element = document.querySelector(".container");
function countDown(number){
    
        setInterval(() => {
            if(number === 0){
                element.innerHTML = "Boom!";
                clearInterval();
            }
            else{
                element.innerHTML = number--;
            }
        },1000)
}

countDown(5);


//OR

// function countDown(number){
//     if(number === 0){
//         element.innerHTML = "Boom!";
//     }
//     else{
//         element.innerHTML = number;
//         setTimeout(() => {
//             countDown(number-1)
//         }, 1000);
//     }
// }



