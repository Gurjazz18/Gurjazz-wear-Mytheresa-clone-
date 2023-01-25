  

         <div>
    
    {
     data&&data?.map((elem)=>(
           
            
        <Card >
       
        <Card.Img variant="top" src={elem.image}  alt="img"/>
   
        <Card.Body>
            <Card.Title>{elem.name}</Card.Title>

        </Card.Body>

              <ListGroup className="list-group-flush">

              <ListGroup.Item>{elem.name}</ListGroup.Item>
              <ListGroup.Item>{elem.offerPrice}</ListGroup.Item>
              <ListGroup.Item>{elem.rating}</ListGroup.Item>

              
          


            </ListGroup>


            <Button variant="info"   onClick={()=>dispatch({type:"addToCard",payload:elem})}>Add To Cart</Button>

            </Card>
       


           ))
        }

       
   
    </div>

       