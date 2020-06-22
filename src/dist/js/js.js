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
//const cvId = document.querySelector("#cv-id");
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
const cvDiv = document.querySelector(".cv-div");
const cvId = document.querySelector("#cv-id");
const motivationDiv = document.querySelector(".motivation-div");
const contact = document.querySelector(".contact-div");
const projectItemP = document.querySelector(".project-item-p");
//const githubDiv = document.querySelector(".github-div");
//const websitDiv = document.querySelector(".website-div");
const firstProject = document.getElementById("first-project");
const beforeFirstP = document.createElement("div");
const afterFirstP = document.createElement("div");
const secondProject = document.querySelector("#second-project");
const beforeSecondP = document.createElement("div");
const afterSecondP = document.createElement("div");
const thirdProject = document.querySelector("#third-project");
const beforeThridP = document.createElement("div");
const afterThirdP = document.createElement("div");
const frontEnd = document.querySelector(".front-end-div");
const frontLanguages = document.querySelector(".front-end-languages");
const backendDiv = document.querySelector(".back-end-div");
const backendLanguages = document.querySelector(".back-end-languages");
const other = document.querySelector(".other-div");
const otherTools = document.querySelector(".other-tools");

const pdf = document.createTextNode("Download pdf");
//const cvText = document.querySelector(".cv-text");
//const motivationText = document.querySelector(".motivation-text");
/////////Project content
const websiteTxtOne = document.createTextNode("Website");
var bFP;
var websiteAppendOne;
var githubAppendOne;
const githubOne = document.createTextNode("Github");
var aFP;
const githubTwo = document.createTextNode("Github2");
const websiteTxtTwo = document.createTextNode("Website");
var bFP;
var aSP;
var githubAppendTwo;
var websiteAppendTwo;
const githubThree = document.createTextNode("Github");
const websiteTxtThree = document.createTextNode("Website");
var websiteAppendThree;
var githubAppendThree;
var aTP;
var bTP;
////Credentials
const frontEndId = document.querySelector("#front-end-id");
const frontEndTxt = document.createTextNode("front-end");
var frontEndTxtAppend;
const backEndId = document.querySelector("#back-end-id");
const backEndTxt = document.createTextNode("back end");
var backEndAppend;
var backEndLangId = document.querySelector("#back-end-lang-id");
const djangoDiv = document.createElement("div");
var djangoAppend;
const djangoTxt = document.createTextNode("django");
var djangoTxtAppend;
const otherId = document.querySelector("#other-id");
const otherTxt = document.createTextNode("others");
var ohterIdAppend;
const frontLangId = document.querySelector("#front-end-lang-id");
const html = document.createElement("div");
const css = document.createElement("div");
const sass = document.createElement("div");
const js = document.createElement("div");
const reactJs = document.createElement("div");
var htmlAppend;
var cssAppend;
var sassAppend;
var jsAppend;
var reactJsAppend;

