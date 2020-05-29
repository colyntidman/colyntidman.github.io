import React, {Component} from "react";
import Typing from 'react-typing-animation';

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            target: '_blank'
        };
    }

    render() {
        return (
            <div>
                <Typing
                    speed={10}
                    cursorClassName="dp-cursor"
                    className="dp-introduction"
                >
                    <h3>Name: <strong>Colyn Tidman</strong>, <br/>
                        Age: <strong>21</strong>, <br/>
                    </h3>
                    <Typing.Delay ms={750} />
                    <h1>Back
                        <Typing.Delay ms={650} />
                        <Typing.Backspace count={4}/>
                         Full stack developper</h1>
                    <Typing.Delay ms={750} />
                    <p>Rennes <strong>(France)</strong></p>
                </Typing>

            </div>
        );
    }
}
