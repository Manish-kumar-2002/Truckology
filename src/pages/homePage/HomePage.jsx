import "./HomePage.scss";
import Img01 from "../../shared/assets/images/group01.png";
import Img02 from "../../shared/assets/images/group02.png";
import SecurityImg from "../../shared/assets/images/security-img.png";
import Ecosystem from "../../shared/assets/images/map.png";
const TeamList = [
    {
        scaleImg: Img01,
        Content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempos Lorem ipsum dolor sit amet, consectetur",
    },
    {
        scaleImg: Img02,
        Content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempos Lorem ipsum dolor sit amet, consectetur",
    },
    {
        scaleImg: Img01,
        Content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempos Lorem ipsum dolor sit amet, consectetur",
    },
    {
        scaleImg: Img02,
        Content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempos Lorem ipsum dolor sit amet, consectetur",
    },
];
const Home = () => {
    return (
        <>
            <div className="scale-section">
                <div className="container">
                    <div className="scale-heading">
                        <h2>Scale</h2>
                        <h2>For Global Adoption</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod{" "}
                        </p>
                    </div>
                    <div className="scale-details">
                        {TeamList.map((item,index) => (
                            <div className="scale-content" key={index}>
                                <div className="scale-img">
                                    <img
                                        src={item.scaleImg}
                                        alt="scale-img"
                                        title="img01"
                                    />
                                </div>
                                <div className="scale-details">
                                    <p>{item.Content}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="create-account">
                <div className="container">
                    <div className="how-to-start">
                        <h2>HOW TO START?</h2>
                        <p>
                            Cryptic is easy to use and powerful to build with.
                            Every aspect of the platform was designed from the
                            ground up to support exceptional user experience at
                            mainstream scale.
                        </p>
                        <p>
                            Originally conceived by the team behind Crypto
                            Kitties, Cryptic today is a decentralized network
                            supported and built on by a growing community of
                            brands and Web3 builders
                        </p>
                    </div>
                    <div className="account">
                        <div className="details-info">
                            <div className="details">
                                <h3>Download truckology ico</h3>
                                <p>
                                    Supports multiple payment onramps and
                                    ecosystems optimized for consumer
                                    applications
                                </p>
                            </div>
                            <div className="details">
                                <h3>Creat An Account </h3>
                                <p>
                                    Supports multiple payment onramps and
                                    ecosystems optimized for consumer
                                    applications
                                </p>
                            </div>
                            <div className="details">
                                <h3>Burn Coin with Truckology</h3>
                                <p>
                                    Supports multiple payment onramps and
                                    ecosystems optimized for consumer
                                    applications
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="security-section">
                <div className="container">
                    <div className="security-details">
                        <h3>
                            Take your first step into safe, secure crypto
                            investing
                        </h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempos Lorem ipsum dolor sit
                            amet, consectetur adipiscing elit, sed do eiusmod
                            tempos
                        </p>
                        <a href="#" className="btn">
                            Get Started
                        </a>
                    </div>
                    <div className="security-img">
                        <img
                            src={SecurityImg}
                            alt="security-img"
                            title="security-img"
                        />
                    </div>
                </div>
            </div>
            <div className="ecosystem">
                <div className="container">
                    <div className="ecosystem-img">
                        <img
                            src={Ecosystem}
                            alt="security-img"
                            title="security-img"
                        />
                    </div>
                    <div className="ecosystem-details">
                        <h3>JOIN THE FASTEST GROWING ECOSYSTEM</h3>
                        <p>
                            Solana is the fastest blockchain in the world and
                            the fastest growing ecosystem in crypto, with
                            thousands of projects spanning DeFi, NFTs, Web3 and
                            more.
                        </p>
                        <div className="counter-wrap">
                            <div className="counter">
                                <strong className="total">60M+</strong>
                                <span className="sm-text">
                                    Total Transactions
                                </span>
                            </div>
                            <div className="counter">
                                <strong className="total">1500+</strong>
                                <span className="sm-text">Validator nodes</span>
                            </div>
                            <div className="counter">
                                <strong className="total">1000+</strong>
                                <span className="sm-text">Active Projects</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
           
        </>
    );
};
export default Home;
