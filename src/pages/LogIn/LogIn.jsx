import "./LogIn.scss";

const LogIn = ({setShow}) => {
    const popupClass = () => {
        setShow(false);
        
    };
    return (
        <>
            <div class={"popup-section"}>
                <div class="container-field">
                    <label for="show" class="close-btn" title="close"onClick={popupClass}></label>
                    <div class="title">Sign in Form</div>
                    <form action="#">
                        <div class="data">
                            <label>Email or Phone</label>
                            <input type="text" required />
                        </div>
                        <div class="data">
                            <label>Password</label>
                            <input type="password" required />
                        </div>
                        <div class="forgot-pass">
                            <a href="#">Forgot Password?</a>
                        </div>
                        <div class="btn">
                            <div class="inner"></div>
                            <button type="submit">login</button>
                        </div>
                        <div class="signup-link">
                            Not a member? <a href="#">Sign Up Now</a>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};
export default LogIn;
