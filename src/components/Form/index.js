import React from 'react';
import { H3 } from 'components/Typography';
import {Button} from 'components/Button';
import styled from 'styled-components';
import Input from 'components/Input';
import Wrapper from 'components/Wrapper';
const Container = styled(Wrapper)`

`;


const Form = () =>
<div>
  <Container>
    <H3>Register Now and show the world what you have whritten.</H3>
  <Input  fieldName="Email address" placeholder="email" />
<Input  fieldName="Password" placeholder="Password" />
<Button primary>Register Now!</Button>

  </Container>


</div>
  

export default Form;
