let popupImage = document.querySelector(".popup__image");
let popupText = document.querySelector(".popup__text");
let popupWrapper = document.querySelector(".popup");
let closeButton = document.querySelector(".popup__close");
let overlay = document.querySelector(".overlay");
let projects = Array.from(document.querySelectorAll(".projects__project"));
let imageSource = popupImage.src;

const popupTextContent = {
  lightbulb: "Photoshop manipulation.",
  fairy: "Photoshop manipulation.",
  mountain: "Photoshop manipulation.",
  camera: "Photoshop manipulation.",
  jewellery: "Website design.",
  blog: "Website design.",
  website: "Website design.",
  dolphin: "Photoshop manipulation.",
}

function replacePopupImage(fileName) {
  const regex = "(?<=\\/)\\w+(?=\\.jpg)";
  let currentName = imageSource.match(regex);
  popupImage.src = imageSource.replace(currentName, fileName);
}

function replaceText(newText) {
  popupText.textContent = newText;
}

for (let i in projects) {
  let project = (projects[i].children[0].src);
  const regex = "(?<=\\/)\\w+(?=\\.jpg)";
  let projectName = project.match(regex)[0];
  projects[i].addEventListener("click", () => {
    replacePopupImage(projectName);
    replaceText(popupTextContent[projectName]);
    openPopup();
  })
}

function openPopup() {
  popupWrapper.classList.remove("popup--hidden");
  overlay.classList.remove("overlay--hidden");
}

function closePopup() {
  popupWrapper.classList.add("popup--hidden");
  overlay.classList.add("overlay--hidden");
}

closeButton.addEventListener("click", closePopup);
overlay.addEventListener("click", () => {
  closePopup();
})