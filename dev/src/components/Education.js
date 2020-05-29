import React, {Component} from "react";

import Typing from 'react-typing-animation';
import EducationItem from "./EducationItem";

export default class Education extends Component {
    constructor(props) {
        super(props);
        this.props = {
            schoolSkills: '',
            technicalSkills: ''
        };
    }

    render() {
        return (
            <div className="dp-section-education">

                {/* Education */}
                <div className="dp-school">
                    <Typing
                        speed={10}
                        cursorClassName="dp-cursor"
                    >
                        <div className="dp-title"> {this.props.schoolSkills}</div>
                    </Typing>

                    <div className="code code-css dp-work-experience-list">
                        <div className="code-content">
                            <code>
                                <EducationItem
                                    duration="2016-2018"
                                    school="IUT Laval"
                                    schoolName="IUT Laval"
                                    graduation="Associate's degree"
                                    subject="Global developpement"
                                />

                                <EducationItem
                                    duration="2018-2019"
                                    school="My Digital School"
                                    schoolName="My Digital School"
                                    graduation="Undergraduate"
                                    subject="Web and mobile developpement"
                                />

                                <EducationItem
                                    duration="2019-2021"
                                    school="My Digital School"
                                    schoolName="My Digital School"
                                    graduation="Graduate studies"
                                    subject="Web and mobile developpement"
                                />

                            </code>
                        </div>
                    </div>
                </div>

                {/*Technical Skills*/}
                <div className="dp-technical-skills">
                    <Typing
                        speed={10}
                        cursorClassName="dp-cursor"
                        startDelay={1500}
                    >
                        <div className="dp-title">{this.props.technicalSkills}</div>
                    </Typing>

                    <div className="code code-js dp-technical-skills-list">
                        <div className="code-content">
                            <code>
                                <span className="c-y">const </span><span className="c-b">.NET</span> = [<span className="c-g">“ASP.NET”</span>, <span className="c-g">“ASP.NET CORE”</span>, <span className="c-g">“Xamarin”</span>, <span className="c-g">“Unity”</span>];<br/>
                                <span className="c-y">const </span><span className="c-b">javascript</span> = [<span className="c-g">“typescript”</span>, <span className="c-g">“reactJS”</span>];<br/>
                                <span className="c-y">const </span><span className="c-b">css</span> = [<span className="c-g">“Sass”</span>, <span className="c-g">“Less”</span>];<br/>
                                <span className="c-y">const </span><span className="c-b">Server</span> = [<span className="c-g">“IIS”</span>, <span className="c-g">“Apache”</span>, <span className="c-g">“Nginx”</span>];<br/>
                                <span className="c-y">const </span><span className="c-b">Adobe</span> = [<span className="c-g">“Photoshop”</span>, <span className="c-g">“Adobe XD”</span>, <span className="c-g">“Illustrator”</span>, <span className="c-g">“Premiere”</span>];<br/>
                            </code>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}
