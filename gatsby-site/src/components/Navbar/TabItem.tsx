import { Tab } from "@material-ui/core"
import React from "react"

interface LinkTabProps {
  label: string
  href: string
}

export const LinkTab = (props: LinkTabProps) => {
  return (
    <Tab
      component="a"
      onClick={(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        event.preventDefault()
      }}
      {...props}
    />
  )
}
