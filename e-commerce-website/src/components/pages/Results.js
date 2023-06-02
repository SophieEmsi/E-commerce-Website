import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useParams } from 'react-router-dom';
import 'tailwindcss/tailwind.css';

const Results = () => {
  const [results, setResults] = useState([]);
  const { category } = useParams();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/category/${category}`)
      .then(response => response.json())
      .then(data => setResults(data))
      .catch(error => console.log(error));
  }, [category]);

  useEffect(() => {
    document.body.style.marginTop = '80px'; 
    return () => {
      document.body.style.marginTop = ''; 
    };
  }, []);

  return (
    <Container className="mt-4">
      <Row>
        <Col>
          <h1>Results</h1>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {results.map(result => (
              <Card key={result.id} className="shadow-lg">
                <Card.Img variant="top" src={result.image} />
                <Card.Body>
                  <Card.Title>{result.title}</Card.Title>
                  <Card.Text>{result.price}</Card.Text>
                  <Button variant="primary">Add to Cart</Button>
                </Card.Body>
              </Card>
            ))}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Results;
