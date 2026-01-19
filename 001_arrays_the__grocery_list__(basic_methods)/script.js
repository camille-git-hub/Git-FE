// For this activity work off the platform to be able to use the console.

let shoppingList = ["Milk", "Eggs", "Bread", "Butter"];

// Create the function to add an item to the list

function addItem (item) {
    shoppingList.push(item);
}

// Create the function to delete an item of the list

function deleteItem (item) {
    shoppingList.splice(item, 1);
}

// Create the function to display the list in the console

function displayList () {
    console.log(shoppingList);
}

// Test your functions
// Add the items

addItem("cheese");

// Remove the item

deleteItem(0);

// Display the list

displayList();
