const form = document.querySelector("#form");
const input = document.querySelector("#form input");
const randomize = document.querySelector("#randomize");
const randomized = document.querySelector("#randomized");
const words = document.querySelector("#words");
const history = document.querySelector("#history");
const historyList = document.querySelector("#history ul");
const viewHistory = document.querySelector("#view-history");

let wordsToRandomize = [];
let randomizedWords = [];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  randomized.innerHTML = "";

  const value = input.value;
  if (value) {
    wordsToRandomize.push(value);
    input.value = "";
    const li = document.createElement("li");
    li.textContent = value;
    words.appendChild(li);
  } else {
    alert("Please enter a value");
  }
});

randomize.addEventListener("click", () => {
  if (wordsToRandomize.length === 0) {
    alert("Please enter words to randomize");
    return;
  }

  // Clear the previous list
  randomized.innerHTML = "";
  words.innerHTML = "";
  // Rearrange the array in random order
  const randomWords = wordsToRandomize.sort(() => Math.random() - 0.5);
  randomWords.forEach((word) => {
    const li = document.createElement("li");
    li.textContent = word;
    randomizedWords.push(word);
    randomized.appendChild(li);
  });

  // Create an object in the format of {timestamp: [randomized words]}
  const timestamp = new Date().getTime();
  const obj = {};
  obj[timestamp] = randomWords;
  // Append the object in local storage
  const currHistory = localStorage.getItem("randomizedWords");
  if (currHistory) {
    const history = JSON.parse(currHistory);
    history.push(obj);
    localStorage.setItem("randomizedWords", JSON.stringify(history));
  } else {
    localStorage.setItem("randomizedWords", JSON.stringify([obj]));
  }

  wordsToRandomize = [];
  randomizedWords = [];

  loadHistory();
});

viewHistory.addEventListener("click", () => {
  const savedHistory = JSON.parse(localStorage.getItem("randomizedWords"));

  if (savedHistory && savedHistory.length > 0) {
    history.classList.toggle("hidden");
  } else {
    alert("No history found");
  }
});

const loadHistory = () => {
  historyList.innerHTML = "";
  const savedHistory = JSON.parse(localStorage.getItem("randomizedWords"));

  if (savedHistory && savedHistory.length > 0) {
    savedHistory.forEach((obj) => {
      const timestamp = Object.keys(obj)[0];
      const words = obj[timestamp];
      const li = document.createElement("li");
      li.textContent = `${new Date(+timestamp).toLocaleString()}: ${words.join(
        ", "
      )}`;
      historyList.appendChild(li);
    });
  }
};

loadHistory();

document.body.addEventListener("click", (e) => {
  if (e.target !== viewHistory) {
    history.classList.add("hidden");
  }
});
