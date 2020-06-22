// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"js/js.js":[function(require,module,exports) {
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

//Store in varibles the dom elements
var cursor = document.querySelector(".cursor");
var nav = document.querySelector("nav");
var allLi = document.querySelectorAll(".li");
var rotateDiv = document.querySelector(".rotate-div");
var logo = document.querySelector(".logo");
var leftFixedDiv = document.querySelector(".left-fixed-div");
var rightFixedDiv = document.querySelector(".right-fixed-div");
var textLeftDiv = document.querySelector(".text-left-div");
var itemDiv = document.querySelector(".item-div");
var roundText = document.querySelector(".round-text");
var welcomeText = document.querySelector("#welcome-text"); //const cvId = document.querySelector("#cv-id");

var beforeElement = document.createElement("div");
var afterElement = document.createElement("div");
var blackDiv = document.querySelector(".black-div");
var imageBird = document.querySelector(".image-bird");
var slideOrangeDiv = document.querySelector(".slide-orange-div");
/* const allSpan = document.querySelectorAll(".span"); */

var allSpan = _toConsumableArray(document.querySelectorAll("span"));

var projectDiv = document.querySelector(".project-div");
var projectDivItem = document.querySelectorAll(".project-div-item");
/*const projectItemOne = document.querySelector(".project-item-1");
const projectItemTwo = document.querySelector(".project-item-2");
const projectItemThree = document.querySelector(".project-item-3"); */

var credentials = document.querySelector(".credentials-div");
var cvDiv = document.querySelector(".cv-div");
var cvId = document.querySelector("#cv-id");
var motivationDiv = document.querySelector(".motivation-div");
var contact = document.querySelector(".contact-div");
var projectItemP = document.querySelector(".project-item-p"); //const githubDiv = document.querySelector(".github-div");
//const websitDiv = document.querySelector(".website-div");

var firstProject = document.getElementById("first-project");
var beforeFirstP = document.createElement("div");
var afterFirstP = document.createElement("div");
var secondProject = document.querySelector("#second-project");
var beforeSecondP = document.createElement("div");
var afterSecondP = document.createElement("div");
var thirdProject = document.querySelector("#third-project");
var beforeThridP = document.createElement("div");
var afterThirdP = document.createElement("div");
var frontEnd = document.querySelector(".front-end-div");
var frontLanguages = document.querySelector(".front-end-languages");
var backendDiv = document.querySelector(".back-end-div");
var backendLanguages = document.querySelector(".back-end-languages");
var other = document.querySelector(".other-div");
var otherTools = document.querySelector(".other-tools");
var pdf = document.createTextNode("Download pdf"); //const cvText = document.querySelector(".cv-text");
//const motivationText = document.querySelector(".motivation-text");
/////////Project content

var websiteTxtOne = document.createTextNode("Website");
var bFP;
var websiteAppendOne;
var githubAppendOne;
var githubOne = document.createTextNode("Github");
var aFP;
var githubTwo = document.createTextNode("Github2");
var websiteTxtTwo = document.createTextNode("Website");
var bFP;
var aSP;
var githubAppendTwo;
var websiteAppendTwo;
var githubThree = document.createTextNode("Github");
var websiteTxtThree = document.createTextNode("Website");
var websiteAppendThree;
var githubAppendThree;
var aTP;
var bTP; ////Credentials

var frontEndId = document.querySelector("#front-end-id");
var frontEndTxt = document.createTextNode("front-end");
var frontEndTxtAppend;
var backEndId = document.querySelector("#back-end-id");
var backEndTxt = document.createTextNode("back end");
var backEndAppend;
var backEndLangId = document.querySelector("#back-end-lang-id");
var djangoDiv = document.createElement("div");
var djangoAppend;
var djangoTxt = document.createTextNode("django");
var djangoTxtAppend;
var otherId = document.querySelector("#other-id");
var otherTxt = document.createTextNode("others");
var ohterIdAppend;
var frontLangId = document.querySelector("#front-end-lang-id");
var html = document.createElement("div");
var css = document.createElement("div");
var sass = document.createElement("div");
var js = document.createElement("div");
var reactJs = document.createElement("div");
var htmlAppend;
var cssAppend;
var sassAppend;
var jsAppend;
var reactJsAppend;
var htmlTxt = document.createTextNode("html");
var cssTxt = document.createTextNode("css");
var sassTxt = document.createTextNode("sass");
var jsTxt = document.createTextNode("js");
var reactJSTxt = document.createTextNode("react");
var htmlTxtAppend;
var cssTxtAppend;
var sassTxtAppend;
var jsTxtAppend;
var reactJsTxtAppend;
var otherToolsId = document.querySelector("#other-tools-id");
var githubTools = document.createElement("div");
var githubToolsTxt = document.createTextNode("github");
var githubToolsAppend;
var githubToolsTxtAppend;
var linuxTools = document.createElement("div");
var linuxToolsTxt = document.createTextNode("linux");
var linuxToolsAppend;
var linuxToolsTxtAppend;
var gulpTools = document.createElement("div");
var gulpToolsTxt = document.createTextNode("gulp");
var gulpToolsAppend;
var gulpToolsTxtAppend;
var reduxTools = document.createElement("div");
var reduxToolsTxt = document.createTextNode("redux");
var reduxToolsAppend;
var reduxToolsTxtAppend; //CV content

