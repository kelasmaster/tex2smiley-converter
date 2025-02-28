// script.js

// Define a mapping of text patterns to smileys
const smileyMap = {
  ":)": "😊",
  ":(": "😢",
  ":D": "😄",
  ";)": "😉",
  ":P": "😜",
  ":O": "😲",
  "<3": "❤️",
  ":|": "😐",
};

// Function to replace text with smileys
function convertTextToSmileys(text) {
  let result = text;
  for (const [key, value] of Object.entries(smileyMap)) {
    const regex = new RegExp(key.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "g");
    result = result.replace(regex, value);
  }
  return result;
}

// Event listener for real-time conversion
const textInput = document.getElementById("textInput");
const outputDiv = document.getElementById("output");

textInput.addEventListener("input", () => {
  const inputText = textInput.value;
  const convertedText = convertTextToSmileys(inputText);
  outputDiv.textContent = convertedText;
});

// Copy button functionality
const copyButton = document.getElementById("copyButton");
copyButton.addEventListener("click", () => {
  const textToCopy = outputDiv.textContent;
  navigator.clipboard.writeText(textToCopy).then(() => {
    alert("Copied to clipboard!");
  }).catch((err) => {
    console.error("Failed to copy text: ", err);
  });
});
