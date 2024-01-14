import React from "react"
import { Button, Container, Grid, Paper, Typography } from "@mui/material"

import forexsnip from "../../images/forex/forexsnip.png"
import Zoom from "react-medium-image-zoom"
import "react-medium-image-zoom/dist/styles.css"
import { ForexTechStack } from "./ForexzTechStack"

export const ForexAI = () => {
  return (
    <Container maxWidth="lg">
      <Paper style={{ margin: "1em", padding: "1em" }}>
        <Typography variant="h2">Forex AI</Typography>
        <br />

        <Grid
          container
          style={{ textAlign: "center" }}
          spacing={1}
          justifyContent={"space-around"}
        >
          <Grid item xs={12} sm={6} lg={3}>
            <Zoom>
              <img
                alt=""
                src={forexsnip}
                style={{ width: "15em", height: "10em", objectFit: "cover" }}
              />
            </Zoom>
          </Grid>
        </Grid>
        <br />

        <Typography variant="h3">Forex Indicator</Typography>
        <br />

        <ForexTechStack />
        <br />

        <Typography variant="p">
          Forex AI is able to determine the direction of the currency pair based
          on over 10 years of historical data.
        </Typography>
        <br />

        <br />

        <Button
          variant="contained"
          color="primary"
          onClick={url => {
            window.open(
              "https://forex.dannymoscoso.com",
              "_blank",
              "noreferrer"
            )
          }}
        >
          Visit
        </Button>
      </Paper>
    </Container>
  )
}
