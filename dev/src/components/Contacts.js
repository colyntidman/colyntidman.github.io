import React, {Component} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            target: '_blank'
        };
    }

    render() {
        return (
            <div className="dp-contact">
                <ul className="dp-contacts">
                    <li>
                        <a href="https://www.linkedin.com/in/colyntidman/" target={this.state.target}>
                            <FontAwesomeIcon icon={['fab', 'linkedin']} />
                        </a>
                    </li>
                </ul>
            </div>
        );
    }
}
