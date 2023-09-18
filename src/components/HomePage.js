import React, { useState } from 'react';
import './HomePage.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShare, faBell, faFolder, faUsers, faBuilding, faMobileAlt, faFile, faSignOutAlt, faCog } from '@fortawesome/free-solid-svg-icons';
import avatar from '/Users/tehillahaddy/rsuite/src/images/avatar-profile-icon_188544-4755.jpg.webp';
import { faSearch } from '@fortawesome/free-solid-svg-icons';


const HomePage = () => {

    const [showSettings, setShowSettings] = useState(false);

    const toggleSettings = () => {
        setShowSettings(!showSettings);
    };



    const surveys = [
        {
            id: 1,
            projectName: 'Customer Satisfaction Survey',
            dateCreated: '2023-07-20',
            numQuestions: 10,
            numResponses: 50,
            completionPercentage: 70,
        },
        {
            id: 2,
            projectName: 'Employee Engagement Survey',
            dateCreated: "2023-07-21",
            numQuestions: 8,
            numResponses: 80,
            completionPercentage: 90,
        },
        {
            id: 3,
            projectName: 'Product Feedback Survey',
            dateCreated: "2023-08-22",
            numQuestions: 4,
            numResponses: 40,
            completionPercentage: 30,
        },
        {
            id: 4,
            projectName: 'Market Research Survey',
            dateCreated: "2023-08-22",
            numQuestions: 5,
            numResponses: 20,
            completionPercentage: 20,
        },
    ];

    return (
        <div className="homepage">
            <div className="top-left-corner">
                <h1>SurveyAce</h1>
            </div>
            <div className="top-corner">
                <h1>Projects</h1>
            </div>




            <div className="Share">
                <h1>Share</h1>
                <FontAwesomeIcon icon={faShare} className="share-icon" />
                <FontAwesomeIcon icon={faBell} className="notification-icon" />
            </div>
            <div className="user-profile">
                <img src={avatar} alt="Profile" className="profile-picture" />
                <span className="username">John Doe</span>
            </div>

            {/* Settings Icon */}
            <div className="settings-icon" onClick={toggleSettings}>
                <FontAwesomeIcon icon={faCog} className="settings-icon" />
            </div>

            {/* Settings Menu */}
            {showSettings && (
                <div className="settings-menu">
                    <ul>
                        <li><button>Profile</button></li>
                        <li><button>Account Settings</button></li>
                        <li><button>Privacy</button></li>
                        <li><button>Notifications</button></li>
                        <li><button>Help</button></li>
                    </ul>
                </div>
            )}

            

            <div className="survey-details-bar">
                {surveys.map(survey => (
                    <div className="survey-card" key={survey.id}>
                        <h3>{survey.projectName}</h3>
                        <div className="survey-info">
                            <p>Date: {survey.dateCreated}</p>
                            <p>Questions: {survey.numQuestions}</p>
                            <p>Responses: {survey.numResponses}</p>
                            <p>Completion: {survey.completionPercentage}%</p>
                        </div>
                    </div>
                ))}
            </div>


            <div className="left-section">

                <div className="menu-item">
                    <FontAwesomeIcon icon={faFolder} className="menu-icon" />
                    <span className='menu-text'>Projects</span>
                </div>

                <Link to="/newproject">
                    <div className="menu-item">
                        <FontAwesomeIcon icon={faFile} className="menu-icon" />
                        <span className='menu-text'>New Project</span>
                    </div>
                </Link>
                <Link to="/survey-templates">
                    <div className="menu-item">
                        <FontAwesomeIcon icon={faUsers} className="menu-icon" />
                        <span className='menu-text'>Sample Templates</span>
                    </div>
                </Link>
                <Link to="/organisations">
                    <div className="menu-item">
                        <FontAwesomeIcon icon={faBuilding} className="menu-icon" />
                        <span className='menu-text'>Organisations</span>
                    </div>
                </Link>
                <Link to="/ussd">
                    <div className="menu-item">
                        <FontAwesomeIcon icon={faMobileAlt} className="menu-icon" />
                        <span className='menu-text'>USSD</span>
                    </div>
                </Link>
                <Link to="/responses">
                    <div className="menu-item">
                        <FontAwesomeIcon icon={faFile} className="menu-icon" />
                        <span className='menu-text'>Response Analysis</span>
                    </div>
                </Link>
                <Link to="/">
                    <div className="menu-item logout">
                        <FontAwesomeIcon icon={faSignOutAlt} className="menu-icon logout-icon" />
                        <span className="menu-text">Logout</span>
                    </div>
                </Link>
            </div>
            <div className="search-bar">
            
                <input type="text" placeholder="Search Projects..." className="search-input" />
                <FontAwesomeIcon icon={faSearch} className="search-icon" />
              
            </div>



            <Link to="/create-survey" className="creat-survey-button">
                Create Survey
            </Link>


            <div className="horizontal-line"></div>
            <div className="horizontal-linee"></div>
            <div className="vertical-line-sideways"></div>
        </div>

    );
};

export default HomePage;