var cvTxt = document.createTextNode("cv");
var cvTxtAppend; //Motivation content

var motivationId = document.querySelector("#motivation-id");
var motivationTxt = document.createTextNode("motivation");
var motivationTxtAppend; ////////////////////////////////////

allSpan.forEach(function (letters) {
  letters.addEventListener("mouseover", function (e) {
    letters.animate([{
      transform: "scale(0.5)"
    }, {
      transform: "scale(1.5)"
    }], {
      duration: 1000
    });
  });
});
textLeftDiv.addEventListener("mouseout", function (e) {
  cursor.style.display = "none";
});
logo.addEventListener("click", dropDown, true);
var rocket = document.querySelector(".image-bird");
var btn = document.querySelector(".slide-orange-div");

function dropDown() {
  scaleAnimation();

  function scaleAnimation() {
    logo.style.display = "block";
    rotateDiv.style.cssText = "width:100%; height:1px; display:block";
  }

  motionLeftDiv();

  function motionLeftDiv() {
    if (projectDivItem != null || frontEndId != null || frontLangId != null || backEndId != null || backEndLangId != null || otherId != null || otherTools != null || cvId != null || motivationId != null) {
      Array.from(projectDivItem).forEach(function (e) {
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
    beforeElement.style.cssText = "height:3000px; width:100vw;bottom:200%; background-color:#f56156; position:absolute; display:block";
    rotateDiv.animate([{
      transform: "translateY(0px)"
    }, {
      transform: "translateY(".concat(pxTranslate, ")")
    }], {
      duration: 900,
      fill: "forwards"
    });
    setTimeout(rotationAnimation, 1000);

    function rotationAnimation() {
      beforeElement.style.cssText = "height:300%; width:100vw;top:0%; left:100%; background-color:#f56156;";
      afterElement.style.cssText = "height:300%; width:100vw;  position: absolute; right: 100%;top:0%;background-color:#fff";
      rotateDiv.style.cssText = "display: block; position: absolute; top: 0px; left:50%;transform-origin: center; height:300%;bottom:25%";
      rotateDiv.animate([{
        transform: "rotate(0deg)"
      }, {
        transform: "rotate(180deg)"
      }], {
        duration: 500,
        iterations: 1,
        fill: "forwards"
      });
    }
  }

  fadeOutEffect();

  function fadeOutEffect() {
    var fadeEffect = setInterval(function () {
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
  Array.from(allLi).forEach(function (ele) {
    ele.addEventListener("mouseover", function (e) {
      addOpen();

      function addOpen() {
        blackDiv.classList.add("open");
        projectDiv.classList.add("open");
      }

      function addProject() {
        Array.from(projectDivItem).forEach(function (ele) {
          ele.classList.add("open");
        });
        projectItemP.classList.add("open");
        addContInP();

        function addContInP() {
          bFP = firstProject.appendChild(beforeFirstP);
          websiteAppendOne = bFP.appendChild(websiteTxtOne);
          bFP.style.cssText = "z-index:3; height:50px; width:50%;  background-color: red";
          aFP = firstProject.appendChild(afterFirstP);
          githubAppendOne = aFP.appendChild(githubOne);
          aFP.style.cssText = "z-index:3; height:50px; width:50%;  background-color: blue";
          bSP = secondProject.appendChild(beforeSecondP);
          websiteAppendTwo = bSP.appendChild(websiteTxtTwo);
          bSP.style.cssText = "z-index:3; height:50px; width:50%;  background-color: blue";
          aSP = secondProject.appendChild(afterSecondP);
          githubAppendTwo = aSP.appendChild(githubTwo);
          aSP.style.cssText = "z-index:3; height:50px; width:50%;  background-color: red";
          bTP = thirdProject.appendChild(beforeThridP);
          websiteAppendThree = bTP.appendChild(websiteTxtThree);
          bTP.style.cssText = "z-index:3; height:50px; width:50%;  background-color: red";
          aTP = thirdProject.appendChild(afterThirdP);
          githubAppendThree = aTP.appendChild(githubThree);
          aTP.style.cssText = "z-index:3; height:50px; width:50%;  background-color: blue";
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
        reactJs.style.cssText = "background-color:blue; height:53px; width:100px";
        htmlTxtAppend = html.appendChild(htmlTxt);
        cssTxtAppend = css.appendChild(cssTxt);
        jsTxtAppend = js.appendChild(jsTxt);
        reactJsTxtAppend = reactJs.appendChild(reactJSTxt);
        djangoAppend = backEndLangId.appendChild(djangoDiv);
        djangoDiv.style.cssText = " width:100%";
        djangoTxtAppend = djangoDiv.appendChild(djangoTxt);
        githubToolsAppend = otherToolsId.appendChild(githubTools);
        githubTools.style.cssText = "background-color:blue;height:53px; width:100px";
        githubToolsTxtAppend = githubTools.appendChild(githubToolsTxt);
        linuxToolsAppend = otherToolsId.appendChild(linuxTools);
        linuxTools.style.cssText = "background-color:red; height:53px; width:100px";
        linuxToolsTxtAppend = linuxTools.appendChild(linuxToolsTxt);
        gulpToolsAppend = otherToolsId.appendChild(gulpTools);
        gulpTools.style.cssText = "background-color:blue; height:53px; width:100px";
        gulpToolsTxtAppend = gulpTools.appendChild(gulpToolsTxt);
        reduxToolsAppend = otherToolsId.appendChild(reduxTools);
        reduxToolsAppend = otherToolsId.appendChild(reduxTools);
        reduxTools.style.cssText = "background-color:red; height:53px; width:100px";
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
          jsAppend.parentNode.removeChild(js); // jsAppend.parentNode.removeChild(js);

          reactJsAppend.parentNode.removeChild(reactJs);
          djangoAppend.parentNode.removeChild(djangoDiv);
          githubToolsAppend.parentNode.removeChild(githubTools);
          linuxToolsAppend.parentNode.removeChild(linuxTools);
          gulpToolsAppend.parentNode.removeChild(gulpTools);
          reduxToolsAppend.parentNode.removeChild(reduxTools);
        }
      }

      function removeLiProject() {
        Array.from(projectDivItem).forEach(function (ele) {
          ele.classList.remove("open");
        });
        projectItemP.classList.remove("open");

        if (bFP != null && aSP != null && bSP != null && aTP != null && bTP != null) {
          if (bFP.hasChildNodes() && aSP.hasChildNodes() && bSP.hasChildNodes() && aTP.hasChildNodes() && bTP.hasChildNodes()) {
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
        cvDiv.classList.add("open"); //  setTimeout(addTxt, 1500);

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

      var classList = ele.classList.value;
      applyStyle();

      function applyStyle() {
        switch (classList) {
          case "li project":
            //   projectDiv.style.backgroundColor = "";
            var projectAsync = function () {
              var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                return regeneratorRuntime.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        removeCredentials();
                        removeCv();
                        removeMotivation();

                      case 3:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee);
              }));

              return function projectAsync() {
                return _ref.apply(this, arguments);
              };
            }();

            projectAsync().then(setTimeout(addProject, 300));
            break;

          case "li credentials":
            // projectDiv.style.backgroundColor = "yellow";
            var credentialsAsync = function () {
              var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                  while (1) {
                    switch (_context2.prev = _context2.next) {
                      case 0:
                        removeLiProject();
                        removeCv();
                        removeMotivation();

                      case 3:
                      case "end":
                        return _context2.stop();
                    }
                  }
                }, _callee2);
              }));

              return function credentialsAsync() {
                return _ref2.apply(this, arguments);
              };
            }();

            credentialsAsync().then(setTimeout(addCredentials, 300));
            break;

          case "li cv":
            //  projectDiv.style.backgroundColor = "green";
            var cvAsync = function () {
              var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
                return regeneratorRuntime.wrap(function _callee3$(_context3) {
                  while (1) {
                    switch (_context3.prev = _context3.next) {
                      case 0:
                        removeLiProject();
                        removeCredentials();
                        removeMotivation();

                      case 3:
                      case "end":
                        return _context3.stop();
                    }
                  }
                }, _callee3);
              }));

              return function cvAsync() {
                return _ref3.apply(this, arguments);
              };
            }();

            cvAsync().then(setTimeout(cv(), 300));
            break;

          case "li motivation":
            //  projectDiv.style.backgroundColor = "gray";
            var motivationAsync = function () {
              var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
                return regeneratorRuntime.wrap(function _callee4$(_context4) {
                  while (1) {
                    switch (_context4.prev = _context4.next) {
                      case 0:
                        removeCv();
                        removeLiProject();
                        removeCredentials();

                      case 3:
                      case "end":
                        return _context4.stop();
                    }
                  }
                }, _callee4);
              }));

              return function motivationAsync() {
                return _ref4.apply(this, arguments);
              };
            }();

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
  Array.from(allLi).forEach(function (ele) {
    ele.addEventListener("click", function (event) {});
  });
}

