import React from 'react'

import '../../icons/verified_user.png'

import './style.css'

const Card = ({
    header,
    subText,
    time
}) => {
    return (
        <div className='card-container'>
            <div className='content-wrapper'>
                <div className='content'>
                    <h3 className='header'>{header}</h3>
                    <span className='sub-text'>{subText}</span>
                    <span className='time'>{time}</span>
                </div>
            </div>
            <div className='icon-wrapper'>
                <div className='icon-container'>
                    icn
                </div>
            </div>
        </div>
    )
}

export default Card