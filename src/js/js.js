//Store in varibles the dom elements
const cursor = document.querySelector(".cursor");
const nav = document.querySelector("nav");
const allLi = document.querySelectorAll(".li");
const rotateDiv = document.querySelector(".rotate-div");
const logo = document.querySelector(".logo");
const leftFixedDiv = document.querySelector(".left-fixed-div");
const rightFixedDiv = document.querySelector(".right-fixed-div");
const textLeftDiv = document.querySelector(".text-left-div");
const itemDiv = document.querySelector(".item-div");
const roundText = document.querySelector(".round-text");
const welcomeText = document.querySelector("#welcome-text");
const beforeElement = document.createElement("div");
const afterElement = document.createElement("div");
const blackDiv = document.querySelector(".black-div");
const imageBird = document.querySelector(".image-bird");
const slideOrangeDiv = document.querySelector(".slide-orange-div");
/* const allSpan = document.querySelectorAll(".span"); */
const allSpan = [...document.querySelectorAll("span")];
const projectDiv = document.querySelector(".project-div");
const projectDivItem = document.querySelectorAll(".project-div-item");
/*const projectItemOne = document.querySelector(".project-item-1");
const projectItemTwo = document.querySelector(".project-item-2");
const projectItemThree = document.querySelector(".project-item-3"); */
const credentials = document.querySelector(".credentials-div");
const cv = document.querySelector(".cv");
const aboutMe = document.querySelector(".about-me-div");
const contact = document.querySelector(".contact-div");
const githubDiv = document.querySelector(".github-div");
const websitDiv = document.querySelector(".website-div");
allSpan.forEach((letters) => {
  letters.addEventListener("mouseover", (e) => {
    letters.animate(
      [{ transform: "scale(0.5)" }, { transform: "scale(1.5)" }],
      { duration: 1000 }
    );
  });
});

textLeftDiv.addEventListener("mouseout", (e) => {
  cursor.style.display = "none";
});

logo.addEventListener("click", dropDown, true);
var rocket = document.querySelector(".image-bird");
var btn = document.querySelector(".slide-orange-div");

function dropDown() {
  scaleAnimation();
  function scaleAnimation() {
    logo.style.display = "block";
    rotateDiv.style.cssText = `width:100%; height:1px; display:block`;
  }
  motionLeftDiv();
  function motionLeftDiv() {
    blackDiv.style.display = "none";
    slideOrangeDiv.style.display = "none";
    //   projectDiv.style.display = "none";
    logo.style.display = "none";
    nav.style.display = "none";
    textLeftDiv.style.cssText = "display:none;";
    leftFixedDiv.style.cssText = "display:none";
    imageBird.style.display = "none";
    var pxTranslate = "50vh";
    var parentDivBefore = itemDiv.parentNode;
    var parentDivAfter = itemDiv.parentNode;
    parentDivBefore.insertBefore(beforeElement, itemDiv);
    parentDivAfter.insertBefore(afterElement, itemDiv);
    beforeElement.style.cssText =
      "height:3000px; width:100vw;bottom:200%; background-color:#f56156; position:absolute; display:block";
    rotateDiv.animate(
      [
        { transform: "translateY(0px)" },
        { transform: `translateY(${pxTranslate})` },
      ],

      {
        duration: 900,
        fill: "forwards",
      }
    );
    setTimeout(rotationAnimation, 1000);
    function rotationAnimation() {
      beforeElement.style.cssText =
        "height:300%; width:100vw;top:0%; left:100%; background-color:#f56156;";
      afterElement.style.cssText =
        "height:300%; width:100vw;  position: absolute; right: 100%;top:0%;background-color:#fff";
      rotateDiv.style.cssText = `display: block; position: absolute; top: 0px; left:50%;transform-origin: center; height:300%;bottom:25%`;
      rotateDiv.animate(
        [{ transform: "rotate(0deg)" }, { transform: "rotate(180deg)" }],

        {
          duration: 500,
          iterations: 1,
          fill: "forwards",
        }
      );
    }
  }
  fadeOutEffect();
  function fadeOutEffect() {
    var fadeEffect = setInterval(function() {
      if (!beforeElement.style.opacity) {
        beforeElement.style.opacity = 1;
      }
      if (beforeElement.style.opacity > 0) {
        beforeElement.style.opacity -= 0.3;
      } else {
        clearInterval(fadeEffect);
      }
      leftFixedDiv.style.cssText = "display:block";
      setTimeout(reload, 500);
      function reload() {
        document.location.reload(true);
      }
    }, 1700);
  }
}

