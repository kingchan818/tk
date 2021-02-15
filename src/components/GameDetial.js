import { motion } from 'framer-motion';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

//icon Img
import playstation from '../imgs/playstation.svg';
import steam from '../imgs/steam.svg';
import xbox from '../imgs/xbox.svg';
import apple from '../imgs/apple.svg';
import nintendo from '../imgs/nintendo.svg';
import gamepad from '../imgs/gamepad.svg';

//start Img
import starEmpty from '../imgs/starempty.png';
import starFull from '../imgs/starfull.png';

const GameDetial = ({ pathId }) => {
    const history = useHistory();

    const exitDetialHander = (e) => {
        const element = e.target;
        if (element.classList.contains('shawdo')) {
            document.body.style.overflow = 'auto';
            history.push('/');
        }
    };

    const getplatform = (platform) => {
        switch (platform) {
            case 'PlayStation 4':
                return playstation;
            case 'Steam':
                return steam;
            case 'Xbox One':
                return xbox;
            case 'PlayStation 5':
                return playstation;
            case 'PC':
                return steam;
            case 'Nintendo Switch':
                return nintendo;
            case 'IOS':
                return apple;
            case 'XBOX SERIES X':
                return xbox;
        }
    };

    const starRating = (rating) => {
        const stars = [];
        const floorRating = Math.floor(rating);
        for (let i = 0; i <= 4; i++) {
            if (i < floorRating) {
                stars.push(<img alt="star" key={i} src={starFull} />);
            } else {
                stars.push(<img alt="star" key={i} src={starEmpty} />);
            }
        }
        return stars;
    };

    const { screen, game, isLoading } = useSelector((state) => state.detial);
    return (
        <>
            {!isLoading && (
                <CardShawdo className="shawdo" onClick={exitDetialHander}>
                    <Detial layoutId={pathId}>
                        <Stats>
                            <div className="rating">
                                <motion.h3 layoutId={`title ${pathId}`}>{game.name}</motion.h3>
                                <p>Rating:{game.rating}</p>
                                {starRating(game.rating)}
                            </div>
                            <Info>
                                <h3>Platforms</h3>
                                <Platforms>
                                    {game.platforms.map((data) => (
                                        <img key={data.platform.id} src={getplatform(data.platform.name)} alt="" />
                                    ))}
                                </Platforms>
                            </Info>
                        </Stats>
                        <Media>
                            <motion.img layoutId={`image ${pathId}`} src={game.background_image} alt="" />
                        </Media>
                        <Description>
                            <p>{game.description_raw}</p>
                        </Description>
                        <div className="gallery">
                            {screen.results.map((screen) => (
                                <img src={screen.image} key={screen.id} alt="" />
                            ))}
                        </div>
                    </Detial>
                </CardShawdo>
            )}
        </>
    );
};

const CardShawdo = styled(motion.div)`
    width: 100%;
    min-height: 100vh;
    overflow-y: scroll;
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    left: 0;
    &::-webkit-scrollbar {
        width: 0.5rem;
    }
    &::-webkit-scrollbar-thumb {
        background-color: #ff7676;
    }
    &::-webkit-scrollbar-track {
        background: white;
    }
`;

const Detial = styled(motion.div)`
    width: 80%;
    border-radius: 1rem;
    padding: 2rem 20rem;
    background: ${(props) => props.theme.body};
    position: absolute;
    left: 10%;
    color: black;
    z-index: 10;
    img {
        width: 100%;
    }
`;

const Stats = styled(motion.div)`
    display: flex;
    align-items: center;
    justify-content: space-between;
    img {
        width: 2rem;
        height: 2rem;
        display: inline;
    }
`;

const Info = styled(motion.div)`
    text-align: center;
`;

const Platforms = styled(motion.div)`
    display: flex;
    justify-content: space-evenly;
    img {
        margin-left: 3rem;
    }
`;

const Media = styled(motion.div)`
    margin-top: 5rem;
    img {
        width: 100%;
        height: 60vh;
        object-fit: cover;
    }
`;

const Description = styled(motion.div)`
    margin: 5rem 0rem;
`;

export default GameDetial;
