import Note from './note.js'

const NotesList = (allNotes, selectedFolderId, selectedNoteId) => {
  if (selectedFolderId) {
    const notes = allNotes.filter(note => note.folder_id === selectedFolderId)

    return `
      <div class="notes"/>
        <ul class="notes_list">${
          notes.length > 0
            ? notes.map(note => Note(note, note.id === selectedNoteId)).join('')
            : 'Please add your first note in this folder'
        }</ul>
        <button onclick="Actions.addNoteToFolder(${selectedFolderId})">Add note</button>
      </div>
    `
  } else {
    return `<ul class="notes"/>Please select folder first</ul>`
  }
}
export default NotesList
