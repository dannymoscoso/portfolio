import React from "react"
import { Grid } from "@mui/material"

import awslogo from "../../images/techstack/awslogo.png"
import nodejslogo from "../../images/techstack/nodejslogo.png"
import linuxlogo from "../../images/techstack/linuxlogo.png"
import pythonlogo from "../../images/techstack/pythonlogo.png"
import reactlogo from "../../images/techstack/reactlogo.png"
import terraformlogo from "../../images/techstack/terraformlogo.svg"

export const TechStack = () => {
  return (
    <div>
      <Grid container justifyContent={"center"}>
        <Grid item xs={6} md={3} xl={2}>
          <img src={awslogo} height={"50em"} />
        </Grid>
        <Grid item xs={6} md={3} xl={2}>
          <img src={nodejslogo} height={"50em"} />
        </Grid>
        <Grid item xs={6} md={3} xl={2}>
          <img src={reactlogo} height={"50em"} />
        </Grid>
        <Grid item xs={6} md={3} xl={2}>
          <img src={pythonlogo} height={"50em"} />
        </Grid>
        <Grid item xs={6} md={3} xl={2}>
          <img src={terraformlogo} height={"50em"} />
        </Grid>
        <Grid item xs={6} md={3} xl={2}>
          <img src={linuxlogo} height={"50em"} />
        </Grid>
      </Grid>
    </div>
  )
}
