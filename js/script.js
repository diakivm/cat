
let sImg = document.querySelector('#img')

console.log(sImg.src)

sImg.addEventListener('click', () => {

   if (sImg.src == "http://127.0.0.1:5500/img/sCat.jpg") {
      sImg.src = "img/fCat.jpg"
   } else {
      sImg.src = "img/sCat.jpg"
   }

})
