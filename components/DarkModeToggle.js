import React, { useState } from 'react'
import useDarkMode from 'use-dark-mode'

import Switch from '../components/Switch'

const DarkModeToggle = () => {
  const darkMode = useDarkMode(false)
  const [isOn, setIsOn] = useState(darkMode.value)
  return (
    <Switch isOn={darkMode.value} onClick={darkMode.toggle} />
  )
}

export default DarkModeToggle