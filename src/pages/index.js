import React from "react"
import { Link } from "gatsby"
import SEO from "../components/seo"
import Header from "../components/header"

const IndexPage = () => (
  <div>
    <SEO title="Home" />
    <Header />
    <div className="Hero">
      <div className="HeroGroup">
        
        <h1>Learn to Design & Code React Apps!</h1>
        <p>Complete course about the best tools and design systems. Prototype and build apps with React and Swift.</p>
        <Link to="/page-2/">Go to page 2</Link>
        
      </div>
    </div>
  </div>
)

export default IndexPage