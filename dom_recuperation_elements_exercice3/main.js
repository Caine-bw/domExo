// 1

let c = document.querySelector('#content')
console.log(c);

//2
let ca = document.querySelectorAll('#content')

//3

let a = document.querySelector('.important')
console.log(a);

//4

let d = document.querySelectorAll('.important')
console.log(d);

//5
let x = document.querySelectorAll('li')
x.forEach(e=>{
     console.log(e.textContent.slice(0, e.length-1)
     + 
     e.textContent.charAt(e.textContent-1).toUpperCase());
})

//6

let k = document.getElementById("content").getElementsByClassName("grandParagraphe")[0];
console.log(k.textContent);