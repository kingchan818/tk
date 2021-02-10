import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useDispatch } from 'react-redux';
import { loadDetail } from '../action/detialAction';

const Game = ({ name, released, image, id }) => {
    const dispatch = useDispatch();

    const loadDetialHandler = () => {
        dispatch(loadDetail(id));
    };

    return (
        <StyledGame onClick={loadDetialHandler}>
            <h3>{name}</h3>
            <p>{released}</p>
            <img src={image} alt={name} />
        </StyledGame>
    );
};

const StyledGame = styled(motion.div)`
    img {
        width: 100%;
        height: 40vh;
        object-fit: cover;
    }
    text-align: center;
    border-radius: 1rem;

    min-height: 30vh;
    box-shadow: 0px 5px 30px rgba(0, 0, 0, 0.3);
`;

export default Game;
