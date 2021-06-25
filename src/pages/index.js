import React, { useEffect } from "react"

import Layout from "../components/Layout"
import Intro from "../components/Intro"
import useStore from "../store"

export default function Home({ location }) {
  const { reset } = useStore()
  useEffect(() => reset(), [])
  return (
    <Layout location={location}>
      <Intro />
    </Layout>
  )
}
