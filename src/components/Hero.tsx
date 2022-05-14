import React from 'react';
import Hero1 from "../images/Young.jpg";
import Hero2 from "../images/TheButcher.jpg";
import Hero3 from "../images/TheMemory.jpg";
import Hero4 from "../images/Nona.jpg";
import Hero5 from "../images/TheSeven.jpg";
import '../styles/Hero.css';
import { Link } from 'react-router-dom';


const Hero = () => {
    return (
        <React.Fragment>
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel" style={{marginTop:"30px"}}>
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"
                        style={
                            {color: "#a175ff"}
                    }></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"
                        style={
                            {color: "#a175ff"}
                    }></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"
                        style={
                            {color: "#a175ff"}
                    }></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="3"
                        style={
                            {color: "#a175ff"}
                    }></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="4"
                        style={
                            {color: "#a175ff"}
                    }></li>
                    
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <Link to="/25"><img className="d-block w-100"
                                src={Hero1}
                                alt="1"/></Link>
                    </div>
                    <div className="carousel-item">
                        <Link to="/1"><img className="d-block w-100"
                                src={Hero2}
                                alt="2"/></Link>
                    </div>
                    <div className="carousel-item">
                        <Link to="/13"><img className="d-block w-100"
                                src={Hero3}
                                alt="3"/></Link>
                    </div>
                    <div className="carousel-item">
                        <Link to="/8">
                            <img className="d-block w-100"
                                src={Hero4}
                                alt="4"/></Link>

                    </div>
                    <div className="carousel-item">
                        <Link to="/15"><img className="d-block w-100"
                                src={Hero5}
                                alt="5"/></Link>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        </React.Fragment>
    );
}

export default Hero;
