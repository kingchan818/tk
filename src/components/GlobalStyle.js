import { createGlobalStyle } from 'styled-components';

export const lightTheme = {
    body: '#fff',
    fontColor: '#000',
    boxShadow: '0px 5px 30px rgba(0, 0, 0, 0.3)',
};

export const darkTheme = {
    body: '#06090F',
    fontColor: '#fff',
    boxShadow: '0px 5px 30px rgba(255, 255, 255, 0.083)',
};

const GlobalStyles = createGlobalStyle`
    *{
        margin : 0;
        padding : 0;
        box-sizing : border-box;
    }
    html{
        &::-webkit-scrollbar{
            width : 0.5rem;
        }
        &::-webkit-scrollbar-thumb{
            background-color : black
        }
        &::-webkit-scrollbar-track {
        background: white;
        }
    }
    body{
        background-color: ${(props) => props.theme.body};
        font-family: 'Montserrat', sans-serif;
        width: 100%;
        transition: all 0.5 ease;
    }

    h1{
        color: ${(props) => props.theme.fontColor};
    }
    h2{
        font-size: 3rem;
        font-family: 'Abril Fatface',cursive;
        font-weight: lighter;
        color: ${(props) => props.theme.fontColor};
    }
    h3{
        font-size:1.3rem;
        color:#333;
        padding:1.5rem 0rem;
        color: ${(props) => props.theme.fontColor};
    }
    p{
        font-size: 1.2rem;
        line-height:200%;
        color: ${(props) => props.theme.fontColor};
        
    }
    a{
        text-decoration: none;
        color: ${(props) => props.theme.fontColor};
    }
    img{
        display:block;
    }

    .game-list{
        padding: 0rem 5rem;
        h2 {
            padding: 5rem 0rem;
        }
    }
    .games{
        min-height: 80vh;
        display:grid;
        grid-template-columns: repeat(auto-fit, minmax(500px,1fr));
        grid-column-gap: 3rem;
        grid-row-gap: 5rem;
    }
`;

export default GlobalStyles;
