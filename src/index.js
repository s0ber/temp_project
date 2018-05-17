import createActions from './actions.js'
import App from './components/app.js'

const state = {
  key: 'C',
  currentChordIndex: null,
  openKeyForm: false,
  randomChord: null
}

window.Actions = createActions(state, {afterAction: () => {
  render(state)
}})

const render = () => {
  document.body.innerHTML = App(state)
}

Actions.updateChord()
