import { CardContent, Container, Grid, Paper } from "@mui/material"
import React from "react"

export const Experience = () => {
  return (
    <Container maxWidth="lg">
      <h1>Professional Experience</h1>
      <Grid container>
        <Grid item md={12}>
          <CardContent>
            <h2>Control Gap</h2>
            <h2>Full Stack Developer</h2>
            <h3>2019 - 2023</h3>
            <p>
              ● Introduced state-of-the-art DevOps practices, implementing
              cost-effective pipelines and Infrastructure as Code (IaC)
              solutions that resulted in significant cost savings.
            </p>
            <p>
              ● Facilitated transformative shift of traditional processes into
              user-friendly applications by working closely with cybersecurity
              auditors and cross-functional teams.
            </p>
            <p>
              ● Utilized diverse tech stack comprising Python, JavaScript,
              Terraform, Elixir, and AWS services to develop web applications,
              enhance security, and optimize cloud infrastructure management.
            </p>
            <p>
              ● Designed and implemented secure user authentication and
              authorization mechanisms to control access to sensitive data and
              functionalities.
            </p>
            <p>
              ● Spearheaded infrastructure and backend projects, overseeing code
              bases and leading code reviews and approvals.
            </p>
            <p>
              ● Developed and executed innovative programming strategies,
              incorporating automated server shutdown system and user-friendly
              interface for server administration and DNS switching.
            </p>
            <p>
              ● Created in-house application capable of generating 3K reports in
              just five minutes, continually enhancing its capabilities in
              collaboration with lead auditors.
            </p>
            <p>
              ● Oversaw evolution of data schemas within web applications,
              integrating both SQL and NoSQL databases.
            </p>
            <p>
              ● Conducted assessment of cybersecurity team needs, performed gap
              analysis of existing security tools, and developed customized
              security tools tailored to specific organizational requirements.
            </p>
          </CardContent>
        </Grid>
      </Grid>
    </Container>
  )
}
