import React, { useState } from 'react'
import './App.css'

const App = () => {
  const [dark, setDark] = useState(false)
  const [name, setName] = useState('dark')
  const changeTheme = () => {
    setDark((prev) => !prev)
    setName('white')
  }
  return (
    <div className={dark ? 'white' : 'dark'}>
      <button onClick={changeTheme}>{name}</button>
      <p>Lorem ipsum odor amet, consectetuer adipiscing elit. Imperdiet erat nullam tortor quis elit lacus
  blandit vitae. Nostra dapibus bibendum; curae magnis commodo metus vestibulum tristique. Tristique
  volutpat consectetur congue lorem pharetra habitant. Sodales gravida egestas venenatis dignissim
  molestie cursus porta. Massa lacus pulvinar aliquam mi tristique.</p>
    </div>
  )

}
export default App






