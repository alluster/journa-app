import styled, { css } from 'styled-components';

export const Button = styled.button`
    ${props => {
        if (props.small) return css`
            min-height: 30px;
            min-width: 150px;
            font-size 12px;
            padding: 0 18px;
        `;

        if (props.large) return css`
            min-height: 60px;
            min-width: 250px;
            font-size: 20px;
            padding: 0 30px;
        `;

        return css`
            min-height: 50px;
            min-width: 250px;
            font-size: 16px;
        `;
    }}

    ${props => {
        if (props.outline) return css`
            background-color: transparent;
            border: 4px solid ${props => props.theme.colors.black};
        `;

        if (props.primary) return css`
            background-color: ${props => props.theme.colors.blue};
            color: ${props => props.theme.colors.white};
        `;

        if (props.secondary) return css`
            background-color: ${props => props.theme.colors.darkBlue};
            color: ${props => props.theme.colors.white};
        `;

        if (props.light) return css`
            background-color: ${props => props.theme.colors.white};
        `;

        if (props.dark) return css`
            background-color: ${props => props.theme.colors.black};
            color: ${props => props.theme.colors.white}`;

        return css`
            background-color: transparent;
            border: 4px solid ${props => props.theme.colors.black};
            color: black;
        `;
    }}

    ${props => {
        if (props.primary) return css`
            .a {
                color: ${props => props.theme.colors.white};
            }
        `;

        if (props.secondary) return css`
            color: ${props.theme.colors.white};
        `;

        if (props.light && !props.outline) return css`
            color: ${props.theme.colors.black};
        `;

        if (props.dark) return css`
            color: ${props.theme.colors.white};
        `;

        return css`
            color: ${props.theme.colors.white};
        `;
    }}

    ${props => {
        if (props.outline && props.primary) return css`
            color: ${props => props.theme.colors.blue};
            border: 4px solid ${props => props.theme.colors.blue};
        `;

        if (props.outline && props.secondary) return css`
            color: ${props => props.theme.colors.darkBlue};
            border: 4px solid ${props => props.theme.colors.darkBlue};
        `;

        if (props.outline && props.dark) return css`
            color: ${props => props.theme.colors.black};
            border: 4px solid ${props => props.theme.colors.black};
        `;

        if (props.outline && props.light) return css`
            a {
                color: ${props => props.theme.colors.white};
            }
            border: 4px solid ${props => props.theme.colors.white};
        `;

        return css`''`;
    }};

  
    line-height: 1.3;
    font-weight: 700;
    text-align: center;
    border-radius: 5px;
    border: none;
    font-family: 'Rubik', sans-serif;
    text-transform: uppercase;
    :hover{cursor:pointer};
`;
