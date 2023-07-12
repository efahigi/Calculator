let showScreen = document.querySelector(".showScreen");
const uploadToShowScreen = (number) => {
    showScreen.append(number);
};
const clearShowScreen = () => {
    showScreen.innerHTML = "0";
};
const calculateTerms = (x, y, sign) => {
  if (sign === "+") {
    showScreen.innerHTML = parseInt(x) + parseInt(y);
  } else if (sign === "-") {
    showScreen.innerHTML = parseInt(x) - parseInt(y);
  } else if (sign === "X") {
    showScreen.innerHTML = parseInt(x) * parseInt(y);
  } else if (sign === "%") {
    showScreen.innerHTML = parseInt(x) / parseInt(y);
  } else {
    alert("somethings wrong");
  }
};

const splitInput = () => {
  let nput = showScreen.textContent;
  console.log(nput);
  if (nput.includes("+")) {
    let solve = nput.split("+");
    console.log("input:", solve);
    calculateTerms(solve[0], solve[1], "+");
  } else if (nput.includes("-")) {
    let solve = nput.split("-");
    console.log("input:", solve);
    calculateTerms(solve[0], solve[1], "-");
  } else if (nput.includes("X")) {
    let solve = nput.split("X");
    console.log("input:", solve);
    calculateTerms(solve[0], solve[1], "X");
  } else if (nput.includes("%")) {
    let solve = nput.split("%");
    console.log("input:", solve);
    calculateTerms(solve[0], solve[1], "%");
  } else {
    alert("You need to add a Symbol in order to calculate");
  }
  
};
