import React from "react"
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  useTheme,
  useMediaQuery,
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
    <AppBar
      position="static"
      style={{ backgroundColor: dark, border: "1px solid green" }}
    >
      <Toolbar>
        <h1
          onClick={() => {
            navigate("/")
          }}
        >
          TSC
        </h1>

        {isMobile ? (
          <DrawerComponent />
        ) : (
          <div>
            {/* <Link to="/contact">Contact</Link> */}
            {/* <Link to="/faq">FAQ</Link> */}
          </div>
        )}
      </Toolbar>
    </AppBar>
  )
}
export default Navbar
