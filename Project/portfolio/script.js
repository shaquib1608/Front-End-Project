// var desc = "Software Engineer";

// setInterval(() => {
//     var occ = "";
//     var Software = document.getElementById("occupation");
//     Software.innerHTML = "Software Engineer";
//     alert("i am here");
// }, 1000);

// setTimeout(() => {
//     var occ = "";
//     var Software = document.getElementById("occupation");
//     Software.innerHTML = "Software Engineer";
//     alert("i am here");
// }, 1000);


// function occupationset() {
    
// }



var occ = "software engineer";
var oc = "";


function sleep(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
   }

myFunction();
async function myFunction() {
        for (let index = 0; index < occ.length; index++) {
            var des = document.getElementById("occupation");
            oc = oc + occ[index];
            des.innerHTML = oc;
            await sleep(200);
        }
}