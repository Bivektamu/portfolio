import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"

import Banner from '../components/banner'
import About from "../components/about"
import Project from "../components/project"

const IndexPage = () => (
  <Layout>
    <Seo title="Bivek" />
    <Banner />
    <About />
    <Project />
  </Layout>
)

export default IndexPage
