import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, FormControl, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../NavBar.js';

const Results = () => {
  const [results, setResults] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => setResults(data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div>
      <Navbar /> 
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
    </div>
  );
};

export default Results;
