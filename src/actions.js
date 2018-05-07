export default (state, {afterAction}) => {
  return {
    addFolder: (e) => {
      const foldersNumber = state.data.folders.length
      const title = prompt('Please provide folder title', `Folder ${foldersNumber + 1}`)

      state.data.folders.push({
        title: title,
        id: foldersNumber + 1
      })
      afterAction()
    },

    selectFolder: (folderId) => {
      state.ui.selectedFolderId = folderId
      afterAction()
    },

    addNoteToFolder: (folderId) => {
      const folder = state.data.folders.find(folder => folder.id === folderId)
      const allNotesNumber = state.data.notes.length
      const folderNotesNumber = state.data.notes.filter(note => note.folder_id === folderId).length

      const title = prompt('Please provide note title', `Note ${folderNotesNumber + 1}`)
      if (!title || !title.trim()) return

      const text = prompt('Please provide note description', '')
      if (!text || !text.trim()) return

      state.data.notes.push({
        id: allNotesNumber + 1,
        title,
        text,
        folder_id: folderId
      })
      afterAction()
    },

    selectNote: (noteId) => {
      state.ui.selectedNoteId = noteId
      afterAction()
    }
  }
}
