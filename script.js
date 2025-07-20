const celebrateBtn = document.getElementById("celebrateBtn");
const animationContainer = document.getElementById("animationContainer");
const subtitle = document.querySelector(".subtitle");

let animationInstance;

celebrateBtn.addEventListener("click", () => {
  // Move badge up + hide subtitle
  celebrateBtn.classList.add("move-up");
  subtitle.style.opacity = "0";

  // Show animation container fullscreen
  animationContainer.classList.remove("hidden");
  animationContainer.classList.add("active");

  // Load animation once
  if (!animationInstance) {
    animationInstance = lottie.loadAnimation({
      container: animationContainer,
      renderer: "svg",
      loop: true,
      autoplay: true,
      path: "https://assets2.lottiefiles.com/packages/lf20_fur5x8mw.json" // Cat waving paw
    });
  } else {
    animationInstance.play();
  }
});
