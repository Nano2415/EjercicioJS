const inp = document.querySelector("#numero")
const btn = document.querySelector("#btn")
const p = document.querySelector("#piramide")

btn.addEventListener('click',piramide)

function piramide() {
let valor = inp.value;
let arr = [1];
let err = [];
let orr = []
console.log(arr)
for (let e = 0; e < valor; e++) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == arr[i + 1]) {
      err.push(arr[i])
    }
    else{
     err.push(arr[i])
      err.unshift(err.length)
      orr.push(err[0],err[1])
      let urr= []
      urr.push(orr)
       if (i == arr.length - 1) {

       }
      err= []
    }
    
  }
  arr = []
  arr = orr.join("")
  arr = arr.split("")
  console.log(arr)
  orr = []
  err = []
  i = 0
}
}
