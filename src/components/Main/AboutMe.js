import { CardContent, Container, Grid, Paper, Typography } from "@mui/material"
import React from "react"
import PersonIcon from "@mui/icons-material/Person"
import coding from "../../images/coding.jpg"
import { TechStack } from "./TechStack"

export const AboutMe = () => {
  return (
    <Container maxWidth="lg">
      <Paper
        style={{
          padding: "1em",
          textAlign: "center",
        }}
      >
        <PersonIcon color="secondary" fontSize="large" />
        <Typography variant="h2">About Me</Typography>

        <Typography variant="p">
          Hello, I'm a full stack developer with a strong emphasis on
          cybersecurity, currently based in Barrie, Ontario. I boast over 4
          years of professional work experience and have been refining my
          development skills for more than a decade.
        </Typography>
        <TechStack />
      </Paper>
    </Container>
  )
}
