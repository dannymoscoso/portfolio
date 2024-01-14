import React from "react"
import { Grid } from "@mui/material"

import awslogo from "../../images/techstack/awslogo.png"
import nodejslogo from "../../images/techstack/nodejslogo.png"
import reactlogo from "../../images/techstack/reactlogo.png"
import terraformlogo from "../../images/techstack/terraformlogo.svg"

export const FenceWizTechStack = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <Grid container justifyContent={"center"}>
        <Grid item xs={6} md={3}>
          <img alt="" src={awslogo} height={"50em"} />
        </Grid>
        <Grid item xs={6} md={3}>
          <img alt="" src={nodejslogo} height={"50em"} />
        </Grid>
        <Grid item xs={6} md={3}>
          <img alt="" src={reactlogo} height={"50em"} />
        </Grid>
        <Grid item xs={6} md={3}>
          <img alt="" src={terraformlogo} height={"50em"} />
        </Grid>
      </Grid>
    </div>
  )
}
