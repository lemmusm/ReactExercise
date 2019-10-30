import React from 'react'
import { Link } from 'react-router-dom'
import buttonImg from '../assets/images/add.png'

const AddButton = () => (
    <Link to="/exercise/new">
       <img src={buttonImg} className="Fitness-Add" alt="exercise"/>
    </Link>
)

export default AddButton