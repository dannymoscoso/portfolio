import React from "react"
import "./index.css"
import Nav from "./Nav"
import { Title } from "./Main/Title"
import { AboutMe } from "./Main/AboutMe"
import { CodingBackground } from "./Main/CodingBackground"
import { Experience } from "./Main/Experience"
import { Skills } from "./Main/Skills"
import { School } from "./Main/School"
import { ContactForm } from "./Main/Contact"
import { dark } from "./colors"
import { Typography } from "@mui/material"
import { Portfolio } from "./Main/Portfolio"

export default function Main() {
  return (
    <>
      {/* <Nav /> */}
      <div style={{ display: "grid" }}>
        <div
          style={{
            gridArea: "1 / 1",
          }}
        >
          <Title />
        </div>
        <div
          style={{
            position: "absolute",
            gridArea: "1 / 1",
          }}
        >
          <div
            style={{
              height: "100vh",
              width: "100vw",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <div style={{ padding: "1em" }}>
              <Typography variant="h1">Danny Moscoso</Typography>
              <Typography variant="h1">
                Cyber Security Expert and Full Stack Developer
              </Typography>
            </div>
          </div>
        </div>
      </div>

      <AboutMe />

      <Skills />
      <Experience />
      <School />
      <Portfolio />

      {/* <CodingBackground /> */}
      <ContactForm />
    </>
  )
}
