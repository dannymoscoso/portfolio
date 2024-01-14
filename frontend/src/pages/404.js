import * as React from "react"

import Seo from "../components/seo"
import { Typography } from "@mui/material"

const NotFoundPage = () => (
  <>
    <Typography variant="h1">404: Not Found</Typography>
  </>
)

export const Head = () => <Seo title="404: Not Found" />

export default NotFoundPage
