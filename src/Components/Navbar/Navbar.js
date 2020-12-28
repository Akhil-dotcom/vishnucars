import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.scss'
import { Button } from '@material-ui/core'

function Navbar() {
    return (
        <div className="navbar">
            <div className="nav">
                <div className="logo">Vishnu Cars</div>
                <div className="nav__items">
                    <Button className="nav__link"><Link to="/">Home</Link></Button>
                    <Button className="nav__link">Locate Nearest point</Button>
                    <Button className="nav__link">Book Appointment</Button>
                    <Button className="nav__link">Contact</Button>
                </div>
            </div>
        </div>
    )
}

export default Navbar
