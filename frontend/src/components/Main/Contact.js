import React from "react"
import { useFormik } from "formik"
import * as Yup from "yup"
import {
  Button,
  TextField,
  Container,
  Typography,
  Box,
  Paper,
} from "@mui/material"

export const ContactForm = () => {
  return (
    <Container maxWidth="lg">
      <Paper
        style={{
          margin: "1em",
          padding: "1em",
        }}
      >
        <div>
          <Typography variant="h2">Contact Me</Typography>
          <a
            style={{ color: "#14ad47" }}
            href="mailto:dannymoscoso05@gmail.com"
          >
            dannymoscoso05@gmail.com
          </a>
          <br />
          <Typography variant="p">(647) 898-6006</Typography>
        </div>
      </Paper>
    </Container>
  )
}
