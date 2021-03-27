import React from 'react'
import './Reviews.css'
import { IconButton, Avatar } from "@material-ui/core";
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const dateNow = new Date()
const date = dateNow.toDateString()

function Reviews() {

    const notPhone = useMediaQuery('(min-width: 600px)')

    return (
        <div className='reviews-container' style={{background: `url('${process.env.PUBLIC_URL}images/subtle_patterns/white-waves.png')`}}>
            <h1 className='review-title'>Our Customers</h1>

            <div className='reviews-util'>
                {notPhone && <IconButton >
                    <NavigateNextIcon className='arrow-btn prev' />
                </IconButton>} 

                <div className='reviews'>
                    <div className="two-reviews">

                        <div className="review">
                            <div className="review-header">
                                <Avatar>R</Avatar>
                                <div className="user-info">
                                    <span className='name'>Name</span>
                                    <span className='date'>{date}</span>
                                </div>
                            </div>
                            <div className="review-body">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            </div>
                        </div>
                        <div className="review">
                            <div className="review-header">
                                <Avatar>A</Avatar>
                                <div className="user-info">
                                    <span className='name'>Name</span>
                                    <span className='date'>{date}</span>
                                </div>
                            </div>
                            <div className="review-body">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            </div>
                        </div>

                    </div>

                    <div className="two-reviews">

                        <div className="review">
                            <div className="review-header">
                                <Avatar>Y</Avatar>
                                <div className="user-info">
                                    <span className='name'>Name</span>
                                    <span className='date'>{date}</span>
                                </div>
                            </div>
                            <div className="review-body">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            </div>
                        </div>
                        <div className="review">
                            <div className="review-header">
                                <Avatar>H</Avatar>
                                <div className="user-info">
                                    <span className='name'>Name</span>
                                    <span className='date'>{date}</span>
                                </div>
                            </div>
                            <div className="review-body">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            </div>
                        </div>

                    </div>
                </div>

                {notPhone && <IconButton >
                    <NavigateNextIcon className='arrow-btn'/>
                </IconButton> }
            </div>
        </div>
    )
}

export default Reviews
