import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import products from '../products';
import { Col, Row, Image, ListGroup, Card, Button } from 'react-bootstrap';
import Rating from '../components/Rating';
import axios from 'axios';

const ProductScreen = () => {
  const [product, setProduct] = useState([]);
  const { id: ProductId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(`/api/products/${ProductId}`);
      setProduct(data);
    };
    fetchData();
  }, [ProductId]);

  return (
    <>
      <Link className='btn btn-light my-3' to={`/`}>
        Go Back
      </Link>
      <Row>
        <Col md={5}>
          <Image src={product.image} alt={product.name} fluid />
        </Col>
        <Col md={4}>
          <ListGroup>
            <ListGroup.Item>
              <h3>{product.name}</h3>
            </ListGroup.Item>

            <ListGroup.Item>
              <Rating
                value={product.rating}
                text={`${product.numReviews} review`}
              />
            </ListGroup.Item>
            <ListGroup.Item>price:${product.price}</ListGroup.Item>
            <ListGroup.Item>Description:{product.description}</ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={3}>
          <Card>
            <ListGroup variant='flush'>
              <ListGroup.Item>
                <Row>
                  <Col>Price</Col>
                  <Col>${product.price}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Staus</Col>
                  <Col>
                    <strong>
                      ${product.countInStock > 0 ? 'IN Stock' : 'Out Of Stock'}
                    </strong>
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Button
                  className='btn-block'
                  type='button'
                  disabled={product.countInStock === 0}
                >
                  Add To Cart
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
        {/* <Col md={}></Col> */}
      </Row>
    </>
  );
};

export default ProductScreen;
