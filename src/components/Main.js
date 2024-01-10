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

export default function Main() {
  return (
    <>
      {/* <Nav /> */}
      <div style={{ display: "grid", backgroundColor: dark }}>
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
              color: "white",
            }}
          >
            <div style={{ padding: "1em" }}>
              <h1>Danny Moscoso</h1>
              <h1>Cyber Security Expert and Full Stack Developer</h1>
            </div>
          </div>
        </div>
      </div>

      <AboutMe />

      <Skills />
      <Experience />
      <School />

      {/* <CodingBackground /> */}
      <ContactForm />
    </>
  )
}
