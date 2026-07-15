'use client'

import { useState } from 'react'

const BASES: [number, number, number][] = [
  [118, 185.6, -40],
  [176, 174.4, -31],
  [234, 166.4, -21],
  [292, 161.6, -11],
  [350, 160, 0],
  [408, 161.6, 11],
  [466, 166.4, 21],
  [524, 174.4, 31],
  [582, 185.6, 40],
]

const GHOST = 'M 0 0 C 5 -13, 12 -24, 22 -34'
const LIFT = 'M 0 0 C 2 -17, 6 -32, 5 -44 C 4 -53, -1 -58, -8 -59'

const NOTES = {
  korean: (
    <>
      <b>Korean lift.</b> A soft, flexible curl held root to tip, using flat
      silicone shields and a hydrating cysteamine formula. Built for thick,
      straight or stubborn lashes that never hold a curl. From $110.
    </>
  ),
  keratin: (
    <>
      <b>Keratin lift.</b> A gentle, conditioning curl that strengthens as it
      lifts, finished with a keratin serum. Built for thin, brittle or damaged
      lashes, and for the softest natural look. From $105.
    </>
  ),
}

const COLOURS = { korean: '#ebc8ce', keratin: '#735853' } as const
const TILT = { korean: 0.78, keratin: 0.62 } as const

type Lift = 'korean' | 'keratin'

export function CurlPreview() {
  const [state, setState] = useState<Lift>('korean')

  return (
    <div className="curl" style={{ ['--lash-accent' as string]: COLOURS[state] }}>
      <svg viewBox="0 0 700 250" role="img" aria-labelledby="curlTitle">
        <title id="curlTitle">
          Illustration comparing lashes as they sit now with the lifted curl
        </title>
        <defs>
          <clipPath id="eyeClip">
            <path d="M60 200 Q350 118 640 200 Q350 252 60 200 Z" />
          </clipPath>
        </defs>
        <path
          className="eye-white"
          d="M60 200 Q350 118 640 200 Q350 252 60 200 Z"
        />
        <g clipPath="url(#eyeClip)">
          <circle className="iris" cx="350" cy="196" r="36" />
          <circle className="pupil" cx="350" cy="196" r="13" />
        </g>
        <path className="lid" d="M60 200 Q350 118 640 200" />
        <path
          className="lid"
          style={{ strokeOpacity: 0.45, strokeWidth: 2 }}
          d="M60 200 Q350 252 640 200"
        />
        <g id="lashes">
          {BASES.map((b, i) => (
            <g key={i} transform={`translate(${b[0]},${b[1]})`}>
              <path
                className="lash-ghost"
                d={GHOST}
                transform={`rotate(${b[2] * 1.25})`}
              />
              <g
                className="lash-lift-g"
                transform={`rotate(${b[2] * TILT[state]})`}
              >
                <path className="lash-lift" d={LIFT} />
              </g>
            </g>
          ))}
        </g>
      </svg>
      <div className="legend">
        <span className="now">Your lashes now</span>
        <span className="after">After the lift</span>
      </div>
      <div className="chips" role="group" aria-label="Preview the curl">
        <button
          type="button"
          className="chip chip-korean"
          aria-pressed={state === 'korean'}
          onClick={() => setState('korean')}
        >
          Korean lift
        </button>
        <button
          type="button"
          className="chip"
          aria-pressed={state === 'keratin'}
          onClick={() => setState('keratin')}
        >
          Keratin lift
        </button>
      </div>
      <p className="chip-note">{NOTES[state]}</p>
    </div>
  )
}
