import React, { useEffect } from 'react'

export default () => {
  useEffect(() => { localStorage.clear() })
  return (
  <p style={{textAlign:'center'}}>
    <h1>Dziękujemy za zakupy!</h1>
    <p style={{fontSize:'25rem', margin:'1rem'}}>💕</p>
  </p>)
}