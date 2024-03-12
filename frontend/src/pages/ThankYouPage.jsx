import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import '../styles/thank-you.css';

const ThankYouPage = () => {
  return (
  <section>
    <Container>
        <Row>
            <Col lg='12' className='pt-5 text-center'>
                <div className='thank__you'>
                    <span><i class="ri-checkbox-circle-line"></i></span>
                    <h1 className='mb-3 fw-semibold'>Thank You</h1>
                    <h3 className='mb-4'>Your tour is booked.</h3>
                    <Button className='button primary__btn w-25'><Link to ='/'>Back to Home</Link></Button>
                </div>
            </Col>
        </Row>
    </Container>
  </section>
  )
}

export default ThankYouPage
