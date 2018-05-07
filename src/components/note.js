const Note = (note, shouldSelectNote) => `
  <div class="note ${shouldSelectNote ? ' is-selected' : ''}" onclick="Actions.selectNote(${note.id})">${note.title}</div>
`
export default Note
