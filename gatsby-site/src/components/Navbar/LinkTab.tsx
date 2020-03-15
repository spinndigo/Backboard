import { Tab } from "@material-ui/core"
import React from "react"
import { navigate } from "gatsby"

interface LinkTabProps {
  label: string
  href: string
}

export const LinkTab = (props: LinkTabProps) => {
  const { href } = props
  return <Tab component="a" onClick={() => navigate(href)} {...props} />
}
