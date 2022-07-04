function displayInput() {
  const inputBox = document.getElementById("inputEl").value;
  const div = document.getElementById("userDiv");
  // let userInput = "";
  // inputBox.value = userInput;
  // div.innerHTML = userInput;
  div.innerHTML = inputBox;
  div.style.backgroundColor = "darkblue";
}
