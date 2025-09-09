const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

button.addEventListener('click', function () {
    if (input.value.trim() !== '') {
        // Create a new list item//
        const li = document.createElement('li');
        const deleteButton = document.createElement('button');
        
        // Set content and attributes
        li.textContent = input.value;
        deleteButton.textContent = 'X';
        li.append(deleteButton);
        list.append(li)

        // Delete functionality
        deleteButton.addEventListener('click', () => {
            list.removeChild(li);
        });
        // Clear the input field
        input.value = '';
    }
    // Refocus the input field
    input.focus();
});