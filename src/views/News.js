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
    const metascraper = require('metascraper')([
      require('metascraper-author')(),
      require('metascraper-date')(),
      require('metascraper-description')(),
      require('metascraper-image')(),
      require('metascraper-logo')(),
      require('metascraper-clearbit-logo')(),
      require('metascraper-publisher')(),
      require('metascraper-title')(),
      require('metascraper-url')()
    ])
    
    
    const targetUrl = 'https://cors.io/?https://www.bloomberg.com/news/articles/2016-05-24/as-zenefits-stumbles-gusto-goes-head-on-by-selling-insurance'

    ;(async () => {
      const { body: html, url } = await axios(targetUrl)
      const metadata = await metascraper({ html, url })
      console.log(metadata)
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
