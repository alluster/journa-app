import React, { Component } from 'react';
import styled from 'styled-components';
import Gx from '@tgrx/gx';
import { H5, H6 } from 'components/Typography';
import Wrapper from 'components/Wrapper';
import SignUpPage from '../Form';



const Container = styled.div`
`;
const ContentBlock = styled.div`
width: 60%;
margin: auto;
top: 25%;
transform: translate(-0%, 25%);
@media (max-width: ${props => props.theme.screenSize.tablet}) {
  width: 100%;
  margin: auto;
  top: 0%;
  transform: translate(-0%, 0%);
  }

`;
const ImageContainer = styled.div`
width: 100%;

@media (max-width: ${props => props.theme.screenSize.tablet}) {
display: none
}`;

const Image = styled.img`
  width: 100%;
  object-fit: cover;
  max-height: calc(100vh - 108px);
margin: 0px;
padding: 0px;
  
`;
const Register = styled.div`
position: relative;
top: 50%;
transform: translate(-0%, -50%);
@media (max-width: ${props => props.theme.screenSize.tablet}) {
  position: relative;
  margin-top: 120px;
  transform: translate(-0%, -0%);


`;


class Hero extends Component {
  render() {
    return (
      <Container>
        <Gx col={6}>
          <ImageContainer >
            <Image src="https://images.unsplash.com/photo-1552845312-844abcba21d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80" />
          </ImageContainer>
        </Gx>
       
        <Gx col={6}>
          <ContentBlock col={6}>
            <SignUpPage />
      
          </ContentBlock>
        </Gx>  
      </Container>
  
    )
    
 
  }
}





export default Hero;
