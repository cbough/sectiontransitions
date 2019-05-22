let showContent = document.getElementsByTagName('p')
let showContent2 = document.getElementsByTagName('img')

 window.addEventListener('scroll', function() {
console.log(window.scrollY)
let reveal = window.scrollY

 if (reveal > 50) {
 showContent[0].classList.remove('hidden')
 showContent[0].classList.add('show')
 showContent2[0].classList.remove('hidden')
 showContent2[0].classList.add('show')
 }
 if(reveal > 100){
 showContent[1].classList.remove('hidden')
 showContent[1].classList.add('show')
 showContent2[1].classList.remove('hidden')
 showContent2[1].classList.add('show')
 }
 if(reveal > 1350){
 showContent[2].classList.remove('hidden')
 showContent[2].classList.add('show')
 showContent2[2].classList.remove('hidden')
 showContent2[2].classList.add('show')
} if(reveal > 1900){
 showContent[3].classList.remove('hidden')
 showContent[3].classList.add('show')
 showContent2[3].classList.remove('hidden')
 showContent2[3].classList.add('show')
}
 })

 console.log(reveal)
