import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"

import Banner from '../components/banner'
import About from "../components/about"
import Project from "../components/project"
import Skill from "../components/skill"

const IndexPage = () => (
  <Layout>
    <Seo title="Bivek" />
    <Banner />
    <About />
    <Project />
    <Skill />
  </Layout>
)

export default IndexPage
