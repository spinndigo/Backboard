import { AppBar, Tabs, Tab } from "@material-ui/core"
import { LinkTab } from "./LinkTab"
import { useState } from "react"

export const NavBar = () => {
  const [currentIndex, setCurrentIndex] = useState(1)
  const handleChange = (value, event) => {
    if (value !== currentIndex) {
      setCurrentIndex(value)
    }
  }
  return (
    <AppBar position="static">
      <Tabs value={currentIndex} onChange={handleChange}>
        <LinkTab href={"/about"} label="About" />
        <LinkTab href={"/"} label="The Backboard" />
        <LinkTab href={"/contact"} label="Contact Me" />
      </Tabs>
    </AppBar>
  )
}
