import React from "react";
import "../styles/CardHomeProfile.css";
import photoProfile from "../images/photoProfile.png";

function CardHomeProfile({ onNavigate }) {
    return (
        <div className="profile-card">

            <div className="profile-glow"></div>

            <div className="profile-header">
              
                <span className="profile-available">

                    <span className="status-dot"></span>

                    Available for opportunities

                </span>

                <span className="profile-location">
                    Costa Rica · 2026
                </span>

            </div>

            <div className="profile-content">

                <img src={photoProfile} alt="Juan Diego Corella Camacho" className="profile-photo" onClick={() => onNavigate(1)}/>

                <div className="profile-info">

                    <p className="profile-role">
                        Full Stack Developer
                    </p>

                    <h1>
                        Juan Diego <br />
                        <span>Corella Camacho</span>
                    </h1>

                    <p className="profile-text">
                        I build modern web applications using React,
                        Django and AI technologies, focusing on clean
                        interfaces and practical solutions.
                    </p>

                    <div className="profile-skills">
                        <span>Frontend</span>
                        <span>Backend</span>
                        <span>AI & APIs</span>
                    </div>

                </div>
            </div>

            <div className="profile-footer">

                <p>React · Django · MySQL</p>

                <button type="button" className="profile-button" onClick={() => onNavigate(1)}>
                    Explore profile →
                </button>

            </div>

        </div>
    );
}

export default CardHomeProfile;