/*
 *  Create a shopping list or todo app that allows
 *  a user to add and remove items from a list.
 *  Items should have user provided text.
 *
 *  Ex: Each 'item' can be an input box that allows
 *  the user to type text or you can have one text
 *  box that a user can type text and click 'add'
 *  to add to the list.
 *
 *  Requirements:
 *   -Can add items/tasks to the list
 *   -Can remove items/tasks from the list
 *   -At least 5 styles applied (color, padding, etc)
 *    these can be applied in the header (<style>)
 *    or via DOM manipulation or via an external css file.
 *    If you use a css file, please upload it
 *
 *  Please upload your HTML and JS files with your
 *  submission along with your css file if you used one.
 */

// YOUR CODE STARTS HERE
// shopping list && updating ep 65
const inputTag = document.getElementsByClassName("form-control")[0];
const shoppingListContainer = document.getElementsByClassName(
  "shoppingListContainer"
)[0];

let productId = 1;
const myFunction = (event) => {
  //console.log("Test!", event.target.value);
  const inputValue = event.target.value;
  const spanTab = document.createElement("span");
  const trashIcon = document.createElement("i");
  trashIcon.classList.add("fa-solid", "fa-trash");
  const productContainer = document.createElement("div");
  productContainer.classList.add("productContainer");
  const parentDiv = document.createElement("div");
  //<i class="fa-solid fa-trash"></i>
  parentDiv.addEventListener("click", () => {
    console.log("click!");
    const classExist = parentDiv.classList.contains("purchased");
    if (classExist) {
      parentDiv.classList.remove("purchased");
    } else {
      parentDiv.classList.add("purchased");
    }
  });
  spanTab.id = productId;
  parentDiv.classList.add("productLists");
  const product = productId.toString() + ". " + inputValue;
  spanTab.append(product);
  parentDiv.append(spanTab);
  productContainer.append(parentDiv, trashIcon);
  shoppingListContainer.append(productContainer);
  inputTag.value = "";
  productId += 1;
  // Trash icron
  trashIcon.addEventListener("click", () => {
    productContainer.remove();
    productId -= 1;
  });
};
inputTag.addEventListener("change", myFunction);
// YOUR CODE ENDS HERE
