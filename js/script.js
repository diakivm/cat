
let fImg = document.querySelector('#img1')
let sImg = document.querySelector('#img2')
let container = document.querySelector('.container')

container.addEventListener('click', () => {
   if (fImg.style.display == "none") {
      fImg.style.display = "block"
      sImg.style.display = "none"
   } else {
      fImg.style.display = "none"
      sImg.style.display = "block"
   }
})
