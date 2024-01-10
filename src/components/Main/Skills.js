import { CardContent, Container, Grid, Paper } from "@mui/material"
import React from "react"
import WebIcon from "@mui/icons-material/Web"
import AutoFixHighIcon from "@mui/icons-material/AutoFixHigh"
import LockIcon from "@mui/icons-material/Lock"
import CloudIcon from "@mui/icons-material/Cloud"
import BugReportIcon from "@mui/icons-material/BugReport"
import SchemaIcon from "@mui/icons-material/Schema"
import StorageIcon from "@mui/icons-material/Storage"
import { dark } from "../colors"

export const Skills = () => {
  return (
    <div style={{ backgroundColor: dark }}>
      <Container
        maxWidth="lg"
        style={{
          textAlign: "center",
          color: "white",
        }}
      >
        <Grid container justifyContent={"center"}>
          <Grid item sm={12} md={6}>
            <CardContent>
              <AutoFixHighIcon fontSize="large" />

              <h1>Backend Development</h1>
              <p>
                I excel in crafting APIs tailored to specific needs,
                specializing in both NodeJS and Python backends. My expertise
                extends to proficiently handling REST APIs and GraphQL.
                Additionally, I possess adept skills in configuring cloud
                environments, whether it be serverless architectures, managed
                servers, or virtual machines{" "}
              </p>
            </CardContent>
          </Grid>

          <Grid item sm={12} md={6}>
            <CardContent>
              <StorageIcon fontSize="large" />

              <h1>Database Development</h1>
              <p>
                Selecting the optimal database is a crucial decision, contingent
                upon the specific criteria of our project. Proficiently managing
                and storing data is my forte. Be it NoSQL, SQL, or any
                alternative database system, I possess the expertise to handle
                it seamlessly. The cornerstone of my approach lies in
                understanding and implementing robust data relationships and
                normalization principles.{" "}
              </p>
            </CardContent>
          </Grid>

          <Grid item sm={12} md={6}>
            <CardContent>
              <WebIcon fontSize="large" />

              <h1>Frontend</h1>
              <p>
                Whether you come equipped with a detailed wireframe or not, rest
                assured, I have the capability to bring your vision to life.
                From seamlessly managing cookies, API keys, and user roles. I
                handle each aspect with proficiency. I consider state handling a
                routine task, resolving potential challenges effortlessly. My
                commitment to delivering a comprehensive solution extends beyond
                the visible aspects, diving into the intricacies of user
                interaction and system functionality, guaranteeing a
                well-rounded and secure development process{" "}
              </p>
            </CardContent>
          </Grid>

          <Grid item sm={12} md={6}>
            <CardContent>
              <LockIcon fontSize="large" />

              <h1>Cybersecurity</h1>
              <p>
                Developing with a security-first mindset is my core principle. I
                steer clear of open firewalls, compromised APIs, and vulnerable
                code, ensuring that the integrity of the systems I work on
                remains unwavering. This commitment reflects not just a best
                practice, but a fundamental belief that proactive security
                measures are non-negotiable in our digital landscape. I
                prioritize a meticulous approach to fortify the codebase,
                eliminating vulnerabilities and reinforcing defenses. This
                ensures not only the delivery of secure solutions but also
                contributes to the overall resilience and trustworthiness of the
                digital ecosystem.
              </p>
            </CardContent>
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}
