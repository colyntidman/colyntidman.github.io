import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class ProjectList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            target: '_blank',
            list: [
                {
                    id: '1',
                    title:'Typing with Glitch Effect',
                    link: 'https://github.com/JlaPrs/glitch-text-effect',
                    platform: 'github',
                    text: {
                        title: 'Glitch Effect',
                        shortDescription: 'Typing with a fancy Glitch Effect'
                    }
                },
                {
                    id: '2',
                    title:'Hover effekt on arrow button',
                    link: 'https://codepen.io/jlaprs/pen/bZBWWp',
                    platform: 'codepen',
                    text: {
                        title: 'Hover effect',
                        shortDescription: 'SCSS hover on Arrow Button / ONLY CSS'
                    }
                },
                {
                    id: '3',
                    title:'React counter Basics',
                    link: 'https://codepen.io/jlaprs/pen/eXBKrV',
                    platform: 'codepen',
                    text: {
                        title: 'ReAct Counter',
                        shortDescription: 'ReAct basics - counter with reset button'
                    }
                },
                {
                    id: '3',
                    title:'Titel',
                    link: 'https://github.com/JlaPrs/draggable-ToDo-react-app',
                    platform: 'github',
                    text: {
                        title: 'ToDo list',
                        shortDescription: 'Simple react app with an input  / shopping list'
                    }
                },
            ]
        };
    }

    render() {

        return (
            <div className="dp-projects">
                {this.state.list.map(item => (
                    <div key={item.id} className={"dp-projects-list-item"} >

                        <a href={item.link} target={this.state.target} className="dp-projects-list-item-link">
                            <div className="dp-projects-list-item-text">
                                <div className="dp-projects-list-item-icon">
                                    {item.platform  === 'github' ? <FontAwesomeIcon icon={['fab', 'github']}/> : <FontAwesomeIcon icon={['fab', `${item.platform}`]}/>}
                                </div>

                                <div>
                                    <a href={item.link} target={this.state.target} className="dp-projects-list-item-link">{item.text.title}</a>
                                    <p>{item.text.shortDescription}</p>
                                </div>
                            </div>
                        </a>


                    </div>
                ))}
            </div>
        );
    }
}
