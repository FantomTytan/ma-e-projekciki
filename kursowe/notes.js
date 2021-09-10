const addBtn = document.querySelector('.add')
const saveBtn = document.querySelector('.save')
const cancelBtn = document.querySelector('.cancel')
const deleteBtns = document.querySelector('.delete-note')
const deleteAllBtn = document.querySelector('.delete-all')
const noteArea = document.querySelector('.note-area')
const notePanel = document.querySelector('.note-panel')
const category = document.querySelector('#category')
const textArea = document.querySelector('#text')
const error = document.querySelector('.error')

let selectedValue;
let cardId = 0;

const openPanel = () => {
    notePanel.style.display = 'flex';
}
const closePanel = () => {
    notePanel.style.display = 'none';
    error.style.visibility = 'hidden';
    textArea.value = '';
    category.selectedIndex = 0;
}
const addNote = () => {
    if(textArea.value !=='' && category.options[category.selectedIndex].value !== '0')
    {   createNote();
        error.style.visibility = 'hidden';
    } else {
        error.style.visibility = 'visible';
    }

}
const createNote = () => {
    const newNote = document.createElement('div')
    newNote.classList.add('note')
    newNote.setAttribute('id', cardId);
    newNote.innerHTML = `<div class="note-header">
    <h3 class="note-title">${selectedValue}</h3>
    <button class="delete-note" onclick="deleteNote(${cardId})">
        <i class="fa fa-times icon"></i>
    </button>
</div>
<div class="note-body"> ${textArea.value} </div>`;
    noteArea.appendChild(newNote);
    cardId++;
    textArea.value = '';
    category.selectedIndex = 0;
    notePanel.style.display = 'none';
    chceckColor(newNote)
}
const selectValue = () => {
    selectedValue = category.options[category.selectedIndex].text;
    console.log(selectedValue);
}
const chceckColor = note => {
    switch (selectedValue) {
        case 'Zakupy':
            note.style.background = 'rgb(72,255,0)';
            break;
        case 'Praca':
            note.style.background = 'rgb(255,243,0)';
            break;
        case 'Inne':
            note.style.background = 'rgb(0,170,255)';
            break;
    }
}
const deleteNote = id => {
    const noteToDelete = document.getElementById(id)
    noteArea.removeChild(noteToDelete)
}
const deleteAllNotes = () => {
    noteArea.textContent = "";

}
const kij = () => {
    console.log('kijówka');
    console.log(deleteAllBtn)
}
addBtn.addEventListener('click', openPanel)
cancelBtn.addEventListener('click', closePanel)
saveBtn.addEventListener('click', addNote)
deleteAllBtn.addEventListener('click', deleteAllNotes)
