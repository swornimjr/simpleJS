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

// Add Variables section
const varTitle = document.createElement("h2");
varTitle.innerText = "Variables";
document.body.insertBefore(varTitle, document.body.lastElementChild);

const varDesc = document.createElement("p");
varDesc.innerText = "Definition: Variables are containers for storing data values. In JavaScript, variables can be declared using var, let, or const.";
varDesc.innerText += "\n\nExample: \nlet x = 5; \nconst y = 10; \nvar z = x + y; \nconsole.log(z);";
document.body.insertBefore(varDesc, document.body.lastElementChild);

// Add Operators section
const opTitle = document.createElement("h2");
opTitle.innerText = "Operators";
document.body.insertBefore(opTitle, document.body.lastElementChild);

const opDesc = document.createElement("p");
opDesc.innerText = "Operators are used to perform operations on variables and values.";
opDesc.innerText += "\n\nArithmetic Operators: +, -, *, /, %. Example: \nlet sum = 5 + 3; \nconsole.log(sum);";
opDesc.innerText += "\n\nComparison Operators: ==, ===, >, <. Example: \nlet isEqual = 5 == 5; \nconsole.log(isEqual);";
opDesc.innerText += "\n\nLogical Operators: &&, ||, !. Example: \nlet result = true && false; \nconsole.log(result);";
document.body.insertBefore(opDesc, document.body.lastElementChild);

// Add Data Types section
const dataTitle = document.createElement("h2");
dataTitle.innerText = "Data Types";
document.body.insertBefore(dataTitle, document.body.lastElementChild);

const dataDesc = document.createElement("p");
dataDesc.innerText = "JavaScript supports various data types, including primitive and non-primitive types.";
dataDesc.innerText += "\n\nPrimitive Types: \n1. String: \"Hello\" \n2. Number: 42 \n3. Boolean: true \n4. Undefined \n5. Null";
dataDesc.innerText += "\n\nNon-Primitive Types: \n1. Object: { name: 'John', age: 30 } \n2. Array: [1, 2, 3]";
document.body.insertBefore(dataDesc, document.body.lastElementChild);

// Additional content for learning resources
const resourcesTitle = document.createElement("h2");
resourcesTitle.innerText = "Additional Resources";
document.body.insertBefore(resourcesTitle, document.body.lastElementChild);

const resourcesList = document.createElement("ul");
resourcesList.innerHTML = `
  <li><a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array' target='_blank'>MDN Web Docs: Arrays</a></li>
  <li><a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String' target='_blank'>MDN Web Docs: Strings</a></li>
  <li><a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var' target='_blank'>MDN Web Docs: Variables</a></li>
  <li><a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators' target='_blank'>MDN Web Docs: Operators</a></li>
  <li><a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures' target='_blank'>MDN Web Docs: Data Types</a></li>
`;
document.body.insertBefore(resourcesList, document.body.lastElementChild);

// Add footer section
const footer = document.createElement("footer");
footer.innerText = "© 2024 SM. All rights reserved.";
document.body.insertBefore(footer, document.body.lastElementChild);
