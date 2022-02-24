import React, { useState } from 'react';
import "./skills.scss";


const Skills = () => {

    return (
        <section className="skills" id="Skills & Projects">
            <div className="skills-container">
                <div className="skills-wrapper">
                    <div className="skills-title">
                        <h3><span>SKILLS</span></h3>
                    </div>
                    <div className="skills-list">
                        <img src="https://img.icons8.com/color/48/000000/git.png" title="git" />
                        <img src="https://img.icons8.com/ultraviolet/40/000000/react--v1.png" title="react" />
                        <img src="https://img.icons8.com/color/48/000000/sass.png" title="sass" />
                        <img src="https://img.icons8.com/color/48/000000/css3.png" title="css" />
                        <img src="https://img.icons8.com/color/48/000000/html-5--v1.png" title="html" />
                        <img src="https://img.icons8.com/color/48/000000/javascript--v1.png" title="js" />
                        <img src="https://img.icons8.com/ios-filled/50/000000/github.png" title="github" />
                    </div>
                </div>

                <div className="projects">
                    <div className="skills-title">
                        <h3><span>PERSONAL PROJECTS</span></h3>
                    </div>
                    <div className="edu-info">
                        <div>
                            <h2>Todo List App</h2>
                            <p className="demo"><i>https://relaxed-rosalind-4635f4.netlify.app/</i></p>
                        </div>
                        <div>
                            <h2>Calculator App</h2>
                            <p className="demo"><i>https://github.com/Priyanka-ashok/Calculator-React</i></p>
                        </div>
                        <div>
                            <h2>Simple Video Player Ap</h2>
                            <p className="demo"><i>https://determined-johnson-106d95.netlify.app/</i></p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills
