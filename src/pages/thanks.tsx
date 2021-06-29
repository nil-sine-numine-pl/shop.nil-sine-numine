import React, { useEffect } from 'react'
import { Page } from "../components/page"

export default () => {
  useEffect(() => { localStorage.clear() })
  return (
  <Page style={{textAlign:'center'}}>
    <h1>Dziękujemy za zakupy!</h1>
    <p style={{fontSize:'25rem', margin:'1rem'}}>💕</p>
  </Page>)
}