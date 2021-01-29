import React from 'react'
import { Link } from 'react-router-dom';
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
    return (
        <div className='cards'>
            <h1>Check out our Programming Courses</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem
                        src='images/DEV.jpg'
                        text='Explore the amazing Power of programming'
                        label='WEB DEVELOPMENT'
                        path='/services'
                        />
                        <CardItem
                        src='images/training.jpg'
                        text='Learn today... Rule your world tomorrow...'
                        label='TRAINING'
                        path='/services'
                        />
                    </ul>
                    <ul className="cards__items">
                        <CardItem
                            src='videos/home.mp4'
                            text='Experience the power of web creativity'
                            label='WEB DESIGN'
                            path='/services'
                        />
                        <CardItem className='video'
                        src='images/DEV.jpg'
                        text='Explore the amazing Power of programming'
                        label='WEB DEVELOPMENT'
                        path='/services'
                        />
                        <CardItem
                        src='images/training.jpg'
                        text='Learn today... Rule your world tomorrow...'
                        label='TRAINING'
                        path='/services'
                        />
                    </ul>
                </div>
            </div>
            
        </div>
    );
}

export default Cards;
