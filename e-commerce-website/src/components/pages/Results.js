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
    document.body.style.marginTop = '160px';
    return () => {
      document.body.style.marginTop = '';
    };
  }, []);

  return (
    <Container className="mb-9">
      <Row>
        {results.map(result => (
          <Col className='mb-4' key={result.id} xs={12} sm={6} md={3} lg={3} xl={3}>
            <Card className="shadow-lg" style={{ height: '100%' }}>
              <div className="mt-4 mb-4 w-full h-full flex justify-center items-center">
                <div className="w-[200px] mx-auto flex justify-center items-center">
                  <img className="max-h-[160px] hover:scale-110" src={result.image} alt={result.title} />
                </div>
              </div>
              <Card.Body>
                <Card.Title>{result.title}</Card.Title>
                <Card.Text>{result.price}</Card.Text>
                <Button className='mt-4 mb-4' variant="primary">Add to Cart</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Results;
