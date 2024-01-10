import { CardContent, Container, Grid, Paper } from "@mui/material"
import React from "react"
import { dark } from "../colors"

export const School = () => {
  return (
    <div style={{ backgroundColor: dark }}>
      <Container
        maxWidth="lg"
        style={{
          color: "white",
        }}
      >
        <h1>Education</h1>
        <Grid container>
          <Grid item md={12}>
            <CardContent>
              <h2>Seneca College</h2>
              <h2>Bachelors of Technology (Cybersecurity)</h2>
              <h3>2015 - 2019</h3>
              <p>
                Linux, Python, Cryptography, Networking, Intrusion Detection,
                Data visualization, Vulnerability Management and Pentration
                Testing
              </p>
            </CardContent>
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}
