import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

function Productlist() {
 
  const[product,setProduct]=useState([])
  const fetchData= async ()=>{
var data=await  fetch('https://fakestoreapi.com/products')
  data=await data.json();
   setProduct(data)
  }
  useEffect( ()=>
  {
    fetchData()},[])
    console.log(product);

  return (
    <div>
      <Container>
      <Row className='mt-4'>
        <Col style={{height:'600px'}} lg={6}><img style={{height :'500px'}} src="https://cdn.pixabay.com/photo/2016/10/10/14/46/icon-1728552_640.jpg" alt="" /></Col>
        <Col className='mt-5'style={{fontSize:'80px'}}  lg={6}>Go on and shop from wide variety of products!!</Col>
      </Row>
    </Container>
    {product.length>0?
    <div className=''>
      <Row>
        {
          product.map(i=>(
            <Col lg={3} md={4} sm={6}>
               <Card className='mb-3 mx-3 my-2 shadow' style={{ width: '18rem',height:'550px' }}>
      <Card.Img style={{height : '350px'}} variant="top" src={i.image} />
      <Card.Body>
        <Card.Title>{i.title.length>35?i.title.slice(0,35)+"....":i.title}</Card.Title>
        
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>category: {i.category}</ListGroup.Item>
        <ListGroup.Item>Price: ${i.price}</ListGroup.Item>
        <ListGroup.Item>Rating: <span className={i.rating.rate >4 ?'text-success':i.rating.rate >3 ?'text-warning':'text-danger'}>{i.rating.rate}<i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i>
        <i class="fa-regular fa-star-half-stroke"></i></span></ListGroup.Item>
      </ListGroup>
      
    </Card>
            </Col>
          ))
        }
      </Row>
    </div>
    :
    <div className='text-center m-4  s'>
    <i class="fa-solid fa-spinner fa-spin fa-4x" style={{color : "lightblue"}}></i>
    </div>
}
    </div>
  )
}

export default Productlist
