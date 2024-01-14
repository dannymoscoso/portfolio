import React from "react"
import { Button, Container, Grid, Paper, Typography } from "@mui/material"
import measure from "../../images/fencewiz/measure.png"
import login from "../../images/fencewiz/login.png"
import materials from "../../images/fencewiz/materials.png"
import quote from "../../images/fencewiz/quote.png"
import Zoom from "react-medium-image-zoom"
import "react-medium-image-zoom/dist/styles.css"
import { FenceWizTechStack } from "./FenceWizTechStack"

export const FenceWizProject = () => {
  return (
    <Container maxWidth="lg">
      <Paper style={{ margin: "1em", padding: "1em" }}>
        <Typography variant="h2">FenceWiz</Typography>
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
                src={login}
                style={{ width: "10em", height: "10em", objectFit: "cover" }}
              />
            </Zoom>

            <div>
              <Typography variant="p">Authentication Screen</Typography>
            </div>
          </Grid>

          <Grid item xs={12} sm={6} lg={3}>
            <Zoom>
              <img
                alt=""
                src={measure}
                style={{ width: "10em", height: "10em", objectFit: "cover" }}
              />
            </Zoom>

            <div>
              <Typography variant="p">Google Maps Measuring </Typography>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <Zoom>
              <img
                alt=""
                src={materials}
                style={{ width: "10em", height: "10em", objectFit: "cover" }}
              />
            </Zoom>

            <div>
              <Typography variant="p">Material List</Typography>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <Zoom>
              <img
                alt=""
                src={quote}
                style={{ width: "10em", height: "10em", objectFit: "cover" }}
              />
            </Zoom>

            <div>
              <Typography variant="p">Quote for Customer</Typography>
            </div>
          </Grid>
        </Grid>
        <br />

        <Typography variant="h3">SaaS for Contractors</Typography>
        <br />

        <FenceWizTechStack />
        <br />

        <Typography variant="p">
          FenceWiz makes it easy for fence contractors to quote jobs without
          having to use a spreadsheet or visiting the job site.
        </Typography>
        <br />

        <Typography variant="p">
          Made Serverless with AWS Lambda and DynamoDB
        </Typography>
        <br />
        <br />

        <Button
          variant="contained"
          color="primary"
          onClick={url => {
            window.open("https://fencewiz.com", "_blank", "noreferrer")
          }}
        >
          Visit
        </Button>
      </Paper>
    </Container>
  )
}
