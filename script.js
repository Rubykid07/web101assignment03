"use strict";
const jobContentItem = document.querySelectorAll(".grid-content-item");
const view = document.querySelectorAll(".view-more-less");
const jobContent = document.querySelectorAll(".grid-content");
const submit = document.querySelector(".submit");
const info = document.querySelector(".info");
const inputForm = document.querySelector(".input-form");
const regex =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

submit.addEventListener("click", function () {
  let email = document.getElementById("InputEmail").value;
  if (regex.test(email)) {
    info.classList.remove("hide");
    inputForm.classList.add("hide");
  } else {
    alert("Không hợp lệ!");
  }
});
for (let i = 0; i < jobContent.length; i++) {
  jobContent[i].addEventListener("mouseover", function () {
    view[i].classList.remove("hide");
    if (jobContentItem[i].classList.contains("hide")) {
      view[i].addEventListener("click", function () {
        jobContentItem[i].classList.remove("hide");
        view[i].textContent = "▲ View less";
      });
    } else {
      view[i].addEventListener("click", function () {
        jobContentItem[i].classList.add("hide");
        view[i].textContent = "▼ View more";
      });
    }
  });
  jobContent[i].addEventListener("mouseout", function () {
    view[i].classList.add("hide");
  });
}
