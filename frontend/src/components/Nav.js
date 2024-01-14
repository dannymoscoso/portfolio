import React from "react"
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  useTheme,
  useMediaQuery,
  Link,
  Button,
  Box,
  Grid,
} from "@mui/material"
import { navigate } from "gatsby"
import DrawerComponent from "./Drawer"
import { dark } from "./colors"

// const useStyles = makeStyles(theme => ({
//   navlinks: {
//     marginLeft: theme.spacing(5),
//     display: "flex",
//   },
//   logo: {
//     flexGrow: "1",
//     cursor: "pointer",
//   },
//   link: {
//     textDecoration: "none",
//     color: "white",
//     fontSize: "20px",
//     marginLeft: theme.spacing(20),
//     "&:hover": {
//       color: "yellow",
//       borderBottom: "1px solid white",
//     },
//   },
// }))

function Navbar() {
  // const classes = useStyles()
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("md"))

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography
          variant="h2"
          onClick={() => {
            navigate("/")
          }}
        >
          DM
        </Typography>

        {isMobile ? (
          <Grid container justifyContent="right">
            <Grid item>
              <DrawerComponent />
            </Grid>
          </Grid>
        ) : (
          <Grid container justifyContent="right">
            <Grid item>
              <Button
                onClick={() => {
                  navigate("/projects")
                }}
              >
                Projects
              </Button>
            </Grid>
          </Grid>
        )}
      </Toolbar>
    </AppBar>
  )
}
export default Navbar
