const textArea = document.getElementById("input-textarea");
const wordCount = document.getElementById("word-count");
const charachterCount = document.getElementById("charac-count");

textArea.addEventListener("input", () => {
  charachterCount.innerHTML = textArea.value.length;
  wordCount.innerHTML = textArea.value.split(" ").length;
  let txt = textArea.value.trim();
});
