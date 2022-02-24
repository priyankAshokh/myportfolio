import React, { useState } from 'react';
import "./education.scss";


const Education = () => {

    return (
        <section id="Resume" className="Resume">
            <div>
            <div className="wrapper">
                <div className="education">
                    <h3><span>EDUCATION</span></h3>
                </div>
                <div className="edu-info">
                    <div>
                        <h2>MSRIT</h2>
                        <p><i>VSLI design & Embedded Systems- 2017</i></p>
                    </div>
                    <div>
                        <h2>P.D.A College of Engineering </h2>
                        <p><i>Electronics and Communication Engineering - 2015</i></p>
                    </div>
                </div>
            </div>

            <div className="wrapper">
                <div className="education">
                    <h3><span>EXPERIENCE</span></h3>
                </div>
                <div className="edu-info">
                    <div>
                        <h2>Giveindia</h2>
                        <p style={{fontWeight: "600"}}><i>Software Developement Engineer • June-2020 - present</i></p>
                        <p><ul>
                            <li>Created Missions Pages from scratch in subscriptions platform.</li>
                            <li>Created around 50+ microsites for covid.giveindia.org platform which were highly customizable with
                                components laid out on requirements.</li>
                            <li>Google Analytics & Amplitude Implementation across Repos.</li>
                            <li>Creating Google sheet Dashboard for Partnership team to track the events data.</li>
                            <li>Created Single user profile page for subscription platform , Give India Homepage and Fundraisers homepage.</li>
                            <li>Collaborating closely with the team to support projects during all phases of delivery.</li>
                            <li>Worked in an agile environment with weekly stand-ups, sprint planning per week, kickoffs with the team before
                                feature implementation.</li>
                        </ul></p>
                    </div>
                    <div>
                        <h2>Quintype Technolgies Pvt Ltd</h2>
                        <p style={{fontWeight: "600"}}><i>Frontend Developer • Dec-2018 - June-2020</i></p>
                        <p> <ul>
                            <li>Worked for publishers like The Quint, AFAQs, SMEAdvisor, FPJ.</li>
                            <li>Fixed various bugs occurring in the staging and production environment.</li>
                            <li>Worked on complete UI revamp of Quintype website using react hooks, styled-components and HTML/CSS. </li>
                            <li>Handled the deployment of the site using a Quintype deployment tool
                                Blacknight.</li>
                            <li>Implemented Migration Data Validator for Quintype publishers. </li>
                            <li>Quintype CMS - Bold Platform : CSS Modules Project which involved
                                converting the Quintype CMS (BOLD) components to CSS- Modules</li>
                        </ul></p>
                    </div>
                </div>
            </div>
            </div>
        </section>
    )
}

export default Education