blackDivMoving();
function blackDivMoving() {
  Array.from(allLi).forEach((ele) => {
    ele.addEventListener("mouseover", (e) => {
      addOpen();
      function addOpen() {
        blackDiv.classList.add("open");
        projectDiv.classList.add("open");
      }
      function addProject() {
        Array.from(projectDivItem).forEach((ele) => {
          ele.classList.add("open");
        });

        githubDiv.classList.add("open");
        websitDiv.classList.add("open");
      }
      function removeLiProject() {
        Array.from(projectDivItem).forEach((ele) => {
          ele.classList.add("open");
        });
        githubDiv.classList.remove("open");
        websitDiv.classList.remove("open");
      }
      let classList = ele.classList.value;
      applyStyle();
      function applyStyle() {
        switch (classList) {
          case "li project":
            projectDiv.style.backgroundColor = "yellow";
            addProject();
            break;
          case "li credentials":
            projectDiv.style.backgroundColor = "blue";
            removeLiProject();
            break;
          case "li cv":
            projectDiv.style.backgroundColor = "green";
            removeLiProject();
            break;
          case "li about-me":
            projectDiv.style.backgroundColor = "gray";
            removeLiProject();
            break;
          case "li contact":
            projectDiv.style.backgroundColor = "gray";
            removeLiProject();
            break;
          default:
        }
      }
    });
  });
}

contentAppear();
function contentAppear() {
  Array.from(allLi).forEach((ele) => {
    ele.addEventListener("click", (event) => {});
  });
}

draggableDiv();
function draggableDiv() {
  function getOffsetX(e) {
    textLeftDiv.style.zIndex = "2";
    allSpan.forEach((letters) => {
      letters.style.zIndex = "2";
      letters.style.color = "#f56156";
    });

    e.stopPropagation();
    if (e) {
      slideOrangeDiv.isDown = true;
      slideOrangeDiv.offset = [slideOrangeDiv.offsetLeft - e.clientX];
    }
  }
  const roundDivJs = document.createElement("div");

  function checkEvent(e) {
    function initialCheckEvent() {
      roundText.appendChild(roundDivJs);
      textLeftDiv.style.zIndex = "3";
      allSpan.forEach((letters) => {
        letters.style.zIndex = "3";
        letters.style.color = "#fff";
      });
    }
    initialCheckEvent();

    setTimeout(showWelcome, 500);
    function showWelcome() {
      const message = "Welcome :)";
      const textWelcome = document.querySelector(".welcome-text");

      const typingPromises = (message, timeout) =>
        [...message].map(
          (ch, i) =>
            new Promise((resolve) => {
              setTimeout(() => {
                resolve(message.substring(0, i + 1));
              }, timeout * i);
            })
        );

      typingPromises(message, 60).forEach((promise) => {
        promise.then((portion) => {
          welcomeText.innerHTML = portion;
        });
      });
      function showText() {
        textWelcome.style.display = "block";
      }
    }
    round();
    function round() {
      roundDivJs.setAttribute("class", "round-div-created-div-two");
      roundDivJs.style.display = "block";
      roundDivJs.animate(
        [{ transform: "translateX(0px)" }, { transform: "translateX(-159px)" }],
        { duration: 1000, fill: "forwards" }
      );
      setTimeout(showRoundDiv, 1000);
      function showRoundDiv() {
        let a = roundDivJs.style.display;
        if (a == "block") {
          roundDivJs.style.display = "none";
        }
      }
    }
    slideOrangeDiv.isDown = false;
    slideOrangeDiv.addEventListener("mouseout", (event) => {
      event.preventDefault();
      slideOrangeDiv.isDown = false;
    });
  }

  function moveDiv(event) {
    event.stopPropagation();
    if (slideOrangeDiv.isDown) {
      slideOrangeDiv.mousePosition = {
        x: event.clientX,
      };
      slideOrangeDiv.style.left =
        slideOrangeDiv.mousePosition.x + slideOrangeDiv.offset[0] + "px";
      var distanceLeft = Math.floor(
        Math.floor(slideOrangeDiv.getBoundingClientRect().right) / 100
      );
      var distanceRight = Math.floor(
        Math.floor(slideOrangeDiv.getBoundingClientRect().left) / 100
      );
      if (distanceLeft === 12) {
        slideOrangeDiv.style.left = "-50%";
        checkEvent();
      }
      if (distanceRight === -13) {
        slideOrangeDiv.style.left = "-50%";
      }
    }
  }
  slideOrangeDiv.addEventListener("mousedown", getOffsetX, true);
  slideOrangeDiv.addEventListener("mouseup", checkEvent, true);
  slideOrangeDiv.addEventListener("mousemove", moveDiv, true);
}

function getInitialPos(event) {
  event.stopPropagation();

  if (slideOrangeDiv.isDown) {
    slideOrangeDiv.mousePosition = {
      x: event.clientX,
    };
    slideOrangeDiv.style.left =
      slideOrangeDiv.mousePosition.x + slideOrangeDiv.offset[0] + "px";
    var initialPosition = slideOrangeDiv.style.left;
  }
}
function animateDiv(event) {
  slideOrangeDiv.style.left = "-50%";
}

slideOrangeDiv.addEventListener("mousedown", getInitialPos, true);
slideOrangeDiv.addEventListener("mouseout", animateDiv, true);
slideOrangeDiv.addEventListener("mouseup", animateDiv, true);
