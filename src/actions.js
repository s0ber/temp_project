import {MINOR_SCALE, BASIC_KEYS, KEY_INTERVALS, INTERVALS, INVERSIONS} from './constants'

const minorScaleInKey = (key) => {
  return MINOR_SCALE.reduce((scale, interval) => {
    const lastKey = scale[scale.length - 1]
    const lastKeyIndex = BASIC_KEYS.indexOf(lastKey)
    return [...scale, BASIC_KEYS[(lastKeyIndex + INTERVALS[interval]) % BASIC_KEYS.length]]
  }, [key])
}

const allChordsInKey = (key) => {
  const chordTypes = KEY_INTERVALS

  return minorScaleInKey(key).reduce((chords, note, index) => {
    const [chordType, seventhChordType] = chordTypes[index]
    const triadChord = note + (chordType === 'M' ? '' : chordType)
    const seventhChord = triadChord + `<span class="seventh_chord_type">${seventhChordType}</span>`
    const triadInversions = INVERSIONS.triads.map(inversion => `${triadChord}<br><span class="inversion">${inversion}</span>`)
    const seventhInversions = INVERSIONS.sevenths.map(inversion => `${seventhChord}<br><span class="inversion">${inversion}</span>`)
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

export default (state, {afterAction}) => {
  return {
    selectKey: (e) => {
      state.openKeyForm = false
      state.key = document.querySelector('[name="key"]:checked').value
      afterAction()
    },
    updateChord: () => {
      const chords = allChordsInKey(state.key)
      let randomChord = state.randomChord
      while (!randomChord || randomChord === state.randomChord) {
        randomChord = chords[random(chords.length - 1)]
      }
      state.randomChord = randomChord
      afterAction()
    }
  }
}
