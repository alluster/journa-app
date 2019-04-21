import React, { Component } from 'react';
import styled from 'styled-components';
import { H4, H2 } from 'components/Typography';
import Wrapper from 'components/Wrapper';
import Card from 'components/InfoCard';
import { Row, Col } from 'react-flexbox-grid';
import { Button } from 'components/Button';
import { putDataToDB, getDataFromDb, deleteFromDB } from '../requests';
import InfoCard from 'components/InfoCard';

const Container = styled(Wrapper)`
`;

const Content = styled(Wrapper)`
`;

const Input = styled.input`
	border: 0.5px solid gray;
	border-radius: 30px;
	padding: 5px;
	text-align: left;
	height: 30px;
	font-size: 16px;
	width: 100%;
	color: ${props => props.theme.colors.black};
	display: block;
	opacity: 0.8;
	margin-left: auto;
	margin-right: auto;
`;



class News extends Component {
  constructor(props) {
    super(props);
    this.state = { 
			news: []
    }

   }
   
   

	componentDidMount() {
		getDataFromDb(data => {
			this.setState({ news: data.data })
			console.log(data)
		})
	}


  render() {

   
    return (
      <Container>
        <Content>
			{
				this.state.news.map((item, i) => {
					return ( 
						<div key={i}>
							<InfoCard  data={item}/>
						</div>
					)
				}

				).reverse()                
			}
        </Content>
      
      </Container>
  
    )
    
 
  }
}





export default News;
