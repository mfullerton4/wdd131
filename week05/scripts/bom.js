const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

const chaptersArray = getChapterList() || [];
chaptersArray.forEach(chapter => {
    displayList(chapter);
});

function displayList(item) {
    let li = document.createElement('li');
    let deleteButton = document.createElement('button');

    li.textContent = item;
    deleteButton.textContent = '❌';
    li.append(deleteButton);
    list.append(li);

    deleteButton.addEventListener('click', () => {
        list.removeChild(li);
        deleteChapter(item);
    });
}

function setChapterList(array) {
    localStorage.setItem('chapters', JSON.stringify(array));
}

function getChapterList() {
    return JSON.parse(localStorage)
}

function deleteChapter(chapter) {
    chapter = chapter.slice(0, chapter.length - 1);
    chaptersArray = chaptersArray.filter(item => item !== chapter);
    setChapterList(chaptersArray);
}

button.addEventListener('click', function () {
    if (input.value.trim() !== '') {
        // Create a new list item//
        displayList(input.value);
        chaptersArray.push(input.value);
        setChapterList(chaptersArray);
    
    }
    // Refocus the input field
    input.focus();
});


