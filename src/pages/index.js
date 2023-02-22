import React from "react"
import HomeScreen from "../components/sections/HomeScreen"
import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"

function IndexPage() {
  return (
    <Layout>
      <SEO title="Home" />
      <HomeScreen />
    </Layout>
  )
}

export default IndexPage
