import Layout from './layout.js'
import TopMenu from './top_menu.js'
import Workspace from './workspace.js'
import FoldersList from './folders_list.js'
import NotesList from './notes_list.js'
import SelectedNote from './selected_note.js'
import Footer from './footer.js'

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
export default App
