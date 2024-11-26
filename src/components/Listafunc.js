import React from "react";
import '../estilos/Listafunc.css'
import { Link } from 'react-router-dom'

export default function Listafunc() {
    return (
        <div className="lista-func">
            <h2>Funcionário(s)</h2>
            <Link to='Cad_func'>
                <button className="add">+ Adicionar Funcionário</button>
            </Link>
            <div className="filter-buttons">
                <button className="show">Ver apenas ativos</button>
                <button className="clean">Limpar filtros</button>
            </div>
            <div className="">
                Lista
            </div>
        </div>
    )
}