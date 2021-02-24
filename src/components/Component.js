import { 
    Card, 
    CardImg,
    CardText,
    CardBody,
    CardTitle
} from 'reactstrap';
import React from 'react';
import { Jumbotron, Container } from 'reactstrap';

function Component(props) {



    return  <div className="col-md-4">
          <Jumbotron fluid>
            <Container fluid>       
              <Card className="mb-3">
                <CardImg 
                top 
                width="100%" 
                src={props.image} 
                />
                <CardBody>
                  <CardTitle tag="h5">{props.title}</CardTitle>
                  <CardText>{props.description}</CardText>
                </CardBody>
              </Card>
            </Container>
          </Jumbotron>
   </div>
}
export default Component;