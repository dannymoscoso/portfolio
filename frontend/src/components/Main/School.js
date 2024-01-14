import { CardContent, Container, Grid, Paper, Typography } from "@mui/material"
import React from "react"
import { dark } from "../colors"

export const School = () => {
  return (
    <div style={{}}>
      <Container maxWidth="lg">
        <Paper
          style={{
            padding: "1em",
          }}
        >
          <Typography variant="h2">Education</Typography>
          <Grid container>
            <Grid item md={12}>
              <CardContent>
                <Typography variant="h3">Seneca College</Typography>
                <Typography variant="h4">
                  Bachelors of Technology (Cybersecurity)
                </Typography>
                <Typography variant="h5">2015 - 2019</Typography>
                <Typography variant="p">
                  Linux, Python, Cryptography, Networking, Intrusion Detection,
                  Data visualization, Vulnerability Management and Penetration
                  Testing
                </Typography>
              </CardContent>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </div>
  )
}
