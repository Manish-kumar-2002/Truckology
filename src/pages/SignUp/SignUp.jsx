import "./SignUp.scss";

const LogIn = ({setMenu}) => {
    const popClass = () => {
        setMenu(false);
    };
    return (
        <>
            <div class={"popup-section"}>
                <div class="container-field">
                    <label
                        for="show"
                        class="close-btn "
                        title="close"
                        onClick={popClass}
                    ></label>
                    <div class="title">Sign up Form</div>
                    <form action="#">
                        <div class="data">
                            <label>Email </label>
                            <input type="text" required />
                        </div>
                        <div class="data">
                            <label>Create Password</label>
                            <input type="password" required />
                        </div>
                        <div class="data">
                            <label>Confirm Password</label>
                            <input type="password" required />
                        </div>
                      
                        <div class="btn">
                            <div class="inner"></div>
                            <button type="submit">SignUp</button>
                        </div>
                        <div class="signup-link">
                            Not a member? <a href="#">Sign In now</a>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};
export default LogIn;
