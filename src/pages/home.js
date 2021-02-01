import React, { useEffect } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { loadGame } from '../action/gamesAction';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Game from '../components/game';

const Home = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadGame());
    }, [dispatch]);

    const { popular, upcoming, newGames } = useSelector((state) => state.games);

    return (
        <GameList>
            <h2>Up Coming Game</h2>
            <Games>
                {upcoming.map((games) => (
                    <Game name={games.name} released={games.released} id={games.id} image={games.background_image} />
                ))}
            </Games>

            <h2>Popular Game</h2>
            <Games>
                {popular.map((games) => (
                    <Game name={games.name} released={games.released} id={games.id} image={games.background_image} />
                ))}
            </Games>

            <h2>New Games</h2>
            <Games>
                {newGames.map((games) => (
                    <Game name={games.name} released={games.released} id={games.id} image={games.background_image} />
                ))}
            </Games>
        </GameList>
    );
};

const GameList = styled(motion.div)`
    padding: 0rem 5rem;

    h2 {
        padding: 5rem 0rem;
    }
`;

const Games = styled(motion.div)`
    min-height: 80vh;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
    grid-column-gap: 3rem;
    grid-row-gap: 5rem;
`;

export default Home;
