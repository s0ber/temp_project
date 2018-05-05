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
  render(state)
  localStorage.setItem('notes', JSON.stringify(state))
}})

const render = () => {
  document.body.innerHTML = App(state)
}

render()
