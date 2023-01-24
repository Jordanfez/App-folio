import React from 'react'
import './Panier.css'


const Panier = () => {
  return (
    <div className='cartitem'>
      <div className='cartitem__image'>
        <h2> Vos commandes </h2>
        <div className='cartitem__left'>
          <p> image</p>
          <p> Prix</p>
          <p> Quantiter:</p>
          <select>
            <option>1</option>
            <option>2</option>
          </select>
          <button>X</button>
        </div>
      </div>
      <div className='cartitem__right'>
          <div className='cartitem__info'>
            <p> quantiter produits (0)  </p>
            <p> Prix: 755$ </p>
            <p> Total: 755$ </p>
          </div>
          <div className='cartitem__button'>
            <button>payer</button>
       </div>
      </div>
    </div>
  )
}

export default Panier

/**
 * import React from 'react'
import { Container, 
  Row, 
  Col, 
  Image, 
  ListGroup, 
  Card, 
  Button,
} from 'react-bootstrap'

const Panier = () => {
  return (
    <Container>
      <Row>
      <Col md={4}>
                <Card>
                    <ListGroup variant='flush'>
                        <ListGroup.Item>
                            <Row>
                                <Col>Nom produit</Col>
                                <Col>Prix :</Col>
                                <Col> quantiter</Col> 
                                <Col>
                                  <select> 
                                  <option>1</option>
                                  <option>2</option>
                                  </select>
                                </Col>
                            </Row>
                        </ListGroup.Item>
                    </ListGroup>
                </Card>
            </Col>
      </Row>
    </Container>
  )
}

export default Panier
 */