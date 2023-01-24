import React from 'react'
import { Card } from 'react-bootstrap'
import Rading from './Rading'

const Produits = ({ p }) => {
  return (
    <Card className='my-3 p-3 rounded'>
        <a href={`/produits/${p._id}`}>
            <Card.Img  src={p.image} />
        </a>
        <Card.Body>
            <a href={`/produits/${p._id}`} style={{ textDecoration : 'none' }}>
                <Card.Title as='div' className='text-center' >
                    <strong>{p.name}</strong>
                </Card.Title>
            </a>
            <Card.Text>
                <Rading rading={p.rading} comment={`${p.numReviews} commentaire`} color='#ff7f00'/>
            </Card.Text>
        </Card.Body>
    </Card>
  )
}

export default Produits