import React, { useEffect } from 'react'
import { Page } from "../components/page"

export default () => {
  useEffect(() => { localStorage.clear() })
  return (
  <Page style={{textAlign:'center'}}>
    <h1 style={{lineHeight: '5rem'}}>Dziękujemy za zakupy!</h1>
    <p style={{fontSize:'15rem', margin:'1rem', lineHeight: '15rem'}}>💕</p>
  </Page>)
}