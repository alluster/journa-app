import React, { Component } from 'react';
import styled from 'styled-components';
import { H4, H2 } from 'components/Typography';
import Wrapper from 'components/Wrapper';
import InfoCard from 'components/InfoCard';
import AddNewsCard from 'components/AddNewsCard';
import { Row, Col } from 'react-flexbox-grid';
import { Button } from 'components/Button';
import {putDataToDB, getDataFromDb} from '../requests';

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
        value:'', 
        data: {},
        news: [],
        cors: 'https://cors.io/?'
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        this.setState({value: event.target.value});
        const urlMetadata = require('url-metadata');
        (async () => {
            const metadata = await urlMetadata(this.state.value)
            this.setState({data: metadata})
            // putDataToDB({metadata})
            
        })()
    }
    handleSubmit(event) {
        
        event.preventDefault();
        const urlMetadata = require('url-metadata');
        (async () => {
            const metadata = await urlMetadata(this.state.cors + this.state.value)
            this.setState({data: metadata})
            putDataToDB({metadata})
            
        })()
    }
    componentDidMount() {
        getDataFromDb(data => {
            
            this.setState({ news: data.data })
        })
    }

    render() {        
         return (
             
            <Container>
                <Content>
                    <form onSubmit={this.handleSubmit}>
                        <Row>
                            <Col xs={6} sm={6} md={4} lg={4}>
                                <Input type="text" value={this.state.value} onChange={this.handleChange} />
                            </Col>
                            <Col xs={6} sm={6} md={4} lg={4}>
                                <Button primary small type="submit" >Seek</Button>
                            </Col>
                        </Row>	
                    </form>           
                    <Row>
                        <Col xs={12} sm={12} md={4} lg={4}>
                            <H4 lineHeight="0px">My News</H4>
                        </Col>
                    </Row>	
                    <AddNewsCard data={this.state.data} />
                    {
                        this.state.news.map((item, i) => 
                           <InfoCard key={i} data={item}/>
                        ).reverse()                
                    }
                   
                </Content>
            </Container>
  
        )
    }
}





export default News;
