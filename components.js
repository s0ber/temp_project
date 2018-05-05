const App = ({ui, data}) => {
  const {selectedFolderId, selectedNoteId} = ui
  const selectedFolder = selectedFolderId ? data.folders.find(folder => folder.id === selectedFolderId) : null
  const selectedNote = selectedFolder && selectedNoteId ? data.notes.find(note => note.id === selectedNoteId) : null

  return Layout(
    TopMenu(),
    Workspace(
      FoldersList(data.folders, selectedFolderId),
      NotesList(data.notes, selectedFolderId, selectedNoteId),
      SelectedNote(selectedNote)
    ),
    Footer()
  )
}

const Layout = (...children) => `
  <div class="layout">${children.join('')}</>
`

const TopMenu = () => `
  <div class="top_menu"></div>
`

const Workspace = (...children) => `
  <div class="workspace">${children.join('')}</div>
`

const Footer = () => `
  <div class="footer"></div>
`

const FoldersList = (folders, selectedFolderId) => `
  <div class="folders">
    <ul class="folders_list"/>${
      folders.length > 0
        ? folders.map(folder => Folder(folder, folder.id === selectedFolderId)).join('')
        : 'Please add your first folder'
    }</ul>
    <button onclick="Actions.addFolder()">Add folder</button>
  </div>
`

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

const Folder = (folder, shouldSelectFolder) => `
  <div class="folder ${shouldSelectFolder ? ' is-selected' : ''}" onclick="Actions.selectFolder(${folder.id})">${folder.title}</div>
`

const Note = (note, shouldSelectNote) => `
  <div class="note ${shouldSelectNote ? ' is-selected' : ''}" onclick="Actions.selectNote(${note.id})">${note.title}</div>
`

const SelectedNote = (note) => `
  <div class="selected_note">${
    note ? NoteText(note) : '<b>Please select note</b>'
  }</div>
`

const NoteText = (note) => `
  <h1>${note.title}</h1>
  <p class="note-text">${note.text}</p>
`
