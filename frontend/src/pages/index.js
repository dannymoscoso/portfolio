import * as React from "react"
import Main from "../components/Main"
import { ThemeProvider } from "@mui/material"
import { theme } from "../components/theme"
import { CssBaseline } from "@mui/material"
import Navbar from "../components/Nav"
import Footer from "../components/Footer"

const IndexPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <CssBaseline />
      <Main />
      <Footer />
    </ThemeProvider>
  )
}

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
// export const Head = () => <Seo title="Home" />

export default IndexPage
