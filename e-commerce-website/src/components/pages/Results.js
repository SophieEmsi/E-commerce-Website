import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useParams } from 'react-router-dom';

const Results = () => {
  const [results, setResults] = useState([]);
  const { category } = useParams();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/category/${category}`)
      .then(response => response.json())
      .then(data => setResults(data))
      .catch(error => console.log(error));
  }, [category]);

  return (
    <Container>
      <Row>
        <Col>
          <h1>Results</h1>
          {results.map(result => (
            <div key={result.id}>
              <h3>{result.title}</h3>
              <p>{result.price}</p>
            </div>
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default Results;


