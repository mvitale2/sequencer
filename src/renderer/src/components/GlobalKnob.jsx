/* eslint-disable react/display-name */
import { Knob, Pointer, Scale } from 'rc-knob'
import React, { useState, useCallback } from 'react'

const GlobalKnob = React.memo(({ onChange }) => {
  const [value, setValue] = useState(80)

  const handleChange = useCallback(
    (newValue) => {
      const roundedValue = Math.round(newValue)
      setValue(roundedValue)
      onChange(roundedValue)
    },
    [onChange]
  )

  return (
    <div className="control-knob-zone">
      <Knob
        size={100}
        angleOffset={220}
        angleRange={280}
        steps={10}
        min={0}
        max={100}
        className={'generalKnob'}
        onChange={handleChange}
      >
        <Scale tickWidth={2} tickHeight={2} radius={45} />
        <circle r="35" cx="50" cy="50" fill="#FC5A96" />,
        <Pointer
          width={5}
          height={25}
          radius={20}
          type="rect"
          className={'generalPointer'}
          percentage={value / 100}
        />
      </Knob>
      <label>Global Vol: {value}</label>
    </div>
  )
})

export default GlobalKnob
