import React, {Component} from 'react';
import { Jumbotron, Container } from 'reactstrap';


class ClassComponent extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            title: "Hello!",
            text: "Founded in 2012 on the principle that data can change the world, Spire Global founders mapped out a plan to build and manage a constellation of nanosatellites. These satellites would collect data about the earth and beyond. At Spire, we work every day because we believe predictive analytics show patterns that can change the future. We care about the universe and take great care to make sure we leave the environment as it was when we arrived. We operate six offices on three continents and foster creativity and collaboration among our teams. We deliver solutions for industry problems and we deliver them in a way that is easy to understand and decipher. The pace of business today moves quickly, and we like to stay one step ahead of what our customers need.",
            
        }
    }

    componentDidMount(){
        this.setState({
            title: 'COVERING THE EARTH 24/7'
        }, ()=> {
            console.log(this.state.title)
        })
    }

    render () {
          return (
            <div>
              <Jumbotron>
                <Container>
                 <h1>{this.state.title}</h1>
                 <p>{this.state.text}</p>
                </Container>
              </Jumbotron>
            </div>
          );


    }
}

export default ClassComponent;