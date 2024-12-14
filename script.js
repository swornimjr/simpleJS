// script.js file

// Set content for the heading
document.getElementById("heading").innerText = "Understanding Arrays and Strings";

// Set content for Arrays section
document.getElementById("arrayTitle").innerText = "Arrays";
document.getElementById("arrayDesc").innerText = "Definition: An array is a data structure that can store a fixed-size sequential collection of elements of the same type. It is used to store multiple values in a single variable.";
document.getElementById("arrayDesc").innerText += "\n\nFeatures: Arrays allow random access of elements, are of fixed size, and elements are stored in contiguous memory locations.";
document.getElementById("arrayDesc").innerText += "\n\nDeclaration: Arrays are declared using square brackets. For example: const arr = [1, 2, 3];";
document.getElementById("arrayDesc").innerText += "\n\nExample: Iterating through an array using a loop: \nconst numbers = [1, 2, 3]; \nnumbers.forEach(num => console.log(num));";

// Set content for Strings section
document.getElementById("stringTitle").innerText = "Strings";
document.getElementById("stringDesc").innerText = "Definition: A string is a sequence of characters used to represent text. It can include letters, numbers, and symbols.";
document.getElementById("stringDesc").innerText += "\n\nFeatures: Strings are immutable, can be concatenated using operators, and support various methods for manipulation.";
document.getElementById("stringDesc").innerText += "\n\nDeclaration: Strings are declared using single or double quotes. For example: const str = \"Hello, World!\";";
document.getElementById("stringDesc").innerText += "\n\nExample: Converting a string to uppercase: \nconst message = \"hello\"; \nconsole.log(message.toUpperCase());";

// Additional content for learning resources
const resourcesTitle = document.createElement("h2");
resourcesTitle.innerText = "Additional Resources";
document.body.insertBefore(resourcesTitle, document.body.lastElementChild);

resourcesList = document.createElement("ul");
resourcesList.innerHTML = `
  <li><a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array' target='_blank'>MDN Web Docs: Arrays</a></li>
  <li><a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String' target='_blank'>MDN Web Docs: Strings</a></li>
`;
document.body.insertBefore(resourcesList, document.body.lastElementChild);

// Add footer section
 footer = document.createElement("footer");
footer.innerText = "© 2024 SM. All rights reserved.";
document.body.insertBefore(footer, document.body.lastElementChild);
