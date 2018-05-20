import {MINOR_SCALE, BASIC_KEYS, KEY_INTERVALS, INTERVALS, INVERSIONS} from './constants'

const minorScaleInKey = (key) => {
  return MINOR_SCALE.reduce((scale, interval) => {
    const lastKey = scale[scale.length - 1]
    const lastKeyIndex = BASIC_KEYS.indexOf(lastKey)
    return [...scale, BASIC_KEYS[(lastKeyIndex + INTERVALS[interval]) % BASIC_KEYS.length]]
  }, [key])
}

const prepareChords = ({key, showSeventh, inversions}) => {
  const chordTypes = KEY_INTERVALS

  return minorScaleInKey(key).reduce((chords, note, index) => {
    const [chordType, seventhChordType] = chordTypes[index]
    const triadChord = note + (chordType === 'M' ? '' : chordType)
    const triadInversions = INVERSIONS.triads
      .filter(inversion => inversions.indexOf(inversion) !== -1)
      .map(inversion => `${triadChord}<br><span class="inversion">${inversion}</span>`)

    let seventhInversions = []
    if (showSeventh) {
      const seventhChord = triadChord + `<span class="seventh_chord_type">${seventhChordType}</span>`
      seventhInversions = INVERSIONS.seventh
        .filter(inversion => inversions.indexOf(inversion) !== -1)
        .map(inversion => `${seventhChord}<br><span class="inversion">${inversion}</span>`)
    }
    return [...chords, ...triadInversions, ...seventhInversions]
  }, [])
}

const random = (min, max) => {
  if (max == null) {
    max = min;
    min = 0;
  }
  return min + Math.floor(Math.random() * (max - min + 1));
};

const ACTIONS = {
  selectKey: (state, key) => {
    state.key = key
  },
  selectTimeout: (state, timeout) => {
    state.timeout = timeout
  },
  openSettings: (state) => {
    state.showSettings = true
  },
  closeSettings: (state) => {
    ACTIONS.updateChord(state)
    state.showSettings = false
  },
  toggleSeventh: (state) => {
    state.showSeventh = !state.showSeventh
  },
  toggleInversion: (state, inversion) => {
    const {inversions} = state
    const inversionIndex = inversions.indexOf(inversion)

    if (inversionIndex !== -1) {
      if (state.inversions.length === 1) return
      state.inversions = [
        ...inversions.slice(0, inversionIndex),
        ...inversions.slice(inversionIndex + 1, inversions.length)
      ]
    } else {
      state.inversions.push(inversion)
    }
  },
  updateChord: (state) => {
    const chords = prepareChords(state)
    let randomChord = state.randomChord
    while (chords.length && !randomChord || randomChord === state.randomChord) {
      randomChord = chords[random(chords.length - 1)]
    }
    state.randomChord = randomChord
  }
}

export default (state, {afterAction}) => {
  const actions = {}

  for (let key in ACTIONS) {
    actions[key] = (...args) => {
      ACTIONS[key](state, ...args)
      afterAction()
    }
  }

  return actions
}
