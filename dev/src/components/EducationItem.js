import React, {Component} from "react";

export default class EducationItem extends Component {
    constructor(props) {
        super(props);
        this.props = {
            duration: '',
            school: '',
            schoolName: '',
            graduation: '',
            jobTitle: '',
            subject: ''
        };
    }

    render() {
        return (
            <div className="dp-education-item">
                <p className="line-1">
                    <span className="c-y braclet-open">.{this.props.duration} </span>
                </p>

                <p className="line-2">
                    <span className="c-p">School</span>
                    <span>:</span>
                    <span className="c-g"> {this.props.schoolName}</span>
                    <span>;</span>
                </p>

                <p className="line-2">
                    <span className="c-p">Graduation</span>
                    <span>:</span>
                    <span className="c-g"> {this.props.graduation}</span>
                    <span>;</span>
                </p>

                <p className="line-3">
                    <span className="c-o">&.subject</span>
                    <span>:</span>
                    <span className="c-g"> {this.props.subject}</span>
                    <span>;</span>
                </p>

                <span className="braclet-close" />
            </div>
        );
    }
}
