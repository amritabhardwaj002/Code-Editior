const copyButton = document.getElementById("copyButton");
const saveButton = document.getElementById("saveButton");
const lockButton = document.getElementById("lockButton");
const codeContent = document.getElementById("codeContent");
let isLocked = false;
copyButton.addEventListener("click", () => {
const textToCopy = codeContent.innerText;
if (textToCopy) {
navigator.clipboard.writeText(textToCopy)
.then(() => alert("Code copied to clipboard"))
.catch(err => console.error("Copy failed", err));
}
});
saveButton.addEventListener("click", () => {
if (!isLocked) {
const code = codeContent.innerText;
alert("Code saved!");
} else {
alert("Code is locked. Unlock it to save.");
}
});
lockButton.addEventListener("click", () => {
isLocked = !isLocked;
lockButton.classList.toggle("code-toolbar__button--unlock");
lockButton.textContent = isLocked ? "Unlock" : "Lock";
codeContent.contentEditable = !isLocked;
});
codeContent.addEventListener("keydown", (e) => {
if (e.key === 'Tab' && !isLocked) {
e.preventDefault();
const selection = window.getSelection();
const range = selection.getRangeAt(0);
const tabNode =
document.createTextNode('\u00A0\u00A0\u00A0\u00A0');
range.insertNode(tabNode);
range.setStartAfter(tabNode);
range.setEndAfter(tabNode);
selection.removeAllRanges();
selection.addRangee(range);
}
});