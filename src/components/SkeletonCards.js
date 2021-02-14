import Skeleton from 'react-loading-skeleton';
import { useSelector } from 'react-redux';
import Games from './game';
import GameList from './game';

const SkeletonCard = () => {
    return (
        <div className="gameList">
            <h2>Up Coming Game</h2>
            <div className="games">
                {Array(10)
                    .fill()
                    .map((item, index) => (
                        <div className="cards">
                            <h3 key={index}>
                                <Skeleton text-align={`center`} height={10} width={`20%`} />
                            </h3>
                            <p key={index}>
                                <Skeleton height={10} width={`20%`} />
                            </p>
                            <div className="card-img" key={index}>
                                <Skeleton height={`40vh`} width={`100%`} />
                            </div>
                        </div>
                    ))}
            </div>

            <h2>Popular Game</h2>
            <div className="games">
                {Array(10)
                    .fill()
                    .map((item, index) => (
                        <div className="cards">
                            <h3 key={index}>
                                <Skeleton height={10} width={`20%`} />
                            </h3>
                            <p key={index}>
                                <Skeleton height={10} width={`20%`} />
                            </p>
                            <div className="card-img" key={index}>
                                <Skeleton height={`40vh`} width={`100%`} />
                            </div>
                        </div>
                    ))}
            </div>

            <h2>New Games</h2>
            <div className="games">
                {Array(10)
                    .fill()
                    .map((item, index) => (
                        <div className="cards">
                            <h3 key={index}>
                                <Skeleton height={10} width={`20%`} />
                            </h3>
                            <p key={index}>
                                <Skeleton height={10} width={`20%`} />
                            </p>
                            <div className="card-img" key={index}>
                                <Skeleton height={`40vh`} width={`100%`} />
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default SkeletonCard;
