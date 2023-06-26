import React from 'react';
import './NewProjectPage.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShare, faBell, faFolder, faUsers, faBuilding, faMobileAlt, faFile, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import avatar from '/Users/tehillahaddy/rsuite/src/images/avatar-profile-icon_188544-4755.jpg.webp';

const NewProjectPage = () => {
    return (
        <div className='newprojectpage'>
            <div className="body">
                <div className="title-container">
                    <input type="text" className="title-input" placeholder=" " />
                    <label className="title-label">Title:</label>
                </div>
                <div className="title-container">
                    <input type="text" className="title-input" placeholder=" " />
                    <label className="title-label">Project ID:</label>
                </div>
            </div>
            <div className="top-left-corner">
                <Link to=""> </Link>
                <h1>SurveyAce</h1>
            </div>

            <div className="top-c">
                <Link to="/newproject">
                    <h1>New Project</h1>
                </Link>
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
            <div className="left-section">
                <Link to="/home">
                    <div className="menu-item">
                        <FontAwesomeIcon icon={faFolder} className="menu-icon" />
                        <span className='menu-text'>Projects</span>
                    </div>
                </Link>
                <Link to="/newproject">
                    <div className="menu-item">
                        <FontAwesomeIcon icon={faFile} className="menu-icon" />
                        <span className='menu-text'>New Project</span>
                    </div>
                </Link>
                <Link to="/teams">
                    <div className="menu-item">
                        <FontAwesomeIcon icon={faUsers} className="menu-icon" />
                        <span className='menu-text'>Teams</span>
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
                <Link to="/resources">
                    <div className="menu-item">
                        <FontAwesomeIcon icon={faFile} className="menu-icon" />
                        <span className='menu-text'>Resource Files</span>
                    </div>
                </Link>
                <Link to="/">
                    <div className="menu-item logout">
                        <FontAwesomeIcon icon={faSignOutAlt} className="menu-icon logout-icon" />
                        <span className="menu-text">Logout</span>
                    </div>
                </Link>
            </div>

            <div className="horizontal-line"></div>
            <div className="horizontal-linee"></div>
            <div className="vertical-line-sideways"></div>
        </div>

    );

};

export default NewProjectPage;
