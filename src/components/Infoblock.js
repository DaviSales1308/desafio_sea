import React from "react";
import profile from './images/profile.png'
import '../estilos/Infoblock.css'

export default function Infoblock() {
    return (
        <div className="infoblock">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget neque vitae tortor elementum dapibus at a urna.
                Morbi quis enim non tortor tempor efficitur. Sed vulputate suscipit porta. Nullam dictum ex odio.
                Sed scelerisque lacus eu lorem egestas, rhoncus rhoncus libero dictum. Donec ullamcorper arcu in ligula tincidunt rutrum.
                Mauris vel posuere dolor, ac lacinia erat. Ut sit amet diam sit amet lectus ullamcorper consectetur. Nunc vehicula suscipit ornare.
                Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;
                Quisque non ante tortor. Fusce hendrerit lectus magna, eget rutrum augue pellentesque vitae.
                Donec ut lacus auctor, tincidunt metus sit amet, lacinia nisl. Nulla vitae risus gravida neque viverra elementum vitae tempus sapien.
                Vivamus odio erat, semper convallis ornare non, dignissim eu nibh.
            </p>
            <img src={profile}></img>
        </div>
    )
}