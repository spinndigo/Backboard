import react from "React"
import { Container, Box } from "@material-ui/core"

interface props {
  header: string
}

const MainLayout: React.FC<props> = ({ header, ...props }) => {
  return (
    <Container maxWidth="xl">
      <Box> {header} </Box>
      {props.children}
    </Container>
  )
}

export default MainLayout
