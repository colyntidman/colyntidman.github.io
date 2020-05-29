import React, {Component} from "react";

import Typing from 'react-typing-animation';
import ProjectList from "./ProjectList";

export default class Projects extends Component {
    constructor(props) {
        super(props);
        this.props = {
            title: '',
        };
    }

    render() {
        return (
            <div className="dp-projects-page">
                <Typing
                    speed={10}
                    cursorClassName="dp-cursor"
                >
                    <div className="dp-title">{this.props.title}</div>
                </Typing>

               <ProjectList />

            </div>
        );
    }
}
