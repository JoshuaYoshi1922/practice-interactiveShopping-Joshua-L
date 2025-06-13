const addItem = document.getElementById("add-item");
const shoppingList = document.getElementById("shopping-list");

function addingItems() {
    
    const li = document.createElement('li');
    let newItem = document.getElementById("new-item");
    let newItemValue = document.createTextNode(newItem.value);
    li.appendChild(newItemValue);
    shoppingList.appendChild(li);
    newItem.value = "";
    let ItemValue = newItem.value;
    let confirmButton = document.createElement('button');

    const removeButton = document.createElement('button');
    removeButton.textContent = "Remove";

    removeButton.addEventListener('click', () => {
        li.remove();
    })
    li.appendChild(removeButton);

    const editButton = document.createElement('button');
    
    editButton.textContent = 'Edit';
    li.appendChild(editButton)

   editButton.addEventListener("click",() =>{
        li.innerHTML = `<input value="${ItemValue}" id="updated-value"></input>`
        confirmButton.textContent = "Confirm"
        confirmButton.classList.add("confirm-button");
        li.appendChild(confirmButton);
        
    })

    confirmButton.addEventListener("click", () => {
        let editedValue = document.getElementById('updated-value').value;
        li.textContent = editedValue;
    })
    
}
addItem.addEventListener("click", () => {
    console.log('item added!')
    addingItems();
})