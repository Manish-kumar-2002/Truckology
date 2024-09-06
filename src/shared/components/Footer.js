const Footer = () => {

    return <>
        <footer className="footer-section">
            <div className="container">
                <h4>STAY INFORMED AND NEVER MISS AN CRYPTECK UPDATE!</h4>
                <div className="form-wrapper">
                    <form>
                        <div className="sm-text">Unsubscribe at any time. Privacy policy↗</div>
                        <div className="field-wrap">
                        <input type="email" className="email-field" placeholder="Email Address"></input>
                        <a href="#" className="arrow-icon"> <i className="icon-arrow"></i></a>
                       
                        </div>
                        <button type="submit" className="btn">submit</button>
                    </form>
                </div>

            </div>
        </footer>
    </>
};
export default Footer;
