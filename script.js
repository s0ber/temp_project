let state = JSON.parse(localStorage.getItem('notes')) || {
  data: {
    folders: [],
    notes: []
  },
  ui: {
    selectedFolderId: null,
    selectedNoteId: null
  }
}

Actions = createActions(state, {afterAction: () => {
  redrawEverything(state)
  localStorage.setItem('notes', JSON.stringify(state))
}})

const redrawEverything = () => {
  var appHtml = App(state)
  document.body.innerHTML = appHtml
}

redrawEverything()
