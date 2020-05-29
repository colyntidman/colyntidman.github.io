import React, {Component} from "react";

import Typing from 'react-typing-animation';
import BucketListItem from "./BucketListItem";

export default class BucketList extends Component {
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

               <BucketListItem />

            </div>
        );
    }
}
