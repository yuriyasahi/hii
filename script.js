// Elements
const envelope = document.getElementById("envelope-container");
const letter = document.getElementById("letter-container");
const noBtn = document.querySelector(".no-btn");
const yesBtn = document.querySelector(".btn[alt='Yes']");

const title = document.getElementById("letter-title");
const kittyImg = document.getElementById("letter-kitty");
const buttons = document.getElementById("letter-buttons");
const finalText = document.getElementById("final-text");

// Click Envelope

envelope.addEventListener("click", () => {
    envelope.style.display = "none";
    letter.style.display = "flex";

    setTimeout( () => {
        document.querySelector(".letter-window").classList.add("open");
    },50);
});


 let yesScale = 1;

yesBtn.style.position = "relative"
yesBtn.style.transformOrigin = "center center";
yesBtn.style.transition = "transform 0.3s ease";

noBtn.addEventListener("click", () => {
    yesScale += 2;

     if (yesBtn.style.position !== "fixed") {
         yesBtn.style.position = "fixed";
        yesBtn.style.top = "50%";
        yesBtn.style.left = "50%";
        yesBtn.style.transform = `translate(-50%, -50%) scale(${yesScale})`;
    }else{
        yesBtn.style.transform = `translate(-50%, -50%) scale(${yesScale})`;
    }
});

// Logic to make YES btn to grow

// let yesScale = 1;

// yesBtn.style.position = "relative"
// yesBtn.style.transformOrigin = "center center";
// yesBtn.style.transition = "transform 0.3s ease";

// noBtn.addEventListener("click", () => {
//     yesScale += 2;

//     if (yesBtn.style.position !== "fixed") {
//         yesBtn.style.position = "fixed";
//         yesBtn.style.top = "50%";
//         yesBtn.style.left = "50%";
//         yesBtn.style.transform = `translate(-50%, -50%) scale(${yesScale})`;
//     }else{
//         yesBtn.style.transform = `translate(-50%, -50%) scale(${yesScale})`;
//     }
// });

// YES is clicked

yesBtn.addEventListener("click", () => {
    title.textContent = "Yippeeee!";

    kittyImg.src = "download.gif";

    document.querySelector(".letter-window").classList.add("final");

    buttons.style.display = "none";

    finalText.style.display = "block";
});

const container = document.getElementById("heart-rain");

let rainInterval = null;
let raining = false;

function createHeart() {
  const heart = document.createElement("div");
  heart.className = "heart";

  const img = document.createElement("img");
  img.src = "Pixel_Heart.png"; // your image path
  img.alt = "heart";

  heart.appendChild(img);

  const size = Math.random() * 20 + 20;
  heart.style.width = size + "px";
  heart.style.height = size + "px";

  heart.style.left = Math.random() * window.innerWidth + "px";
  heart.style.animationDuration = Math.random() * 3 + 3 + "s";

  container.appendChild(heart);
  setTimeout(() => heart.remove(), 6000);
}

document.addEventListener("click", () => {
  if (raining) return; // prevents restarting
  raining = true;

  rainInterval = setInterval(createHeart, 200);
});

