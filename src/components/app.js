export default (state) => {
  return Layout(
    ChordsGame(state)
  )
}

const Layout = (...children) => `
  <div class="layout">${children.join('')}</>
`

const ChordsGame = ({key, randomChord}) => {
  return key
    ? RandomChord(randomChord)
    : SelectKeyForm()
}

const RandomChord = (randomChord) => {
  setTimeout(Actions.updateChord, 2000)
  return `<div class="random_chord">${randomChord}</div>`
}

const SelectKeyForm = (key) => `
  <form>
    <div>
      ${BASIC_KEYS.map(keyOption => KeyOption(keyOption, key)).join('')}
    </div>
    <button onclick="Actions.selectKey(this)" type="button">Select Key</button>
  </form>
`

const KeyOption = (keyOption, selectedKey) => `
  <label class="key_option">
    <input type="radio" name="key" value="${keyOption}" ${ keyOption === selectedKey ? 'checked' : '' } />
    ${keyOption}
  </label>
`

const SelectKeyButton = (buttonText) => `
  <div class="select_key_button">${buttonText}</div>
`
