/**
 * LOCAL STORAGE AND DOM MANIPULATION
 * In this task you will write some functions to let the browser save
 * some of your actions results and retrieve them when the page is reloaded.
 * You will be working with the localStorage.
 * Make sure to read the following exercise-info file/files before you start
 * * 03 LocalStorage.md
 * * 04 EventDelegation.md
 * Local Storage might be shortened to "LS" in the comments beneath.
 * @requirement
 * Event delegation MUST be used
 */



/**
 * @task
 * Implement the 'click' event that solves several tasks by the item click:
 * * If the item is NOT in favorites LS and has white background color
 * * * Changes the color of the box to red
 * * * Add the item's id to the local storage
 * * Else if the box is in favorites LS and has white red color
 * * * Changes the color of the box to white
 * * * Add the item's id to the local storage
 * * Make all the items that are listed in the favorites LS save the red background color when the page is reloaded
 */

// Your code goes here...


/**
 * @hint
 * Here is a plan of how you can structure your code. You can follow it or choose your own way to go
 * * Select the container that holds all the items
 * * Create a function that sets the background to be red for the item with an id listed in favorites LS
 * * Run this function
 * * Create a function that adds an id to favorites LS by id passed as an argument
 * * Create a function that deletes an id from favorites LS by id passed as an argument
 * * Create a callback function that updates the element background color and does the
 * * /~/ action with the item's id depending on if it is in LS or not. The function should
 * * /~/ do that to a specific item that has a specific class value
 * * add the event listener to the container, pass the callback.
 */

// // Your code goes here...
const cards = document.querySelector('.cardsContainer');
const favs = [];
const favsLS = localStorage.getItem('favs');
const favsArr = favsLS ? JSON.parse(favsLS): [];


// set background color to red & set dataset to true
function setColor(card) {
  const item = card.target;
  if (Array.from(item.classList).includes('card')) {
    if (item.dataset.fav === 'false') {
      // set background color to red & set dataset to true
      item.style.backgroundColor = 'red';
      item.dataset.fav = 'true';
      // add item id to local storage
      favs.push(item.id);
      localStorage.setItem('favs', JSON.stringify(favs));
  }else if (item.dataset.fav === 'true') {
    // set background color to white & set dataset to false
    item.style.backgroundColor = 'white';
    item.dataset.fav = 'false'; 
    // remove item id from local storage
    favs.splice(favs.indexOf(item.id), 1);
    localStorage.setItem('favs', JSON.stringify(favs));
  }
  }
}

// set background color to red & set dataset to true
favsArr.forEach((id) => {
  const item = document.getElementById(id);
  item.style.backgroundColor = 'red';
  item.dataset.fav = 'true';
  favs.push(item.id);
});

cards.addEventListener('click',setColor);
