import React from "react"
import { ThemeProvider } from "@mui/material"
import { theme } from "../components/theme"
import { CssBaseline } from "@mui/material"

import "react-medium-image-zoom/dist/styles.css"
import { FenceWizProject } from "../components/Portfolio/FenceWiz"
import { ForexAI } from "../components/Portfolio/ForexAI"
import Navbar from "../components/Nav"
import Footer from "../components/Footer"

const FenceWizPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />

      <CssBaseline />
      <FenceWizProject />
      <ForexAI />
      <Footer />
    </ThemeProvider>
  )
}

export default FenceWizPage
