import {BASIC_KEYS, TIMEOUT_OPTIONS, INVERSIONS} from '../constants'

export default (state) => {
  return Layout(
    ChordsGame(state)
  )
}

const Layout = (...children) => `
  <div class="layout">${children.join('')}</>
`

const ChordsGame = ({showSettings, showSeventh, key, timeout, inversions, randomChord}) => {
  return showSettings
    ? SettingsForm(key, timeout, showSeventh, inversions)
    : RandomChord(randomChord, timeout)
}

const RandomChord = (randomChord, timeout) => {
  setTimeout(Actions.updateChord, timeout)
  return `
    <div class="random_chord">
      ${randomChord}
    </div>
    <button onclick="Actions.openSettings()" type="button">Settings</button>
    `
}

const SettingsForm = (key, timeout, showSeventh, inversions) => `
  <form>
    <div class="setting">
      ${BASIC_KEYS.map(keyOption => KeyOption(keyOption, key)).join('')}
    </div>
    <div class="setting">
      ${TIMEOUT_OPTIONS.map(timeoutOption => TimeoutOption(timeoutOption, timeout)).join('')}
    </div>
    <div class="setting">
      ${SeventhToggler(showSeventh)}
    </div>
    <div class="setting">
      ${INVERSIONS[showSeventh ? 'seventh' : 'triads']
        .map(inversion => InversionOption(inversion, inversions))
        .join('')}
    </div>
    <button onclick="Actions.closeSettings()" type="button">Close</button>
  </form>
`

const KeyOption = (keyOption, selectedKey) => `
  <div class="key_option ${selectedKey === keyOption ? 'is-selected' : ''}" onclick="Actions.selectKey('${keyOption}')">
    ${keyOption}
  </div>
`

const TimeoutOption = (timeoutOption, selectedTimeout) => `
  <div class="timeout_option ${selectedTimeout === timeoutOption ? 'is-selected' : ''}" onclick="Actions.selectTimeout(${timeoutOption})">
    ${parseInt(timeoutOption / 1000)}s
  </div>
`

const SeventhToggler = (showSeventh) => `
  <div class="seventh_toggler ${showSeventh ? 'is-selected' : ''}" onclick="Actions.toggleSeventh()">
    Seventh Chords
  </div>
`

const InversionOption = (inversionOption, inversions) => `
  <div class="inversion_option ${inversions.indexOf(inversionOption) !== -1 ? 'is-selected' : ''}" onclick="Actions.toggleInversion('${inversionOption}')">
    ${inversionOption}
  </div>
`

const SelectKeyButton = (buttonText) => `
  <div class="select_key_button">${buttonText}</div>
`
