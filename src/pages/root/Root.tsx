import { Card, Col, Container, Row } from "react-bootstrap"
import { Outlet } from "react-router-dom"

function RootLayout() {
  return (
    <>
      <Container>
        <p>------Johans Root-----</p>


        <Outlet />

        
        <p>------Johans Root-----</p>
      </Container>
    </>
  )
}

export default RootLayout
