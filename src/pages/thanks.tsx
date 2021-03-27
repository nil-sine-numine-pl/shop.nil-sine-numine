import React, { useEffect } from 'react'
import Layout from "../components/layout"

export default () => {
  useEffect(() => { localStorage.clear() })
  return <Layout><p>Thank you! :).</p></Layout>
}