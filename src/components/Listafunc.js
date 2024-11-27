import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "../estilos/Listafunc.css";

export default function Listafunc() {
    const funcionarios = useSelector((state) => state.funcionarios);
    const dispatch = useDispatch();
    const navigate = useNavigate(); 
    const [filtroAtivo, setFiltroAtivo] = useState(null);
    const [menuAtivo, setMenuAtivo] = useState(null); // Controle do menu dropdown

    const funcionariosFiltrados = filtroAtivo === null
        ? funcionarios
        : funcionarios.filter((func) => func.status === (filtroAtivo ? "Ativo" : "Inativo"));

    const handleFiltroAtivo = () => setFiltroAtivo(true);
    const limparFiltros = () => setFiltroAtivo(null);

    const handleExcluir = (cpf) => {
        dispatch({ type: "EXCLUIR_FUNCIONARIO", payload: cpf });
    };

    const handleEditar = (cpf) => {
        navigate(`/Cad_func/${cpf}`);
    };


    // Toggle do menu dropdown
    const toggleMenu = (cpf) => {
        setMenuAtivo(menuAtivo === cpf ? null : cpf); // Alterna entre mostrar/ocultar o menu
    };

    // Função para fechar o menu ao clicar fora
    React.useEffect(() => {
        const closeMenuOnClickOutside = (event) => {
            if (!event.target.closest(".menu")) {
                setMenuAtivo(null);
            }
        };

        document.addEventListener("click", closeMenuOnClickOutside);
        return () => document.removeEventListener("click", closeMenuOnClickOutside);
    }, []);

    return (
        <div className="lista-func">
            <h2>Funcionário(s)</h2>
            <div className="corpo">
                <Link to="Cad_func">
                    <button className="add">+ Adicionar Funcionário</button>
                </Link>
                <div className="filter-buttons">
                    <button className="show" onClick={handleFiltroAtivo}>
                        Ver apenas ativos
                    </button>
                    <button className="clean" onClick={limparFiltros}>
                        Limpar filtros
                    </button>
                </div>
                <div className="func-list">
                    {funcionariosFiltrados.length > 0 ? (
                        funcionariosFiltrados.map((funcionario) => (
                            <div
                                key={funcionario.cpf}
                                className={`func-item ${funcionario.status === "Inativo" ? "inativo" : ""}`}
                            >
                                <div className="info">
                                    <div className="name">{funcionario.nome}</div>
                                    <div className="cpf">{funcionario.cpf}</div>
                                </div>
                                <div className="status">
                                    {funcionario.status}
                                </div>
                                <div className="cargo">
                                    {funcionario.cargo}
                                </div>
                                <div className="menu">
                                    <button
                                        className="dropdown-btn"
                                    
                                        onClick={() => toggleMenu(funcionario.cpf)}
                                    >
                                        ...
                                    </button>
                                    {menuAtivo === funcionario.cpf && (
                                        <div className="dropdown-content">
                                            <button onClick={() => handleEditar(funcionario.cpf)}>Editar</button>
                                            <button onClick={() => handleExcluir(funcionario.cpf)}>Excluir</button>
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))
                    ) : (
                        <p>Nenhum funcionário encontrado</p>
                    )}
                </div>
            </div>
        </div>
    );
}