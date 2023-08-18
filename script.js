// Get the button
let navbar = document.getElementById("NN");
let button = document.getElementById("btn")
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.documentElement.scrollTop > 0 && document.documentElement.scrollTop < 576) {
    navbar.classList.add("color")
    button.classList.add("btn")
    console.log("white")
  } else {
    navbar.classList.remove("color")
    button.classList.remove("btn")
    console.log("black")
  }
  if (document.documentElement.scrollTop === 0) {
    navbar.classList.add("head-content")
    console.log("responsive")
  }

}

const slides = document.querySelectorAll('.project-image');
console.log(slides)
let counter = 0;
slides.forEach((slides, index) => {
  slides.style.left = `${index * 100}%`
})
const slider = () => {
  slides.forEach((slides) => {
    slides.style.transform = `translateX(-${counter * 100}%)`
  })
}
const goPrevious = () => {

  if (counter >= 7 || counter < 1) {

    console.log("counter in previous is", counter)
    return
  } else {
    counter--
    console.log("counter in previous else is", counter)
    slider();
  }

}
const goNext = () => {

  if (counter >= 6) {
    console.log("counter in next is", counter)
    return
  }
  else {
    counter++
    console.log("counter in next else is", counter)
    slider();
  }


}

