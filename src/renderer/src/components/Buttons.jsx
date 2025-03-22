import React from 'react'
import { useEffect, useState } from 'react'

function Button({ name, sound }) {
  const [playing, togglePlay] = useState(false);

  const handleClick = () => {
    togglePlay(!playing);
  }

  const playSound = () => {
    const audio = new Audio(sound)
    audio.play()
  }

  useEffect(() => {
    let interval;
    if (playing) {
      interval = setInterval(playSound, 500);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [playing]);

  return (
    <button className="sound-btn" onClick={handleClick}>
      {name}
    </button>
  )
}

function Buttons() {
  const sounds = import.meta.glob('../assets/sounds/*', {eager: true});
  const soundEntries = Object.entries(sounds);
  return (
    <div className="buttons">
      {soundEntries.map(([path, sound]) => {
        const soundUrl = sound.default; // Extract the actual audio file
        const soundName = path.replace(/^.*[\\/]/, '').replace(/\.[^/.]+$/, '')
        return <Button key={soundName} name={soundName} sound={soundUrl} />
      })}
    </div>
  )
}

export default Buttons
