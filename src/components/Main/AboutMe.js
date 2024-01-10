import { CardContent, Container, Grid, Paper } from "@mui/material"
import React from "react"
import PersonIcon from "@mui/icons-material/Person"
import coding from "../../images/coding.jpg"
import { TechStack } from "./TechStack"

export const AboutMe = () => {
  return (
    <div
      style={{
        // backgroundImage: `url(${coding})`,
        // backgroundSize: "cover",
        // backgroundPosition: "center center",
        padding: "1em",
        textAlign: "center",
      }}
    >
      <Container maxWidth="lg">
        <PersonIcon fontSize="large" />
        <h1>About Me</h1>

        <p>
          Hello, I'm a full stack developer with a strong emphasis on
          cybersecurity, currently based in Barrie, Ontario. I boast over 4
          years of professional work experience and have been refining my
          development skills for more than a decade.
        </p>
        <TechStack />
      </Container>
    </div>
  )
}
