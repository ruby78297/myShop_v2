import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';

import Product from '../components/Product';
import axios from 'axios';
const HomeScreen = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get('/api/products');
      setProducts(data);
    };
    fetchData();
  }, []);
  console.log(products);
  return (
    <>
      <Row>
        {products.map((product) => (
          <Col key={product._id} xl={3} lg={4} md={60} sm={12}>
            <Product product={product}></Product>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default HomeScreen;
