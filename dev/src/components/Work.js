import React, {Component} from "react";

import Typing from 'react-typing-animation';
import WorkItem from "./WorkItem";

import './Work.scss'

export default class Work extends Component {
    constructor(props) {
        super(props);
        this.props = {
            title: '',
        };
    }

    render() {
        return (
            <div className="dp-work">
                {/*work infos*/}
                <Typing
                    speed={10}
                    cursorClassName="dp-cursor"
                >
                    <div className="dp-title">{this.props.title}</div>
                </Typing>

                <div className="dp-work-experience">
                    <div className="dp-work-experience-list">
                        {/*YOU?*/}
                        <div className="code code-js">
                            <div className="code-content">
                                <code>
                                    <span className="c-y">const </span>
                                    <span className="c-b">you? </span>
                                    = [ <br/>
                                    <span className="c-c dp-code-spacer">//contact me</span> <br/>
                                    ];
                                </code>
                            </div>
                        </div>

                        {/*Arvato Systems*/}
                        <WorkItem
                            duration="Jan 2017 - heute"
                            companyName="Arvato Bertelsman"
                            jobTitle="Advanced Frontend developer"
                        >
                            Umsetzung mit JavaScript, ReAct, SCSS,
                            CMS CoreMedia Templating
                            Umsetzung eines Living Styleguides (Patternlab.io)
                            Enge Absprachen zwischen Backend & Designern
                            Nutzung von Jira, Confluence, Scrum, Kanban
                        </WorkItem>

                        {/*C|CON*/}
                        <WorkItem
                            duration="Jan 2014 - Dez 2017"
                            companyName="C|CON GmbH"
                            jobTitle="Webdesignerin / Frontend developer"
                        >
                            Frontend Entwicklung eines Onlinesshops (Shopware),<br />
                            Verantwortlich für die Auzubildenden,<br />
                            Professionelle Bildbearbeitung für Produktpräsentationen,<br />
                            Betreuung & Kontrolle der Produktionsprozesse
                        </WorkItem>
                    </div>


                    <div className="dp-work-experience-list second-column">
                        {/*C|CON Ausbildung*/}
                        <WorkItem
                            duration="Aug 2011 - Dez 2013"
                            companyName="C|CON GmbH"
                            jobTitle="Ausbildung zur Mediengestalterin für Digital- & Printmedien"
                        >
                            Design & Realisierung von Digital- & Printmedien,<br />
                            Vertretung der Abteilungsleitung im Produktionsbereich,<br />
                            Herstellung von Wandtattoos
                        </WorkItem>

                        {/*Samir Schwenker Design & IT*/}
                        <WorkItem
                            duration="Mai 2009 - Jul 2014"
                            companyName="Samir Schwenker Design & IT"
                            jobTitle="Praktikantin & Aushilfe als Mediengestalteri"
                        >
                            Kundenbetreuung, Bildbearbeitung,<br />
                            Entwicklung von Webseiten mit HTML, CSS und JavaScript,<br />
                            Erstellung von diversen Printmedien (Logos, Visitenkarten, Broschüren, Flyer)
                        </WorkItem>
                    </div>

                </div>
            </div>
        );
    }
}
