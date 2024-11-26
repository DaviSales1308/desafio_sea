import React from "react";
import { Link } from "react-router-dom";
import hotel_9887098 from './images/hotel_9887098.png'

export default function Progressbar() {
    return (
        <div className="progress-bar">
            <ul>
                <li className='step'>
                    <Link to='/'>
                        <img src={hotel_9887098}></img>
                    </Link>
                    <p>Item 1</p>
                </li>
                <li className='step'>
                    <Link to='/Em_breve' >
                        <img src={hotel_9887098}></img>
                    </Link>
                    <p>Item 2</p>
                </li>
                <li className='step'>
                    <Link to='/Em_breve' >
                        <img src={hotel_9887098}></img>
                    </Link>
                    <p>Item 3</p>
                </li>
                <li className='step'>
                    <Link to='/Em_breve'>
                        <img src={hotel_9887098}></img>
                    </Link>
                    <p>Item 4</p>
                </li>
                <li className='step'>
                    <Link to='/Em_breve'>
                        <img src={hotel_9887098}></img>
                    </Link>
                    <p>Item 5</p>
                </li>
                <li className='step'>
                    <Link to='/Em_breve'>
                        <img src={hotel_9887098}></img>
                    </Link>
                    <p>Item 6</p>
                </li>
                <li className='step'>
                    <Link to='/Em_breve'>
                        <img src={hotel_9887098}></img>
                    </Link>
                    <p>Item 7</p>
                </li>
                <li className='step'>
                    <Link to='/Em_breve'>
                        <img src={hotel_9887098}></img>
                    </Link>
                    <p>Item 8</p>
                </li>
                <li className='step'>
                    <Link to='/Em_breve'>
                        <img src={hotel_9887098}></img>
                    </Link>
                    <p>Item 9</p>
                </li>
            </ul>
        </div>
    )
}