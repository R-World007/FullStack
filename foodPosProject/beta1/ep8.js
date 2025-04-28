const newMenu = document.querySelector(".new-menu");
const addEdit = document.querySelector(".add-edit-menu-btn");
const modal = document.querySelector(".modal");
const menuForm = document.querySelector("#menu-form");
const menuContainer = document.querySelector(".menu-container");
const editBtn = document.querySelectorAll(".edit-menu-btn");
const menus = [];

// new menu button
newMenu.addEventListener("click", () => {
  //   addEdit.innerHTML("Add Menu");
  console.log("hi");
  modal.style.display = "flex";
  menuForm.reset();
});
// to close modal when you hit background
window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});

// add menu buttom
addEdit.addEventListener("click", () => {
  console.log("addedit");
  const formData = new FormData(menuForm);
  console.log(formData);
  const menu = {
    name: formData.get("name"),
    price: Number(formData.get("price")),
    isAvablive: formData.get("isAvailable") ? true : false,
    image: URL.createObjectURL(formData.get("image")),
  };
  menus.push(menu);
  modal.style.display = "none";
  showMenu();
  console.log(menu, menus);
});

// show menu
const showMenu = () => {
  menuContainer.innerHTML = "";
  menus.forEach((menu) => {
    const menuCard = document.createElement("div");
    menuCard.classList.add("menu-card");
    menuCard.innerHTML = `
    <div class="menu-card-header">
      <h3>${menu.name}</h3>
      <p>${menu.price}</p>
    </div>
    <div class="menu-card-body">
      <img src="${menu.image}" alt="menu-image" width="300"  height="300"/>
    </div>
    <div class="menu-card-footer mt-2">
      <button class="btn btn-primary edit-menu-btn" data-id="${menu.id}">Edit</button>
      <button class="btn btn-primary delete-menu-btn" data-id="${menu.id}">Delete</button>
    </div>`;
    menuContainer.appendChild(menuCard);
  });
};

// edit button
editBtn.forEach((button) => {
  button.addEventListener("click", (e) => {
    console.log(e.target.dataset.id);
    //currentMenuId =
  });
});
