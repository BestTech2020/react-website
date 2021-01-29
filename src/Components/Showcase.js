import React from 'react';
import '../App.css';
// import { Link } from 'react-router-dom';
import { Button } from './Button';
import './Showcase.css';
// import { AiFillPlayCircle } from 'react-icons/fa';



function Showcase() {
    return (
        <div className='showcase-container'>
            <video src='/videos/home.mp4' autoPlay loop muted />
            <h1>Welcome to BestTech</h1>
            <p>we design and develop website for personal or corporate purposes</p>
            <div className='showcase-btns'>
                <Button className='btn' buttonStyle='btn--outline' buttonSize='btn--large'>
                    Get Started
                </Button>
                <Button className='btn2' buttonStyle='btn--outline' buttonSize='btn--large'>
                    WATCH TRAILER <i className="fa AiFillPlayCircle" />
                    
                </Button>
            </div>
        </div>
    );
}

export default Showcase;

