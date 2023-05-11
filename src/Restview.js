import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { ListGroup } from 'react-bootstrap';
import Operatingtime from './Operatingtime';
import Review from './Review';




function Restview() {

     const [restList, setRest] = useState([])

    //  api to access data
        const getData = async () => {
       const result = await fetch('/restaurants.json')
       result.json().then(data => setRest(data.restaurants))
  
     }
     // object create for useParams
    const params = useParams()
    console.log(params.id);


    // // find single restaurant data
    const singleRest = restList.find(i => i.id == params.id)
    console.log(singleRest);
      
     useEffect(() => {
       getData()
     }, [])
  
  return (
     <>
      {
       singleRest?
         ( <Row>
                 <Col lg={6} md={6}> 
                 <img className='w-75 container p-5' style={{height:'600px'}} src={singleRest.photograph}/> 
                 </Col>
              <Col lg={6} md={6} className='mt-5 fs-3 p-3'>

              <ListGroup>
                <ListGroup.Item> <h2 className='text-warning'> {singleRest.name}</h2> </ListGroup.Item>
                <ListGroup.Item> Address <h5 > {singleRest.address}</h5> </ListGroup.Item>
                <ListGroup.Item> Neighbourhood <h5 > {singleRest.neighborhood}</h5> </ListGroup.Item>

                <ListGroup.Item> Cusine type <h5>{singleRest.cuisine_type}</h5> </ListGroup.Item>
                <ListGroup.Item> 
                <Operatingtime workingTime={singleRest.operating_hours}/>

                <Review reviewList={singleRest.reviews}/>

                </ListGroup.Item>


              </ListGroup>

            
                 </Col>
         </Row>):"" 
        }
      
          </>
  )
}

export default Restview;