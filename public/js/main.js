// Login
var btnLogin = document.querySelector(".button-login");
var close = document.querySelector(".close");
var closebtn = document.querySelector(".closebtn");

btnLogin.onclick = function () {
  btnLogin.setAttribute("data-target", "#modelId");
  btnLogin.setAttribute("data-toggle", "modal");
};

close.onclick = function () {
  close.setAttribute("data-dismiss", "modal");
};

closebtn.onclick = function () {
  closebtn.setAttribute("data-dismiss", "modal");
};

// Reverve

var btnReverve = document.querySelector(".btnReverve");
btnReverve.onclick = function () {
  btnReverve.setAttribute("data-placement", "top");
  btnReverve.setAttribute("data-target", "#modelId1");
  btnReverve.setAttribute("data-toggle", "modal");
};

var closeRe = document.querySelector("#closeRe");
closeRe.onclick = function () {
  closeRe.setAttribute("data-dismiss", "modal");
};

var closebtnRe = document.querySelector(".closebtnRe");
closebtnRe.onclick = function () {
  closebtnRe.setAttribute("data-dismiss", "modal");
};
