import createActions from './actions.js'
import App from './components/app.js'
import {BASIC_KEYS, INVERSIONS, TIMEOUT_OPTIONS} from './constants'

const state = JSON.parse(localStorage.getItem('chords_app')) || {
  key: BASIC_KEYS[0],
  currentChordIndex: null,
  showSettings: true,
  randomChord: null,
  timeout: TIMEOUT_OPTIONS[0],
  showSeventh: false,
  inversions: [INVERSIONS.triads[0]]
}

window.Actions = createActions(state, {afterAction: () => {
  render(state)
  localStorage.setItem('chords_app', JSON.stringify(state))
}})

const render = () => {
  document.body.innerHTML = App(state)
}

Actions.updateChord()
