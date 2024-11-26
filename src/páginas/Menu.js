import React from "react";
import Progressbar from "../components/Progressbar";
import '../estilos/Menu.css'
import Infoblock from "../components/Infoblock";
import Listafunc from "../components/Listafunc";

export default function Menu() {
    return (
        <div>
            <Progressbar />
            <div className="blocks">
                <Infoblock />
                <Listafunc />
            </div>
        </div>
    )
}