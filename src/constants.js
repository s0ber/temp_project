export const ALL_KEYS = {
  'C':  'C',
  'Db': 'C#',
  'D':  'D',
  'Eb': 'D#',
  'E':  'E',
  'F':  'F',
  'Gb': 'F#',
  'G':  'G',
  'Ab': 'G#',
  'A':  'A',
  'Bb': 'A#',
  'B':  'B'
}
export const BASIC_KEYS = Object.keys(ALL_KEYS)

export const INTERVALS = {
  'H': 1,
  'W': 2
}

export const MINOR_SCALE = [
  'W',
  'H',
  'W',
  'W',
  'H',
  'W'
]

export const KEY_INTERVALS = [
  ['m',   '7'],
  ['dim', '7'],
  ['M',   'maj7'],
  ['m',   '7'],
  ['m',   '7'],
  ['M',   'maj7'],
  ['M',   '7']
]

export const INVERSIONS = {
  triads: [
    'Root', '1st', '2nd'
  ],
  seventh: [
    'Root', '1st', '2nd', '3rd'
  ]
}

export const TIMEOUT_OPTIONS = [
  1000, 2000, 3000, 4000, 5000, 6000, 7000
]
