import React, { Component } from 'react';
import styled from 'styled-components';
import Gx from '@tgrx/gx';
import { H4, H2 } from 'components/Typography';
import Wrapper from 'components/Wrapper';
import Card from 'components/Card';
import Input from 'components/Input';
import axios from 'axios';

const Container = styled(Wrapper)`
`;

const Content = styled(Wrapper)`
margin-top: 100px;
`;

class News extends Component {
  constructor(props) {
    super(props);
    // Don't do this!
    this.state = { 
      color: props.color,
      data: {},
    };
   }
   componentDidMount(){
    const urlMetadata = require('url-metadata')
      ;(async () => {
        const metadata = await urlMetadata('https://cors.io/?https://www.hs.fi/teknologia/art-2000006049981.html')
        console.log(metadata)
        this.setState({data: metadata})
      })()
   }




  render() {
    
   
    return (
      <Container>
        <Content>
        <Gx col={6}>
         <H4>Search</H4>
        </Gx>
       
        <Gx col={6}>
          <H4>
          <Input />
            </H4>
        </Gx>  
        <Card data={this.state.data} />

        </Content>
      
      </Container>
  
    )
    
 
  }
}





export default News;
