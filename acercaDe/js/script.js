
document.getElementById("button-up").addEventListener("click", scrollUp);

function scrollUp(){

    var currentScroll = document.documentElement.scrollTop;

    if (currentScroll > 0){
        window.requestAnimationFrame(scrollUp);
        window.scrollTo (0, currentScroll - (currentScroll / 10));
    }
}


///

buttonUp = document.getElementById("button-up");

window.onscroll = function(){

    var scroll = document.documentElement.scrollTop;

    if (scroll > 500){
        buttonUp.style.transform = "scale(1)";
    }else if(scroll < 500){
        buttonUp.style.transform = "scale(0)";
    }

}

const images = ["imagen1.jpg", "imagen2.jpg", "imagen3.jpg", "imagen4.jpg"];

    let currentIndex = 0;
    const carouselImg = document.getElementById("carouselImg");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");

    function showImage() {
      const imgSrc = images[currentIndex];
      carouselImg.src = imgSrc;
    }

    function sigImg() {
      currentIndex++;
      if (currentIndex >= images.length) {
        currentIndex = 0;
      }
      showImage();
    }

    function prevImg() {
      currentIndex--;
      if (currentIndex < 0) {
        currentIndex = images.length - 1;
      }
      showImage();
    }

    nextBtn.addEventListener("click", sigImg);
    prevBtn.addEventListener("click", prevImg);

    showImage();