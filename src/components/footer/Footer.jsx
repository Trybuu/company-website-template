import { Col, Container, Row } from 'react-bootstrap'
import classes from './Footer.module.scss'

export default function Footer() {
  return (
    <footer className={classes.footer}>
      <Container fluid="xl">
        <Row>
          <Col className="col-12 col-md-4">Adres</Col>
          <Col className="col-12 col-md-4">Coś tam</Col>
          <Col className="col-12 col-md-4">Linki</Col>
        </Row>
      </Container>
    </footer>
  )
}
