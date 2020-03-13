/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/
var currentIndex = 1;

function toggleClassForward(index){
  let indexPlus = index + 1;
  let indexStart = index - 3;

  if(index === 4){
    document.querySelector(`.carousel img:nth-of-type(${index})`).classList.toggle("showImg");
    document.querySelector(`.carousel img:nth-of-type(${indexStart})`).classList.toggle("showImg");
  }else{
    document.querySelector(`.carousel img:nth-of-type(${index})`).classList.toggle("showImg");
    document.querySelector(`.carousel img:nth-of-type(${indexPlus})`).classList.toggle("showImg");
  }
}

function nextPic(index){
  if(index === 4){
    toggleClassForward(index);
    currentIndex = index - 3;
  }else{
    toggleClassForward(index);
    currentIndex = index + 1;
  }
}

function toggleClassBackward(index){
  let indexMinus = index - 1;
  let indexEnd = index + 3;

  if(index === 1){
    document.querySelector(`.carousel img:nth-of-type(${index})`).classList.toggle("showImg");
    document.querySelector(`.carousel img:nth-of-type(${indexEnd})`).classList.toggle("showImg");
  }else{
    document.querySelector(`.carousel img:nth-of-type(${index})`).classList.toggle("showImg");
    document.querySelector(`.carousel img:nth-of-type(${indexMinus})`).classList.toggle("showImg");
  }
}

function prevPic(index){
  if(index === 1){
    toggleClassBackward(index);
    currentIndex = index + 3;
  }else{
    toggleClassBackward(index);
    currentIndex = index - 1;
  }
}

function carouselCreator(){
  //CAROUSEL
  const carousel = document.createElement("div");
  carousel.classList.add("carousel");
  document.querySelector(".carousel-container").appendChild(carousel);

  //LEFT BUTTON
  const leftButton = document.createElement("div");
  leftButton.classList.add("left-button");
  leftButton.textContent = " < ";
  //LEFT BUTTON FUNCTIONALITY
  leftButton.addEventListener("click", event => {prevPic(currentIndex)});
  carousel.appendChild(leftButton);

  //IMAGE 1
  const img1 = document.createElement("img");
  img1.classList.add("showImg");
  img1.src = "./assets/carousel/mountains.jpeg";
  carousel.appendChild(img1);

  //IMAGE 2
  const img2 = document.createElement("img");
  img2.src = "./assets/carousel/computer.jpeg";
  carousel.appendChild(img2);

  //IMAGE 3
  const img3 = document.createElement("img");
  img3.src = "./assets/carousel/trees.jpeg";
  carousel.appendChild(img3);

  //IMAGE 4
  const img4 = document.createElement("img");
  img4.src = "./assets/carousel/turntable.jpeg";
  carousel.appendChild(img4);

  //RIGHT BUTTON
  const rightButton = document.createElement("div");
  rightButton.classList.add("right-button");
  rightButton.textContent = " > ";
  //RIGHT BUTTON FUNCTIONALITY
  rightButton.addEventListener("click", event => {nextPic(currentIndex)});
  carousel.appendChild(rightButton);

  //RETURN CAROUSEL
  return carousel;
}

carouselCreator();