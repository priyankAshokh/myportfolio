import React, { useState } from 'react';
import "./header.scss";


const Header = (props) => {
    const headerList = ["Home", "About", "Resume", "Skills & Projects"]

    const [ currentTab, setCurrentTab] = useState("Home")
    const onClickHeaderItems = (tab) => {
        setCurrentTab(tab)
        props.scrollTo(tab)
    }

    return (
        <header className="header" id="Home">
            <nav>
                <ul>
                    {
                        headerList.map((item, idx) => {
                            return (
                                <li key={idx} className={currentTab === item ? "current" : ''}  onClick={() => onClickHeaderItems(item)}>{item}</li>
                            )
                        })
                    }
                </ul>
            </nav>
            <div className="name">
                <p className="heading">Hello <span className="myName" style={{color: "#11abb0"}}>I'm Priyanka Ashok</span></p>
                <p className="summary">I'm a Frontend Developer </p>
                <hr />
                <p style={{marginBottom: "20px"}}>HTML | CSS | Javascript | ReactJs | Redux | Material UI | SASS</p>
                <div className="sociallinks">
                <a href="www.linkedin.com/in/priyanka-ashok-05126a102" target="_blank"><img className="social-icons" src="https://img.icons8.com/external-justicon-flat-justicon/64/000000/external-linkedin-social-media-justicon-flat-justicon.png"/></a>
                <a href=""><img className="social-icons" src="https://img.icons8.com/color-glass/48/000000/github.png"/></a>
                </div>
            </div>
        </header>
    )
}

export default Header