const givenCurrency = document.querySelector("#given-currency");
const receivedCurrency = document.querySelector("#received-currency");
const dropDown = document.querySelector(".main__currency");
const received = document.querySelector(".received");
givenCurrency.addEventListener("click", () => {
  dropDown.classList.toggle("active");
});
receivedCurrency.addEventListener("click", () => {
  received.classList.toggle("active");
});

const languages = document.querySelector("#languages");
const dropDownLanguages = document.querySelector(".header__languages");

languages.addEventListener("click", () => {
  dropDownLanguages.classList.toggle("active");
});

const popupLanguages = document.querySelector("#popup-languages");
const dropDownLanguages2 = document.querySelector(".popup__languages");
popupLanguages.addEventListener("click", () => {
  dropDownLanguages2.classList.toggle("active");
});

const body = document.querySelector('.page');
const burgerMenu = document.querySelector(".burger-menu");
burgerMenu.addEventListener("click", () => {
  //console.log("clocked");
  document.querySelector(".popup-menu").classList.toggle("popup-active");
  burgerMenu.classList.toggle('close');
  body.classList.toggle('scroll-hidden')
});
