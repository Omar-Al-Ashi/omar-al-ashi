import React, {Component} from 'react';

class Resume extends Component {
    render() {

        if (this.props.data) {
            var work = this.props.data.work.map(function (work) {
                return <div key={work.company}><h3>{work.company}</h3>
                    <p className="info">{work.title}<span>&bull;</span> <em
                        className="date">{work.years}</em></p>
                    <p>{work.description}</p>
                </div>
            });

            var projects = this.props.data.projects.map(function (project) {
                return <div key={project.company}> <br/><h3>{project.company}</h3>
                    <p className="info">{project.title}</p>
                    <a href={project.androidLink} target="_blank">{project.androidLink}</a><br/>
                    <a href={project.iOSLink} target="_blank">{project.iOSLink}</a>
                </div>
            });

            var education = this.props.data.education.map(function (education) {
                return <div key={education.school}><h3>{education.school}</h3>
                    <p className="info">{education.degree}
                        <span>&bull;</span><em
                            className="date">{education.graduated}</em></p>
                    <p>{education.description}</p></div>
            });
            var technical_skills = this.props.data.skills.programming.map(function (skills) {
                var className = 'bar-expand ' + skills.name.toLowerCase();
                return <li key={skills.name}>
                    <span style={{width: skills.level}}
                          className={className}/>
                    <em>{skills.name}</em>
                </li>
            });

            var tools_skills = this.props.data.skills.tools.map(function (skills) {
                var className = 'bar-expand ' + skills.name.toLowerCase();
                return <li key={skills.name}>
                    <span style={{width: skills.level}}
                          className={className}/>
                    <em>{skills.name}</em>
                </li>
            })
        }

        return (
            <section id="resume">

                <div className="row work">
                    <div className="three columns header-col">
                        <h1><span>Work and Training</span></h1>
                    </div>

                    <div className="nine columns main-col">
                        {work}
                    </div>
                </div>

                <div className="row work">
                    <div className="three columns header-col">
                        <h1><span>projects</span></h1>
                    </div>

                    <div className="nine columns main-col">
                        {projects}
                    </div>
                </div>

                <div className="row education">
                    <div className="three columns header-col">
                        <h1><span>Education</span></h1>
                    </div>

                    <div className="nine columns main-col">
                        <div className="row item">
                            <div className="twelve columns">
                                {education}
                            </div>
                        </div>
                    </div>
                </div>


                <div className="row skill">

                    <div className="three columns header-col">
                        <h1><span>Skills</span></h1>
                    </div>

                    <div className="nine columns main-col">

                        <div className="bars">
                            <ul className="skills">
                                {technical_skills}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* <div className="row skill">

                    <div className="three columns header-col">
                        <h1><span>Frameworks, Tools & OSs</span></h1>
                    </div>

                    <div className="nine columns main-col">

                        <div className="bars">
                            <ul className="skills">
                                {tools_skills}
                            </ul>
                        </div>
                    </div>
                </div> */}
            </section>
        );
    }
}

export default Resume;
