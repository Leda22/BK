import { Button, TextField } from '@mui/material'
import React from 'react'
import './Header.css'
import logo from '../logo.png'
function Header() {

  return (
    <div className="header">
      <div className="header_logo">
      <img  src={logo} alt="" />
      </div>
      <div className="header_search" >
      <TextField id="outlined-search" label="Search" type="search" />

      </div>
      <div className="header_btns">
        <Button variant="contained">Home</Button>
        <Button variant="contained">Contact Us</Button>
        <Button variant="contained">About Us</Button>
        <Button variant="contained" color='warning'>Member!</Button>
      </div>
    </div>
  )
}

export default Header