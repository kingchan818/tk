import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useDispatch } from 'react-redux';
import { loadDetail } from '../action/detialAction';
import { Link } from 'react-router-dom';

const Game = ({ name, released, image, id }) => {
    const stringPathId = String(id);
    const dispatch = useDispatch();
    const loadDetialHandler = () => {
        document.body.style.overflow = 'hidden';
        dispatch(loadDetail(id));
    };

    return (
        <StyledGame layoutId={stringPathId} onClick={loadDetialHandler}>
            <Link to={`/game/${id}`}>
                <motion.h3 layoutId={`title ${stringPathId}}`}>{name}</motion.h3>
                <p>{released}</p>
                <motion.img layoutId={`image ${stringPathId}`} src={image} alt={name} />
            </Link>
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
    overflow: hidden;

    min-height: 30vh;
    box-shadow: 0px 5px 30px rgba(0, 0, 0, 0.3);
    cursor: pointer;
`;

export default Game;
