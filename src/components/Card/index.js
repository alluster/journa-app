import React, { Component } from 'react';
import { P, H1, H2, H3, H4, H5, H6 } from 'components/Typography';
import Gx from '@tgrx/gx';
import {Button} from 'components/Button';
import styled from 'styled-components';

const Container = styled.div`
    // border: 1px solid ${props => props.theme.colors.black};
    border-radius: 5px;
`;

const Text = styled.div`
    margin-left: 20px;

`;
const ImageContainer = styled.div`
background-position: cover;  

`;
const Image = styled.img`
background-position: cover;  
`;

const ProfileButton = styled(Button)`
  margin-top: 15px;
  margin-bottom: auto;

`;
const description = 'og:description'
const Card = (data) =>
<Container>
{  console.log('moi',data)
}<Gx col={3}>
<ImageContainer>
  <Image src={data.data.image} />
  </ImageContainer>
  </Gx>

  <Gx col={9}>
  <Text >
    <Gx col={3}>
    <H5>Matti Pellonpää </H5>  

    </Gx>
    <Gx col={9}>
    <ProfileButton primary small>View Profile</ProfileButton>

    </Gx>
     
    <H6 small>Helsingin Sanomat 12.3.2019</H6>
   {
      data ? <H5>{data.data.title}</H5> : <H5>Loading</H5>
    }
       {
      data ? <P small>{data.data.description}</P> : <H5>Loading</H5>
    }

    </Text>
  </Gx>


</Container>
  

export default Card;