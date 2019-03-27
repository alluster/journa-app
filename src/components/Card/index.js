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
const Card = ({data, props}) =>
<Container>
<Gx col={3}>
<ImageContainer>
  <Image src="https://hs.mediadelivery.fi/img/978/656bf56e935d4605927ea1e13f422681.jpg.webp" />
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
    <H5>{data.description}</H5>
    {/* <P small>Erikoissyyttäjä Robert Muellerin tutkinnan tuloksena syntynyt raportti ei osoita, että presidentti Donald Trumpin vuoden 2016 vaalikampanja olisi tehnyt yhteistyötä Venäjän hallinnon kanssa. Raportti ei ottanut kantaa siihen, onko presidentti estänyt oikeuden toteutumiseErikoissyyttäjä Robert Muellerin tutkinnan tuloksena syntynyt raportti ei osoita, että presidentti Donald Trumpin vuoden 2016 vaalikampanja olisi tehnyt yhteistyötä Venäjän hallinnon kanssa. Raportti ei ottanut kantaa siihen, onko presidentti estänyt oikeuden toteutumisenn.</P> */}

    </Text>
  </Gx>


</Container>
  

export default Card;