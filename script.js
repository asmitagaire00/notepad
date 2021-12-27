const notepadTextarea = document.getElementById("notepad-textarea");
const result = document.getElementById("result");
const addNote = document.getElementsByClassName("add-note")[0];
const wordsCount = document.getElementsByClassName("words-value")[0];
const charactersCount = document.getElementsByClassName("characters-value")[0];

notepadTextarea.addEventListener("input", handleTextAreaChange);
addNote.addEventListener("click", handleNoteChange);

const STORAGE_KEY = "notepad-content";

const content = localStorage.getItem(STORAGE_KEY);
if (!content) {
  notepadTextarea.value = "";
} else {
  notepadTextarea.value = content;
  charactersCount.innerHTML = content.length;
  wordsCount.innerHTML = content.trim().split(" ").length;
}

function handleTextAreaChange(e) {
  let inputContent = e.target.value;
  const lastChar = inputContent[inputContent.length - 1];

  localStorage.setItem(STORAGE_KEY, inputContent);

  // update char count
  charactersCount.innerHTML =
    parseInt(charactersCount.innerHTML) + getCharCount(lastChar);

  // update word count
  getWordCount(inputContent);
}

function handleNoteChange() {
  if (notepadTextarea.value === "") {
    addNote.style.display = "disable";
  } else {
    let deletenote = confirm("Do you want to remove this content?");
    if (deletenote) {
      localStorage.setItem(STORAGE_KEY, "");
      notepadTextarea.value = "";
      charactersCount.innerHTML = 0;
      wordsCount.innerHTML = 0;
    }
  }
}

/**
 * Returns 1 if the char is not a space
 * @param {char} ch a character
 * @returns int
 */
function getCharCount(ch) {
  let count = 0;

  if (ch !== " ") {
    count++;
  }

  return count;
}

/**
 * @param {words}  inputContent number of words
 * @returns int
 */
function getWordCount(inputContent) {
  if (inputContent !== " ") {
    wordsCount.innerHTML = inputContent.trim().split(" ").length;
  }
  return wordsCount.innerHTML;
}
