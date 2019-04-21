import React, { Component } from 'react';
import styled from 'styled-components';
import { H4, H2 } from 'components/Typography';
import Wrapper from 'components/Wrapper';
import InfoCard from 'components/InfoCard';
import AddNewsCard from 'components/AddNewsCard';
import { Row, Col } from 'react-flexbox-grid';
import { Button } from 'components/Button';
import { putDataToDB, getDataFromDb, deleteFromDB } from '../requests';
import { ClipLoader } from 'react-spinners';

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



class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = { 
        value:'', 
        data: {},
        refreshCard: '',
        dataRetrieved: false,
        loading: false,
        news: [],
        cors: 'http://cors.io/?'
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDeleteItem = this.handleDeleteItem.bind(this);

    }
    handleChange(event) {
        let currentComponent = this;
        const urlMetadata = require('url-metadata');
        (async () => {
        this.setState({loading: true})
        await this.setState({value: event.target.value});
        await urlMetadata(this.state.cors + this.state.value).then(
            function (metadata) { 
                currentComponent.setState({data: metadata})
                currentComponent.setState({loading: false})
                currentComponent.setState({dataRetrieved: true})
            },
            function (error) {
                console.log(error)
            })
            

        })()

    }
    handleDeleteItem(id){
        this.setState({loading: true})
        deleteFromDB(id)
        this.setState({loading: false})
        this.setState({dataRetrieved: true, loading: false})
        this.refreshCard()
        getDataFromDb(data => {
            this.setState({ news: data.data })
            console.log(data)
        })
    }
    
    handleSubmit() {
        this.setState({loading: true})
        putDataToDB(this.state.data)
        this.setState({loading: false})
        this.setState({dataRetrieved: true, loading: false})
        getDataFromDb(data => {
            this.setState({ news: data.data })
            console.log(data)
        })
    }
    componentDidMount() {
        getDataFromDb(data => {
            this.setState({ news: data.data })
            console.log(data)
        })
    }

    refreshCard = () => 
        this.setState({refreshCard: !this.state.refreshCard})

    

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
                            {
                                !this.state.dataRetrieved ?
                                    <Button primary small type="submit" >Add to my news articles</Button>
                                : null
                            }
                            </Col>
                        </Row>	
                    </form>           
                    <Row>
                        <Col xs={12} sm={12} md={4} lg={4}>
                            <H4 lineHeight="0px">My News</H4>
                        </Col>
                    </Row>	
              
                        <ClipLoader
                        // css={override}
                        sizeUnit={"px"}
                        size={25}
                        color={'#123abc'}
                        loading={this.state.loading}
                      />
                        {
                            this.state.dataRetrieved ? 
                            <AddNewsCard 
                            data={this.state.data} 
                            refresh={this.refreshCard}
                            /> : null
                        }


   
                    {
                        this.state.news.map((item, i) => {
                            return ( 
                                <div key={i}>
                                    <InfoCard  data={item} refresh={this.refreshCard}/>
                                    <Button primary onClick={() => {this.handleDeleteItem(item._id)}} >Delete from articles</Button>
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





export default Profile;
