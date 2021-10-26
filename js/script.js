
let sImg = document.querySelector('#img')

console.log(sImg.src);

sImg.addEventListener('click', () => {

   if (sImg.src == "https://diakivm.github.io/cat/img/sCat.jpg") {
      sImg.src = "img/fCat.jpg"
   } else {
      sImg.src = "img/sCat.jpg"
   }

})
