import React, { useState } from 'react';

import styled from 'styled-components';
import { motion } from 'framer-motion';
import logo from '../imgs/logo.svg';

import { fetchSearch } from '../action/gamesAction';
import { useDispatch } from 'react-redux';

const Nav = () => {
    const dispatch = useDispatch();
    const [textInput, setTextInput] = useState('');

    const inputHandler = (e) => {
        setTextInput(e.target.value);
    };

    const searchSubmit = (e) => {
        e.preventDefault();
        dispatch(fetchSearch(textInput));
        setTextInput('');
    };

    const clearSearch = () => {
        dispatch({ type: 'clearSearch' });
    };

    return (
        <StyledNav>
            <Logo onClick={clearSearch}>
                <img src={logo} alt="logo" />
                <h1>Tk</h1>
            </Logo>
            <form className="search">
                <input value={textInput} onChange={inputHandler} type="text" />
                <button onClick={searchSubmit} type="submit">
                    Search
                </button>
            </form>
        </StyledNav>
    );
};

const StyledNav = styled(motion.nav)`
    padding: 3rem 5rem;
    text-align: center;
    input {
        width: 30%;
        font-size: 1.5rem;
        padding: 0.5rem;
        border: none;
        margin-top: 1rem;
        box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.2);
        outline: none;
        font-family: 'Montserrat', sans-serif;
    }

    button {
        font-size: 1.5rem;
        border: none;
        padding: 0.5rem 2rem;
        cursor: pointer;
        background: #ff7676;
        color: white;
        font-family: 'Montserrat', sans-serif;
        box-shadow: 0px 0px 30px rgba(255, 118, 118 0.4);
        outline: none;
    }
`;

const Logo = styled(motion.div)`
    display: flex;
    justify-content: center;
    padding: 1rem;
    cursor: pointer;
    img {
        height: 2rem;
        width: 2rem;
    }
`;

export default Nav;
