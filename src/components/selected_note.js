import NoteText from './note_text.js'

const SelectedNote = (note) => `
  <div class="selected_note">${
    note ? NoteText(note) : '<b>Please select note</b>'
  }</div>
`
export default SelectedNote
