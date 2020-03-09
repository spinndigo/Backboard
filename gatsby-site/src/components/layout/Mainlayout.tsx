import react from "React"
import { Container } from "@material-ui/core"

const MainLayout = props => {
  return <Container maxWidth="xl">{props.children}</Container>
}

export default MainLayout