const htmlTxt = document.createTextNode("html");
const cssTxt = document.createTextNode("css");
const sassTxt = document.createTextNode("sass");
const jsTxt = document.createTextNode("js");
const reactJSTxt = document.createTextNode("react");
var htmlTxtAppend;
var cssTxtAppend;
var sassTxtAppend;
var jsTxtAppend;
var reactJsTxtAppend;
const otherToolsId = document.querySelector("#other-tools-id");
const githubTools = document.createElement("div");
const githubToolsTxt = document.createTextNode("github");
var githubToolsAppend;
var githubToolsTxtAppend;
const linuxTools = document.createElement("div");
const linuxToolsTxt = document.createTextNode("linux");
var linuxToolsAppend;
var linuxToolsTxtAppend;
const gulpTools = document.createElement("div");
const gulpToolsTxt = document.createTextNode("gulp");
var gulpToolsAppend;
var gulpToolsTxtAppend;
const reduxTools = document.createElement("div");
const reduxToolsTxt = document.createTextNode("redux");
var reduxToolsAppend;
var reduxToolsTxtAppend;
//CV content
const cvTxt = document.createTextNode("cv");
var cvTxtAppend;
//Motivation content
const motivationId = document.querySelector("#motivation-id");
const motivationTxt = document.createTextNode("motivation");
var motivationTxtAppend;
////////////////////////////////////
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
    if (
      projectDivItem != null ||
      frontEndId != null ||
      frontLangId != null ||
      backEndId != null ||
      backEndLangId != null ||
      otherId != null ||
      otherTools != null ||
      cvId != null ||
      motivationId != null
    ) {
      Array.from(projectDivItem).forEach((e) => {
        e.style.display = "none";
      });
      frontEnd.style.display = "none";
      frontLangId.style.display = "none";
      backEndId.style.display = "none";
      backEndLangId.style.display = "none";
      otherId.style.display = "none";
      otherTools.style.display = "none";
      cvId.style.display = "none";
      motivationId.style.display = "none";
    }

    blackDiv.style.display = "none";
    slideOrangeDiv.style.display = "none";
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
        beforeElement.style.opacity -= 0.8;
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
        projectItemP.classList.add("open");
        addContInP();
        function addContInP() {
          bFP = firstProject.appendChild(beforeFirstP);
          websiteAppendOne = bFP.appendChild(websiteTxtOne);
          bFP.style.cssText =
            "z-index:3; height:50px; width:50%;  background-color: red";
          aFP = firstProject.appendChild(afterFirstP);
          githubAppendOne = aFP.appendChild(githubOne);
          aFP.style.cssText =
            "z-index:3; height:50px; width:50%;  background-color: blue";
          bSP = secondProject.appendChild(beforeSecondP);
          websiteAppendTwo = bSP.appendChild(websiteTxtTwo);
          bSP.style.cssText =
            "z-index:3; height:50px; width:50%;  background-color: blue";
          aSP = secondProject.appendChild(afterSecondP);
          githubAppendTwo = aSP.appendChild(githubTwo);
          aSP.style.cssText =
            "z-index:3; height:50px; width:50%;  background-color: red";
          bTP = thirdProject.appendChild(beforeThridP);
          websiteAppendThree = bTP.appendChild(websiteTxtThree);
          bTP.style.cssText =
            "z-index:3; height:50px; width:50%;  background-color: red";
          aTP = thirdProject.appendChild(afterThirdP);
          githubAppendThree = aTP.appendChild(githubThree);
          aTP.style.cssText =
            "z-index:3; height:50px; width:50%;  background-color: blue";
        }
      }

      function addCredentials() {
        frontEnd.classList.add("open");
        frontLanguages.classList.add("open");
        backendDiv.classList.add("open");
        backendLanguages.classList.add("open");
        other.classList.add("open");
        otherTools.classList.add("open");
        frontEndTxtAppend = frontEndId.appendChild(frontEndTxt);
        backEndAppend = backEndId.appendChild(backEndTxt);
        ohterIdAppend = otherId.appendChild(otherTxt);
        htmlAppend = frontLangId.appendChild(html);
        cssAppend = frontLangId.appendChild(css);
        jsAppend = frontLangId.appendChild(js);
        reactJsAppend = frontLangId.appendChild(reactJs);
        html.style.cssText = "background-color:red; height:53px; width:100px";
        css.style.cssText = "background-color:blue; height:53px; width:100px";
        js.style.cssText = "background-color:red; height:53px; width:100px";
        reactJs.style.cssText =
          "background-color:blue; height:53px; width:100px";
        htmlTxtAppend = html.appendChild(htmlTxt);
        cssTxtAppend = css.appendChild(cssTxt);
        jsTxtAppend = js.appendChild(jsTxt);
        reactJsTxtAppend = reactJs.appendChild(reactJSTxt);
        djangoAppend = backEndLangId.appendChild(djangoDiv);

        djangoDiv.style.cssText = " width:100%";
        djangoTxtAppend = djangoDiv.appendChild(djangoTxt);
        githubToolsAppend = otherToolsId.appendChild(githubTools);
        githubTools.style.cssText =
          "background-color:blue;height:53px; width:100px";
        githubToolsTxtAppend = githubTools.appendChild(githubToolsTxt);
        linuxToolsAppend = otherToolsId.appendChild(linuxTools);
        linuxTools.style.cssText =
          "background-color:red; height:53px; width:100px";
        linuxToolsTxtAppend = linuxTools.appendChild(linuxToolsTxt);
        gulpToolsAppend = otherToolsId.appendChild(gulpTools);
        gulpTools.style.cssText =
          "background-color:blue; height:53px; width:100px";
        gulpToolsTxtAppend = gulpTools.appendChild(gulpToolsTxt);
        reduxToolsAppend = otherToolsId.appendChild(reduxTools);
        reduxToolsAppend = otherToolsId.appendChild(reduxTools);
        reduxTools.style.cssText =
          "background-color:red; height:53px; width:100px";
        reduxToolsTxtAppend = reduxTools.appendChild(reduxToolsTxt);
      }
      function removeCredentials() {
        frontLanguages.classList.remove("open");
        frontEnd.classList.remove("open");
        backendDiv.classList.remove("open");
        backendLanguages.classList.remove("open");
        other.classList.remove("open");
        otherTools.classList.remove("open");
        if (frontEndId.hasChildNodes()) {
          frontEndTxtAppend.parentNode.removeChild(frontEndTxt);
          backEndAppend.parentNode.removeChild(backEndTxt);
          ohterIdAppend.parentNode.removeChild(otherTxt);
          htmlAppend.parentNode.removeChild(html);
          cssAppend.parentNode.removeChild(css);
          jsAppend.parentNode.removeChild(js);
          // jsAppend.parentNode.removeChild(js);
          reactJsAppend.parentNode.removeChild(reactJs);
          djangoAppend.parentNode.removeChild(djangoDiv);
          githubToolsAppend.parentNode.removeChild(githubTools);
          linuxToolsAppend.parentNode.removeChild(linuxTools);
          gulpToolsAppend.parentNode.removeChild(gulpTools);
          reduxToolsAppend.parentNode.removeChild(reduxTools);
        }
      }
      function removeLiProject() {
        Array.from(projectDivItem).forEach((ele) => {
          ele.classList.remove("open");
        });
        projectItemP.classList.remove("open");
        if (
          bFP != null &&
          aSP != null &&
          bSP != null &&
          aTP != null &&
          bTP != null
        ) {
          if (
            bFP.hasChildNodes() &&
            aSP.hasChildNodes() &&
            bSP.hasChildNodes() &&
            aTP.hasChildNodes() &&
            bTP.hasChildNodes()
          ) {
            websiteAppendOne.parentNode.removeChild(websiteTxtOne);
            githubAppendOne.parentNode.removeChild(githubOne);

            githubAppendTwo.parentNode.removeChild(githubTwo);
            websiteAppendTwo.parentNode.removeChild(websiteTxtTwo);
            githubAppendThree.parentNode.removeChild(githubThree);
            websiteAppendThree.parentNode.removeChild(websiteTxtThree);
          }
        }
      }

      function cv() {
        cvDiv.classList.add("open");
        //  setTimeout(addTxt, 1500);
        cvTxtAppend = cvId.appendChild(cvTxt);
        /*       function addTxt() {
          // cvText.classList.add("open");
        } */
      }
      function removeCv() {
        cvDiv.classList.remove("open");
        if (cvId.hasChildNodes()) {
          cvTxtAppend.parentNode.removeChild(cvTxt);
        }
      }

      function removeMotivation() {
        motivationDiv.classList.remove("open");
        if (motivationId.hasChildNodes()) {
          motivationTxtAppend.parentNode.removeChild(motivationTxt);
        }
      }

      function addMotivation() {
        motivationDiv.classList.add("open");
        motivationTxtAppend = motivationId.appendChild(motivationTxt);
      }

      let classList = ele.classList.value;
      applyStyle();
      function applyStyle() {
        switch (classList) {
          case "li project":
            //   projectDiv.style.backgroundColor = "";
            async function projectAsync() {
              removeCredentials();
              removeCv();
              removeMotivation();
            }
            projectAsync().then(setTimeout(addProject, 300));
            break;
          case "li credentials":
            // projectDiv.style.backgroundColor = "yellow";

            async function credentialsAsync() {
              removeLiProject();
              removeCv();
              removeMotivation();
            }
            credentialsAsync().then(setTimeout(addCredentials, 300));
            break;
          case "li cv":
            //  projectDiv.style.backgroundColor = "green";
            async function cvAsync() {
              removeLiProject();
              removeCredentials();
              removeMotivation();
            }
            cvAsync().then(setTimeout(cv(), 300));

            break;
          case "li motivation":
            //  projectDiv.style.backgroundColor = "gray";
            async function motivationAsync() {
              removeCv();
              removeLiProject();
              removeCredentials();
            }
            motivationAsync().then(setTimeout(addMotivation(), 300));
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
    textLeftDiv.style.zIndex = "8";
    allSpan.forEach((letters) => {
      letters.style.zIndex = "8";
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
      textLeftDiv.style.zIndex = "10";
      allSpan.forEach((letters) => {
        letters.style.zIndex = "10";
        letters.style.color = "#fff";
      });
    }
    initialCheckEvent();

    setTimeout(showWelcome, 500);
    function showWelcome() {
      const message = "Hello :)";
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
      //  console.log(window.innerWidth);
      console.log(distanceLeft);
      var screenWidth = window.innerWidth;
      if (screenWidth > 1500) {
        if (distanceLeft === 17) {
          slideOrangeDiv.style.left = "-50%";
          checkEvent();
        }
        if (distanceRight === -13) {
          slideOrangeDiv.style.left = "-50%";
        }
      }
      if (screenWidth < 1400) {
        if (distanceLeft === 12) {
          slideOrangeDiv.style.left = "-50%";
          checkEvent();
        }

        if (distanceRight === -13) {
          slideOrangeDiv.style.left = "-50%";
        }
      }
      if (screenWidth < 1300) {
        if (distanceLeft === 10) {
          slideOrangeDiv.style.left = "-50%";
          checkEvent();
        }

        if (distanceRight === -13) {
          slideOrangeDiv.style.left = "-50%";
        }
      }
      if (screenWidth < 1300) {
        if (distanceLeft === 12) {
          slideOrangeDiv.style.left = "-50%";
          checkEvent();
        }

        if (distanceRight === -13) {
          slideOrangeDiv.style.left = "-50%";
        }
      }
      if (screenWidth < 1100) {
        if (distanceLeft === 9) {
          slideOrangeDiv.style.left = "-50%";
          checkEvent();
        }
      }
      if (screenWidth < 1000) {
        if (distanceLeft === 8) {
          slideOrangeDiv.style.left = "-50%";
          checkEvent();
        }
      }
      if (screenWidth < 900) {
        if (distanceLeft === 7) {
          slideOrangeDiv.style.left = "-50%";
          checkEvent();
        }
      }
      if (screenWidth < 800) {
        if (distanceLeft === 6) {
          slideOrangeDiv.style.left = "-50%";
          checkEvent();
        }
      }
      if (screenWidth < 600) {
        if (distanceLeft === 4) {
          slideOrangeDiv.style.left = "-50%";
          checkEvent();
        }
      }
      if (screenWidth < 500) {
        slideOrangeDiv.style.left = "-50%";
        event.stopPropagation();
      }

      /* if (979 < screenBig && screenBig < 1091) {
        if (distanceLeft === 10) {
          slideOrangeDiv.style.left = "-50%";
          checkEvent();
        }
        if (distanceRight === -13) {
          slideOrangeDiv.style.left = "-50%";
        }
      } */
      /*    if (distanceLeft === 17) {
        slideOrangeDiv.style.left = "-50%";
        checkEvent();
      }
      if (distanceRight === -13) {
        slideOrangeDiv.style.left = "-50%";
      } */
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
