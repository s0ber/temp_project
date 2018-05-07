import createActions from './actions.js'
import App from './components/app.js'

const state = JSON.parse(localStorage.getItem('notes')) || {
  data: {
    folders: [],
    notes: []
  },
  ui: {
    selectedFolderId: null,
    selectedNoteId: null
  }
}

window.Actions = createActions(state, {afterAction: () => {
  render(state)
  localStorage.setItem('notes', JSON.stringify(state))
}})

const render = () => {
  document.body.innerHTML = App(state)
}

render()
