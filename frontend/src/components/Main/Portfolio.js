import { Container, Grid, Typography } from "@mui/material"
import React from "react"

import measure from "../../images/fencewiz/measure.png"
import chart from "../../images/forex/chart.png"
import { navigate } from "gatsby"

export const Portfolio = () => {
  return (
    <Container
      maxWidth="lg"
      style={{
        textAlign: "center",
      }}
      onClick={() => navigate("/projects")}
    >
      <div
        style={{
          margin: "1em",
        }}
      >
        <Typography variant="h2">Projects</Typography>
        <Grid container>
          <Grid sm={12} md={6}>
            <div style={{ padding: "2em" }}>
              <div>
                <Typography variant="h2">FenceWiz</Typography>
              </div>
              <div>
                <img alt="" src={measure} style={{ height: "20em" }} />
              </div>
              <div>
                <Typography variant="p">
                  Facilitate cost estimation for contractors by providing
                  satellite-based system with list of materials and
                  corresponding customer expenses
                </Typography>
              </div>
              <br />
              <div style={{ textAlign: "left" }}>
                <div>
                  <Typography variant="p">
                    ● Companies can sign up for a monthly fee and add users to
                    there company
                  </Typography>
                </div>
                <div>
                  <Typography variant="p">
                    ● Can design different styles of fences using material lists
                    for one section and set there installation cost
                  </Typography>
                </div>
                <div>
                  <Typography variant="p">
                    ● Measure distances over google maps and use the designed
                    fences to determine for all sections
                  </Typography>
                </div>

                <div>
                  <Typography variant="p">
                    ● Get a material list, accounting for all nonces of fence
                    building
                  </Typography>
                </div>

                <div>
                  <Typography variant="p">
                    ● Present the customer with a final cost
                  </Typography>
                </div>
              </div>
            </div>
          </Grid>
          <Grid sm={12} md={6}>
            <div style={{ padding: "2em" }}>
              <div>
                <Typography variant="h2">Forex AI</Typography>
              </div>
              <div>
                <img alt="" src={chart} style={{ height: "20em" }} />
              </div>
              <div>
                <Typography variant="p">
                  Created AI model on Forex historical data to determine future
                  price of currency pair.
                </Typography>
              </div>
              <br />
              <div style={{ textAlign: "left" }}>
                <div>
                  <Typography variant="p">
                    ● Check the current and previous movement of the currency
                    pair
                  </Typography>
                </div>

                <div>
                  <Typography variant="p">
                    ● Use AI model to predict direction
                  </Typography>
                </div>
                <div>
                  <Typography variant="p">
                    ● Check different timeframes for direction and get the
                    average of all directions to draw gauge chart
                  </Typography>
                </div>
              </div>{" "}
            </div>
          </Grid>
        </Grid>
      </div>
    </Container>
  )
}
