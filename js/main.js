let viewportHeight = window.innerHeight;
const button = document.querySelector("button");
const buttonClickSound = document.getElementById('Infinity');
const backgroundMusic = document.getElementById('ComicScore')
backgroundMusic.loop = true;
button.addEventListener("click", function () {
    window.scrollTo(0, viewportHeight + 1);
    buttonClickSound.play();
    backgroundMusic.play();
});

window.addEventListener("scroll", function () {
  viewportHeight = window.innerHeight;
  const scrollPosition = window.scrollY;

  const first_3 = [
    document.querySelector(".one"),
    document.querySelector(".two"),
    document.querySelector(".three"),
  ];

  const mid = document.querySelector(".four");
  const last_2 = [
    document.querySelector(".five"),
    document.querySelector(".six"),
  ];

  if (
    scrollPosition > viewportHeight &&
    scrollPosition < viewportHeight * 2.3
  ) {
    first_3[0].classList.add("active");

    if (scrollPosition > viewportHeight * 1.1) {
      first_3[1].classList.add("active");
    }

    if (scrollPosition > viewportHeight * 1.3) {
      first_3[2].classList.add("active");
    }

    first_3.forEach(function (img) {
      img.style.transform = `translateY(${scrollPosition - viewportHeight}px)`;
    });
  } else {
    first_3.forEach(function (img) {
      img.classList.remove("active");
    });
  }

  if (scrollPosition > viewportHeight * 2.3) {
    mid.classList.add("active");
    let animationStartPosition =
      document.querySelector("section:nth-child(3)").offsetTop +
      viewportHeight / 3;
    let speed = 0.5;

    mid.style.transform = `translateY(${
      animationStartPosition - speed * scrollPosition
    }px)`;
  } else {
    mid.classList.remove("active");
  }

  if (
    scrollPosition > viewportHeight * 3.7 &&
    scrollPosition < viewportHeight * 4.8
  ) {
    last_2[0].classList.add("active");

    if (scrollPosition > viewportHeight * 4) {
      last_2[1].classList.add("active");
    }

    console.log(
      scrollPosition - viewportHeight,
      scrollPosition,
      viewportHeight
    );

    last_2.forEach((img) => {
      img.style.transform = `translateY(${
        scrollPosition - viewportHeight * 3.6
      }px)`;
    });
  } else {
    last_2.forEach((img) => {
      img.classList.remove("active");
    });
  }
});
