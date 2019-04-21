import React, { useState, useEffect } from 'react';
import { P, H1, H2, H3, H4, H5, H6 } from 'components/Typography';
import Gx from '@tgrx/gx';
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




const AddNewCard = ({ data }) =>{
	const item = data
	return(
		<div>
			{
				item ? 
					<Container>
						<Gx col={3}>
							<ImageContainer>
								<Image src={item.image} />
							</ImageContainer>
						</Gx>
						<Gx col={9}>
							<Text >
								<Gx col={3}>
									{ item ? <P>{item.author}</P> : '' }  
								</Gx>
								<H6 small>{ item ? item["og:site_name"]: '' } { item ? item["article:published_time"] : ''}</H6>
								{ item ? <H5>{item["og:description"]}</H5> : '' }
								{ item ? <P small>{item["og:description"]}</P> : '' }
							</Text>
						</Gx>
					</Container>
				: 
					null
			}
		</div>
	)
}


  

export default AddNewCard;