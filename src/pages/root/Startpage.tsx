import { Col, Row } from "react-bootstrap"
import { Link } from "react-router-dom"

function RootLayout() {
  return (
    <>
      Johans startsida
      <div>
        <Row>
          <Col>kolumn1</Col>
          <Col>kolumn2</Col>
          <Col>kolumn1</Col>
          <Col>kolumn2</Col>
          <Col>kolumn1</Col>
          <Col>kolumn2</Col>
          <Col>kolumn1</Col>
          <Col>kolumn2</Col>
        </Row>
        <Link to="om2">Till om2</Link>
      </div>
    </>
  )
}

export default RootLayout
