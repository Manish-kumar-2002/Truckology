import bannerImg from "../../assets/images/banner-img.png"
const Banner = () => {
    return <>
        <section className="banner-section">
            <div className="container">
                <div className="banner-content">
                      <h1>POWERFUL FOR DEVELOPERS. FAST FOR EVERYONE.</h1>
                      <div className="btn-wrap">
                      <a href="#" className="btn">Start Building </a>
                      <a href="#" className="btn btn-secondary">Read Whitepaper</a>
                      </div>
                </div>
                <div className="banner-img">
                    <img src={bannerImg} alt="banner-img" title="banner-img"/>
                </div>
            </div>
        </section>
    </>
};
export default Banner;