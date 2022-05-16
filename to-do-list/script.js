const inputField = document.querySelector('.inputField');
const button = document.querySelector('.button');
const toDoContainer = document.querySelector('.toDoContainer');

button.addEventListener('click', () => {
    const item = document.createElement('li');
    const remove = document.createElement("button");
    item.innerText = inputField.value;
    toDoContainer.appendChild(item);
    toDoContainer.appendChild(remove);
    item.classList.add('item');
    remove.innerText = 'Remove';
    remove.classList.add('btn');
    inputField.value = '';

    item.addEventListener("click", () => {
        item.classList.add("itemCompleted");
    });

    remove.addEventListener('click', () => {
        toDoContainer.removeChild(item);
        toDoContainer.removeChild(remove);
    });
});

