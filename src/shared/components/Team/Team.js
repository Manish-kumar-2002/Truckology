import React from "react";
import Slider from "react-slick";
import team01 from "../../assets/images/team01.png"
import team02 from "../../assets/images/team02.png"
import team03 from "../../assets/images/team03.png"
import team04 from "../../assets/images/team04.png"
import './Team.scss'

var settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 991,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 500,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        },
    ]
};
const TeamList = [
    {
        teamImg: team01,
        name:"Tom steven",
        designation: "CEO"
    },
    {
        teamImg: team02,
        name:"Tom steven",
        designation: "CEO"
    },
    {
        teamImg: team03,
        name:
            "Tom steven",
    },
    {
        teamImg: team04,
        name:
            "Tom steven",
    },
    {
        teamImg: team01,
        name:
            "Tom steven",
        designation: "CEO"
    },
    {
        teamImg: team02,
        name:
            "Tom steven",
        designation: "CEO"
    },
];
const Team = () => {
    return <>
        <section className="our-team">
            <div className="container">
                <div className="description">
                    <h3>OUR TEAM</h3>
                    <p>Driven by the leadership of each of our experts, we will transcend your image, your communication and your events.We help you shape the future of your organization.</p>
                    <Slider {...settings}>
                        {TeamList.map((item, index) => (
                            <div className="team-wrap" key={index}>
                                <div className="team-img">
                                    <img src={item.teamImg} alt="img" title="team-img" />
                                    <div className="team-description">
                                        <div className="team-info">
                                            <div className="name">{item.name}</div>
                                            <div className="designation">
                                                {item.designation}
                                            </div>
                                        </div>
                                        <div className="social-icons">
                                            <a href="#" className="icon-wrap">
                                                <i className="icon-fb">
                                                </i>
                                            </a>
                                            <a href="#" className="icon-wrap">
                                                <i className="icon-twitter"></i>
                                            </a>
                                            <a href="#" className="icon-wrap">
                                                <i className="icon-insta"></i>
                                            </a>
                                            <a href="#" className="icon-wrap">
                                                <i className="icon-google"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </section>
    </>
};
export default Team;