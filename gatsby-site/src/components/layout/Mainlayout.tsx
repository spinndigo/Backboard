import { Container, Box } from "@material-ui/core"
import { NavBar } from "../Navbar/NavBar"

interface props {
  header: string
}

export const MainLayout: React.FC<props> = ({ header, ...props }) => {
  return (
    <>
      <Box>
        <NavBar />
      </Box>
      <Container maxWidth="xl">
        <Box> {header} </Box>
        {props.children}
      </Container>
    </>
  )
}
