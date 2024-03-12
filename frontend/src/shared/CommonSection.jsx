import React from 'react'
import './commonSection.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const CommonSection = ({title}) => {
  return (
   <section className='common__section'>
        <Container>
            <Row>
                <Col lg='12'>
                    <h1>{title}</h1>
                </Col>
            </Row>
        </Container>
   </section>
  )
}

export default CommonSection
