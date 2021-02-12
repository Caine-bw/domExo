let a = document.getElementById("content")
console.log(a.firstElementChild);


//2 
let b = document.getElementById("titreNiv3")
console.log(b);

//3
//previousElementSibling permet de ciblé l'element precedent
console.log(b.previousElementSibling);

//4

// let c = document.getElementsByClassName('petitParaghraphe')[0]
// console.log(c.nextElementSibling);

//5

let d = document.getElementsByClassName('important')[0]
console.log(d.parentElement)

// 6
let e = document.getElementById('listElements')
console.log(e.parentElement.firstElementChild);

//7

let f = document.getElementsByClassName('important')[3]
console.log(f.nextElementSibling);

//8
//creer une variable pour cibler lelement suivant 
//puis copier la variable dans une nouvelle varbiable et cible lelement suivant de la variable precedente

let g = document.getElementById('textGeneral')
let h = g.nextElementSibling.nextElementSibling
console.log(g);

//9

let i = document.getElementById('footer')
console.log(i.getElementsByTagName('span')[0].parentElement.nextElementSibling);

//en partant de nicolas, affiche primo//

console.log(i.getElementsByTagName('span')[1].parentElement.previousElementSibling.getElementsByTagName("span")[0].getElementsByTagName('b')[0].innerHTML);

//11
let j = document.querySelector('grandParagraphe')
console.log(j);

let k = document.querySelectorAll('li')
k.forEach(e => {
    console.log(e);
});
