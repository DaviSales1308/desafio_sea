import React from "react";
import '../estilos/Sidebar.css'
import hotel_9887098 from './images/hotel_9887098.png'
import bell_ring_10856791 from './images/bell_ring_10856791.png'
import pencil_2606471 from './images/pencil_2606471.png'
import databases_13815747 from './images/databases_13815747.png'
import clock_561146 from './images/clock_561146.png'
import person_13924070 from './images/person_13924070.png'
import { Link } from 'react-router-dom'


export default function Sidebar() {
    return (
        <div className="sidebar">
            <Link to='/Em_breve' className='btn_sb'>
                <img src={hotel_9887098}></img>
            </Link>
            <Link to='/' className='btn_sb'>
                <img src={pencil_2606471}></img>
            </Link>
            <Link to='/Em_breve' className='btn_sb'>
                <img src={databases_13815747}></img>
            </Link>
            <Link to='/Em_breve' className='btn_sb'>
                <img src={bell_ring_10856791}></img>
            </Link>
            <Link to='/Em_breve' className='btn_sb'>
                <img src={clock_561146}></img>
            </Link>
            <Link to='/Em_breve' className='btn_sb'>
                <img src={person_13924070}></img>
            </Link>
        </div>
    )
}