import React from 'react'
import { Link } from 'react-router-dom'
import buttonImg from '../assets/images/add.png'

export default function AddButton() {
    return (
        <Link to="/exercise/new">
           <img src={buttonImg} className="Fitness-Add"/>
        </Link>
    )
}
