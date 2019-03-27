import React, { Component } from 'react';
import styled from 'styled-components';
import Gx from '@tgrx/gx';
import { H5, H6 } from 'components/Typography';
import Wrapper from 'components/Wrapper';

import { Link } from "react-router-dom";


const TopNav = styled(Wrapper)`
width: 100%;
top; 0;
padding: 20px;
margin-top: 0px !mportant;
background-color: white;
max-height: 70px;
// -webkit-box-shadow: -10px -46px 9px 53px rgba(235,235,235,0.4);
// -moz-box-shadow: -10px -46px 9px 53px rgba(235,235,235,0.4);
// box-shadow: -10px -46px 9px 53px rgba(235,235,235,0.4);

`;
const LinkContainer = styled(Gx)`

`;

const NavLink = styled(H6)`
@media (max-width: ${props => props.theme.screenSize.tablet}) {
  display: none
`
const Logo = styled(H5)`

`



class Nav extends Component {
  render() {
    return (
      <TopNav>
        <LinkContainer col={6}>
            <Link to="/" ><Logo bold>Journa</Logo></Link>
        </LinkContainer>
        <LinkContainer col={2}>
            <Link to="news"><NavLink>Newslisting </NavLink></Link>
        </LinkContainer>
        <LinkContainer col={2}>
        <Link to="news"><NavLink>Become a member</NavLink></Link>
        </LinkContainer>
        <LinkContainer col={2}>
        <Link to="news"><NavLink>About</NavLink></Link>
        </LinkContainer>
      </TopNav>
  
    )
    
 
  }
}





export default Nav;
