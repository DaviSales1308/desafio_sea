import React from "react";
import Progressbar from "../components/Progressbar";
import '../estilos/Menu.css'
import Infoblock from "../components/Infoblock";
import Form_func from '../components/Form_func'

export default function Menu() {
    return (
        <>
            <Progressbar />
            <div className="blocks">
                <Infoblock />
                <Form_func />
            </div>
        </>
    )
}