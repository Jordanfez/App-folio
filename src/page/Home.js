import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import produits from '../produits'
import Produits from '../components/Produits'

const Home = () => {
  return (
    <Container>
        <h2>Nouvelle Arrivage</h2>
        <Row>
           
                {produits.map((p) =>
                     <Col key={p._id} sm={12} md={6} lg={4}>
                        <Produits p={p} />
                     </Col>

                )}
        </Row>
    </Container>
  )
}

export default Home