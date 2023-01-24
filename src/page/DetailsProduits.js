import React from 'react'
import { Container, 
    Row, 
    Col, 
    Image, 
    ListGroup, 
    Card, 
    Button,
 } from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom'
import Rading from '../components/Rading'
import produits from '../produits'

import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Products from '../components/Produits'
import { getProducts as listProducts } from '../redux/actions/productActions'

const DetailsProduits = () => {

    const dispatch = useDispatch();

    const getProducts = useSelector(state => state.getProducts);
    const { products, error } = getProducts;

    useEffect(() => {
        dispatch(listProducts());
    }, [dispatch]);

    //
    const match = useParams();
    const produit = produits.find((p) => p._id === match.id)
  return (
    <Container>
        <Link to='/' className='btn btn-light my-3'><i class="fas fa-chevron-circle-left"></i>
            page precedente
        </Link>
        <Row>
            <Col md={6}>
             <Card><Image src={produit.image} alt={produit.name}  fluid /></Card>   
            </Col>
            <Col md={3}>
                <ListGroup variant='flush'>
                        <ListGroup.Item>
                            <h3>{produit.name}</h3>
                        </ListGroup.Item>      
                        <ListGroup.Item>
                            <Rading rading={produit.rading} comment={`${produit.numReviews} commentaire`} />
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <p>{produit.description}</p>
                        </ListGroup.Item>
                </ListGroup>

            </Col>
            <Col md={6} style={{marginTop: '40px'}}>
             <Card><Image src={produit.image} alt={produit.name}  fluid /></Card>   
            </Col>
            <Col md={6} style={{marginTop: '40px'}}>
             <Card><Image src={produit.image} alt={produit.name}  fluid /></Card>   
            </Col>
        </Row>
    </Container>
  )
}

export default DetailsProduits