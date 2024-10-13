//UPDATE

// EXERCISE 1: Selecting Elements
// TODO: Select the element with the ID 'mainTitle' and log it to the console.

const mainTitleElement = document.getElementById('mainTitle');
console.log(mainTitleElement);

// Exercise 2: Changing HTML Content
// TODO: Select all paragraph elements and change the content of the second paragraph to "This paragraph has been changed."

const paragraphs = document.querySelectorAll('.paragraph');
paragraphs[1].textContent = 'This paragraph has been changed.';

// Exercise 3: Changing CSS Styles
// TODO: Select the first list item and change its text color to red and background color to light blue

const firstListItem = document.querySelector('#list li');
firstListItem.style.color = 'red';


// Exercise 4: Adding/Removing Classes
// TODO: Add the "highlight" class to the first paragraph
// TODO: Remove the "highlight" class from the first paragraph after 3 seconds

const firstParagraph = document.querySelector('.paragraph');
firstParagraph.classList.add('highlight');
setTimeout(() => {
  firstParagraph.classList.remove('highlight');
}, 3000);

// Exercise 5: Creating and Appending Elements
// TODO: Create a new list item with the text "Item 4" and append it to the existing list

const newListItem = document.createElement('li');
newListItem.textContent = 'Item 4';
const list = document.getElementById('list');
list.appendChild(newListItem);

// Exercise 6: Removing Elements
// TODO: Remove the last list item from the unordered list

// Exercise 7: Handling Events
// TODO: Add a click event listener to the button that displays an alert saying "Button clicked!"

// Exercise 8: Working with Input
// TODO: Add an input event listener to the input field that displays the current input value in the result div

// Exercise 9: Toggling Visibility
// TODO: Add a click event listener to the button that toggles the visibility of the content div

// Exercise 10: Modifying Attributes
// TODO: Select the input field and change its placeholder text to "Enter your name"