draggableDiv();

function draggableDiv() {
  function getOffsetX(e) {
    textLeftDiv.style.zIndex = "8";
    allSpan.forEach(function (letters) {
      letters.style.zIndex = "8";
      letters.style.color = "#f56156";
    });
    e.stopPropagation();

    if (e) {
      slideOrangeDiv.isDown = true;
      slideOrangeDiv.offset = [slideOrangeDiv.offsetLeft - e.clientX];
    }
  }

  var roundDivJs = document.createElement("div");

  function checkEvent(e) {
    function initialCheckEvent() {
      roundText.appendChild(roundDivJs);
      textLeftDiv.style.zIndex = "10";
      allSpan.forEach(function (letters) {
        letters.style.zIndex = "10";
        letters.style.color = "#fff";
      });
    }

    initialCheckEvent();
    setTimeout(showWelcome, 500);

    function showWelcome() {
      var message = "Hello :)";
      var textWelcome = document.querySelector(".welcome-text");

      var typingPromises = function typingPromises(message, timeout) {
        return _toConsumableArray(message).map(function (ch, i) {
          return new Promise(function (resolve) {
            setTimeout(function () {
              resolve(message.substring(0, i + 1));
            }, timeout * i);
          });
        });
      };

      typingPromises(message, 60).forEach(function (promise) {
        promise.then(function (portion) {
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
      roundDivJs.animate([{
        transform: "translateX(0px)"
      }, {
        transform: "translateX(-159px)"
      }], {
        duration: 1000,
        fill: "forwards"
      });
      setTimeout(showRoundDiv, 1000);

      function showRoundDiv() {
        var a = roundDivJs.style.display;

        if (a == "block") {
          roundDivJs.style.display = "none";
        }
      }
    }

    slideOrangeDiv.isDown = false;
    slideOrangeDiv.addEventListener("mouseout", function (event) {
      event.preventDefault();
      slideOrangeDiv.isDown = false;
    });
  }

  function moveDiv(event) {
    event.stopPropagation();

    if (slideOrangeDiv.isDown) {
      slideOrangeDiv.mousePosition = {
        x: event.clientX
      };
      slideOrangeDiv.style.left = slideOrangeDiv.mousePosition.x + slideOrangeDiv.offset[0] + "px";
      var distanceLeft = Math.floor(Math.floor(slideOrangeDiv.getBoundingClientRect().right) / 100);
      var distanceRight = Math.floor(Math.floor(slideOrangeDiv.getBoundingClientRect().left) / 100);

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
      x: event.clientX
    };
    slideOrangeDiv.style.left = slideOrangeDiv.mousePosition.x + slideOrangeDiv.offset[0] + "px";
    var initialPosition = slideOrangeDiv.style.left;
  }
}

function animateDiv(event) {
  slideOrangeDiv.style.left = "-50%";
}

slideOrangeDiv.addEventListener("mousedown", getInitialPos, true);
slideOrangeDiv.addEventListener("mouseout", animateDiv, true);
slideOrangeDiv.addEventListener("mouseup", animateDiv, true);
},{}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "36187" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/js.js"], null)
//# sourceMappingURL=/js.032be293.js.map