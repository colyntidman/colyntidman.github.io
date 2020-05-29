import React, {Component, PropTypes} from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faAngleDown, faSocks, faMailBulk, faEnvelope} from '@fortawesome/free-solid-svg-icons';

export default class Motivation extends Component {
    static propTypes = {};

    render() {
        return (
            <div>
                <div className="row">
                    <div className=" about-content animated fadeIn scrollable" >
                        <h1 className="animated fadeIn one">about</h1>
                        <div className="about-me">
                            <div className="animated fadeIn two">
                                <p>Is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, of type and scrambled it to make a type specimen book. But also the leap into electronic typesetting, remaining essentially unchanged.</p>
                                <p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                            </div>
                            <div className="Synopsis-highlightLine five" ></div>
                            <div className="animated fadeIn three">
                                <p className="Synopsis-highlight">Cinnamon eu so, cultivar sweet crema java blue mountain iced cappuccino acerbic flavour. Con panna, dark coffee coffee crema cortado, carajillo sugar wings robust coffee. Spoon, iced organic, medium, acerbic dripper pumpkin spice robust black single origin. Qui americano coffee milk lungo crema dripper. Grinder plunger pot est percolator medium shop latte foam crema café au lait wings.</p>
                            </div>
                            <div className="Synopsis-highlightLine five"></div>
                            <div className="animated fadeIn four">
                                <p>Is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, of type and scrambled it to make a type specimen book. But also the leap into electronic typesetting, remaining essentially unchanged.</p>
                                <p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                                <p>Is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, of type and scrambled it to make a type specimen book. But also the leap into electronic typesetting, remaining essentially unchanged.</p>
                                <p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                                <p>Is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, of type and scrambled it to make a type specimen book. But also the leap into electronic typesetting, remaining essentially unchanged.</p>
                                <p>It has survived not only five centuries, but also the leap into electronic.</p>
                            </div>
                        </div>
                    </div>
                    <div className="about-panel-wrapper">
                        <div className=" about-panel animated fadeIn">
                            <div className="perspective-container">
                                <div className="zero photo-about animated fadeIn">
                                    <div className="hide-photo-filter animated fadeIn"></div>
                                    <div className="about-info">
                                        <h3 className="about-info-name animated fadeInUp up-one">ANUSUYA CODEPEN</h3>
                                        <div className="about-info-contact">
                                            <h4 className="animated fadeInUp up-two"> Front End Developer, Ocassional Seamstress, Dance Lover</h4>
                                            <p className="animated fadeInUp up-three">4456 New Avenue, New York City, NY</p>
                                            <a href="" className="animated fadeInUp up-four">jlaprs@myemail.com</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
