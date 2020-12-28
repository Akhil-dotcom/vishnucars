import React from 'react'
import './Home.scss'
import { Button } from '@material-ui/core'
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import Stats from '../Stats/Stats';

function Home() {
    return (
        <div className="home">
            <div className="home__main">
            <div className="home__left">
                <div className="home__content">
                    <div className="home__content__head">Learn Driving at the Best, From the Best.</div>
                    <div className="home__content__body">
                        <div className='content__tick'><CheckCircleIcon className='icon' /> 100 % Pass</div>
                        <div className='content__tick'><CheckCircleIcon className='icon' /> Door-To-Door Pickup</div>
                        <div className='content__tick'><CheckCircleIcon className='icon' /> Learn on different cars</div>
                    </div>
                    <div className="home__content__button"><Button className="btn" variant='contained' color='primary'>Book your first lesson</Button></div>
                </div>
            </div>
            <div className="home__right">2</div>
            </div>
            <Stats />
        </div>
    )
}

export default Home
