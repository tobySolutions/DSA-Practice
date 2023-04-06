import databaseJSON from "./database.js";

const form = document.querySelector("form");
const inputBox = document.querySelector("input");
const list = document.querySelector("ul");
const div = document.querySelector("#wrapper");
const p = document.createElement("p");

form.addEventListener("submit", handleSearch);


// O(N) SPACE || O(N) TIME
function handleSearch(event) {
  event.preventDefault();
  list.innerHTML = "";
  p.innerText = " ";

  if (!inputBox.value) return;

  let searchPhrase = inputBox.value.toLowerCase();
  let words = searchPhrase.split(" ");
  const uniqueWords = new Set(words);
  words = [...uniqueWords];

  const databaseKeys = Object.keys(databaseJSON);

  let hasLinks = false;

  words.map((word) => {
    if (databaseKeys.includes(word)) {
      const resultLink = databaseJSON[word];
      console.log(databaseJSON[word]);

      hasLinks = true;
      const listItem = document.createElement("li");
      const hyperLink = document.createElement("a");

      hyperLink.setAttribute("href", resultLink);
      hyperLink.setAttribute("target", "_blank");
      hyperLink.innerText = resultLink;
      listItem.append(hyperLink);
      list.append(listItem);

      return word;
    }
  });

  if (hasLinks === false) {
    p.innerText = "Not Result Found";
    list.append(p);
  }
  inputBox.value = "";
}

// split the the words in the input to individual strings
// then put the items in a set to handle duplicates

// Loop through the database and match unique words to each word
