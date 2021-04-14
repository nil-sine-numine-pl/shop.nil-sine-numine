import React, { useEffect } from 'react'

export default () => {
  useEffect(() => { localStorage.clear() })
  return <p>Thank you! :).</p>
}