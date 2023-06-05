import React, { useState, useEffect, useContext } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useParams } from 'react-router-dom';
import 'tailwindcss/tailwind.css';
import styled from 'styled-components';
import { CartContext } from './CartContext';
import axios from 'axios';

const StyledButton = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: white;
  cursor: pointer;
  margin-top: 60px;
  margin-bottom: 15px;
  color: black;
  border: 2px solid black;
  padding: 10px 25px;

  &:hover {
    background-color: black;
    color: white;
    border: none;
  }
`;

const Results = () => {
  const [results, setResults] = useState([]);
  const { category } = useParams();
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    const fetchResults = async () => {
      try {
        const response = await axios.get(`https://fakestoreapi.com/products/category/${category}`);
        setResults(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchResults();
  }, [category]);

  useEffect(() => {
    document.body.style.marginTop = '160px';
    return () => {
      document.body.style.marginTop = '';
    };
  }, []);

  const handleAddToCart = (item) => {
    addToCart(item);
  };

  return (
    <Container className="mb-9">
      <Row>
        {results.map((result) => (
          <Col className="mb-4" key={result.id} xs={12} sm={6} md={3} lg={3} xl={3}>
            <Card className="shadow-lg" style={{ height: '100%' }}>
              <div className="mt-4 mb-4 w-full h-full flex justify-center items-center">
                <div className="w-[200px] mx-auto flex justify-center items-center">
                  <img className="max-h-[160px] hover:scale-110" src={result.image} alt={result.title} />
                </div>
              </div>
              <Card.Body className="ml-5">
                <Card.Title>{result.title}</Card.Title>
                <Card.Text className="mt-4 text-lg">£{result.price}</Card.Text>
                <StyledButton onClick={() => handleAddToCart(result)}>Add to Cart</StyledButton>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Results;
