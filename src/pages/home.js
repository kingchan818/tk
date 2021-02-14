import React, { useEffect, useState } from 'react';
import GameDetial from '../components/GameDetial';
import { connect, useDispatch, useSelector } from 'react-redux';
import { loadGame } from '../action/gamesAction';
import styled from 'styled-components';
import { motion, AnimatePresence, AnimateSharedLayout } from 'framer-motion';
import Game from '../components/game';
import { useLocation } from 'react-router-dom';
import SkeletonCard from '../components/SkeletonCards';

const Home = () => {
    const loaction = useLocation();
    const pathId = loaction.pathname.split('/')[2];

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadGame());
    }, [dispatch]);
    const { popular, upcoming, newGames, searched } = useSelector((state) => state.games);

    return (
        <GameList>
            <AnimateSharedLayout type="crossfade">
                <AnimatePresence>{pathId && <GameDetial pathId={pathId} />}</AnimatePresence>

                {searched.length ? (
                    <div className="searched">
                        <h2>Searched games </h2>

                        <Games>
                            {searched.map((games) => (
                                <Game
                                    name={games.name}
                                    released={games.released}
                                    id={games.id}
                                    image={games.background_image}
                                    key={games.id}
                                />
                            ))}
                        </Games>
                    </div>
                ) : (
                    ''
                )}

                <h2>Up Coming Game</h2>
                <Games>
                    {upcoming.map((games) => (
                        <Game
                            name={games.name}
                            released={games.released}
                            id={games.id}
                            image={games.background_image}
                            key={games.id}
                        />
                    ))}
                </Games>

                <h2>Popular Game</h2>

                <Games>
                    {popular.map((games) => (
                        <Game
                            name={games.name}
                            released={games.released}
                            id={games.id}
                            image={games.background_image}
                            key={games.id}
                        />
                    ))}
                </Games>

                <h2>New Games</h2>
                <Games>
                    {newGames.map((games) => (
                        <Game
                            name={games.name}
                            released={games.released}
                            id={games.id}
                            image={games.background_image}
                            key={games.id}
                        />
                    ))}
                </Games>
            </AnimateSharedLayout>
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
