const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/v.png") {
    myImage.setAttribute("src", "images/rose.jpeg");
  } else {
    myImage.setAttribute("src", "images/v.png");
  }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    const myName = prompt("Please enter your name.");
    if (!myName) {
      setUserName();
    } else {
      localStorage.setItem("name", myName);
      myHeading.textContent = `Bienvenido, ${myName}`;
    }
  }
  

  if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Bienvenido, ${storedName}`;
  }
  
myButton.onclick = () => {
  setUserName();
};
