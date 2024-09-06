import React from "react";
import Slider from "react-slick";
import user from "../../assets/images/user.png"
import './Community.scss'
const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
};
const CommunityList = [
    {

        ClientImg: user,
        Content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempos Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempos",
        designation: " -Dake M. Chile. Bussiness Owner of Bellie"
    },
    {
        ClientImg: user,
        Content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempos Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempos",
        designation: " -Dake M. Chile. Bussiness Owner of Bellie"
    },
];
const Community = () => {
    return <>
        <section className="our-community">
            <div className="container">
                <div className="description">
                    <h3>Our Community with User reviews</h3>
                    <Slider {...settings}>
                        {CommunityList.map((item, index) => (
                            <div className="review-wrap" key={index}>
                                <div className="user-img">
                                    <img src={item.ClientImg} alt="user-img" title="user" />
                                </div>
                                <div className="review">
                                    <i className="icon-quotes"></i>
                                    <q className="quotes">
                                        {item.Content}
                                    </q>
                                    <h5>
                                        {item.designation}
                                    </h5>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </section>
    </>
};
export default Community;