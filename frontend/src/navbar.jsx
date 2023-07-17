

import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div style={{display:'flex',justifyContent:"space-around"}}>
      <Link to='/'>Home</Link>
      <Link to='/login'>login</Link>
      <Link to='/signup'>signup</Link>
    </div>
  )
}