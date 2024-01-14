import { CardContent, Container, Grid, Paper, Typography } from "@mui/material"
import React from "react"

export const Experience = () => {
  return (
    <Container maxWidth="lg">
      <Paper
        style={{
          padding: "1em",
        }}
      >
        <Typography variant="h2">Professional Experience</Typography>
        <Grid container>
          <Grid item md={12}>
            <CardContent>
              <Typography variant="h3">Control Gap</Typography>
              <Typography variant="h4">Full Stack Developer</Typography>
              <Typography variant="h5">2019 - 2023</Typography>
              <Typography variant="p">
                <div>
                  ● Introduced state-of-the-art DevOps practices, implementing
                  cost-effective pipelines and Infrastructure as Code (IaC)
                  solutions that resulted in significant cost savings.
                </div>
              </Typography>
              <Typography variant="p">
                <div>
                  ● Facilitated transformative shift of traditional processes
                  into user-friendly applications by working closely with
                  cybersecurity auditors and cross-functional teams.
                </div>
              </Typography>
              <Typography variant="p">
                <div>
                  ● Utilized diverse tech stack comprising Python, JavaScript,
                  Terraform, Elixir, and AWS services to develop web
                  applications, enhance security, and optimize cloud
                  infrastructure management.
                </div>
              </Typography>
              <Typography variant="p">
                <div>
                  ● Designed and implemented secure user authentication and
                  authorization mechanisms to control access to sensitive data
                  and functionalities.
                </div>
              </Typography>
              <Typography variant="p">
                <div>
                  ● Spearheaded infrastructure and backend projects, overseeing
                  code bases and leading code reviews and approvals.
                </div>{" "}
              </Typography>
              <Typography variant="p">
                <div>
                  ● Developed and executed innovative programming strategies,
                  incorporating automated server shutdown system and
                  user-friendly interface for server administration and DNS
                  switching.
                </div>{" "}
              </Typography>
              <Typography variant="p">
                <div>
                  ● Created in-house application capable of generating 3K
                  reports in just five minutes, continually enhancing its
                  capabilities in collaboration with lead auditors.
                </div>{" "}
              </Typography>
              <Typography variant="p">
                <div>
                  ● Oversaw evolution of data schemas within web applications,
                  integrating both SQL and NoSQL databases.
                </div>{" "}
              </Typography>
              <Typography variant="p">
                <div>
                  ● Conducted assessment of cybersecurity team needs, performed
                  gap analysis of existing security tools, and developed
                  customized security tools tailored to specific organizational
                  requirements.
                </div>{" "}
              </Typography>
            </CardContent>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  )
}
