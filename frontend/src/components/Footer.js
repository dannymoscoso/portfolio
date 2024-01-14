import * as React from "react"
import { AppBar, Toolbar } from "@mui/material"

const Footer = () => {
  return (
    <AppBar position="bottom">
      <Toolbar></Toolbar>
    </AppBar>
  )
}

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
// export const Head = () => <Seo title="Home" />

export default Footer
