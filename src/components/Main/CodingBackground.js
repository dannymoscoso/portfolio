import { CardContent, Container, Grid, Paper } from "@mui/material"
import coding from "../../images/coding.jpg"
import PersonIcon from "@mui/icons-material/Person"

import React from "react"

export const CodingBackground = () => {
  return (
    <div
      style={{
        padding: "1em",
      }}
    >
      <Container maxWidth="lg">
        <div>
          <Grid container>
            <Grid item sm={12} md={12} lg={6}>
              <h1>Background</h1>
            </Grid>
            <Grid item sm={12} md={12} lg={6}>
              <Paper
                style={{
                  margin: "1em",
                }}
              >
                <CardContent>
                  <p>
                    Discovered my fascination with technology early on, delving
                    into the intricacies of computer builds and playfully
                    exploring the world of "hacking" video games. Transitioned
                    into a role as a DJ for a span of a few years before
                    pursuing a formal education in cybersecurity at college.
                    Concurrently, I worked at an electronics store, providing
                    financial support as I immersed myself in the dynamic field
                    of cybersecurity.
                  </p>
                </CardContent>
              </Paper>
            </Grid>
          </Grid>
        </div>
      </Container>
    </div>
  )
}
