import React, { useState } from "react";
import "../estilos/Form_func.css";
import seta_para_a_esquerda from "./images/seta_para_a_esquerda.png";
import { useDispatch } from "react-redux"; // Importando useDispatch
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

export default function Formfunc() {
    const [formData, setFormData] = useState({
        nome: "",
        cpf: "",
        rg: "",
        sexo: "",
        dataNascimento: "",
        cargo: "",
        status: "",
        atividades: [],
        epi: [],
        atestadoSaude: null,
    });

    const navigate = useNavigate();
    const [atividades, setAtividades] = useState([{ id: 1 }]); // Inicializa com um formulário de atividade
    const [esconderCampos, setEsconderCampos] = useState(false); // Estado para esconder os campos
    const dispatch = useDispatch(); // Usar dispatch para disparar a ação

    const adicionarAtividade = () => {
        const novaAtividade = { id: atividades.length + 1 };
        setAtividades([...atividades, novaAtividade]);
    };

    const excluirAtividade = (id) => {
        setAtividades(atividades.filter((atividade) => atividade.id !== id));
    };

    const handleCheckboxChange = () => {
        setEsconderCampos(!esconderCampos);
    };

    const handleInputChange = (e) => {
        const { name, value, type, files } = e.target;
        if (type === "file") {
            setFormData({ ...formData, [name]: files[0] }); // Salva o arquivo
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Criar um novo funcionário e enviar para o Redux
        dispatch({ type: 'ADICIONAR_FUNCIONARIO', payload: formData });

        // Resetar o formulário
        setFormData({
            nome: "",
            cpf: "",
            rg: "",
            sexo: "",
            dataNascimento: "",
            cargo: "",
            status: "",
            atividades: [],
            epi: [],
            atestadoSaude: null,
        });
        setAtividades([{ id: 1 }]);
        navigate('/');
    };  

    return (
        <div className="Cad_func">
            <Link to="/">
                <h2>
                    <img src={seta_para_a_esquerda} alt="Voltar" />
                    Adicionar Funcionário(s)
                </h2>
            </Link>

            <div className="form">
                <form onSubmit={handleSubmit}>
                    {/* Campos de formulário */}
                    <div className="campo1">
                        <label>
                            <strong>O trabalhador está ativo ou inativo?</strong>
                        </label>
                        <div>
                            <label>
                                <input
                                    type="radio"
                                    name="status"
                                    value="Ativo"
                                    onChange={handleInputChange}
                                />{" "}
                                Ativo
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    name="status"
                                    value="inativo"
                                    onChange={handleInputChange}
                                />{" "}
                                Inativo
                            </label>
                        </div>
                    </div>

                    <div className="campo2">
                        <div className="part1">
                            <h4>Nome</h4>
                            <input
                                placeholder="Nome"
                                name="nome"
                                value={formData.nome}
                                onChange={handleInputChange}
                            />
                            <h4>CPF</h4>
                            <input
                                placeholder="CPF"
                                name="cpf"
                                value={formData.cpf}
                                onChange={handleInputChange}
                            />
                            <h4>RG</h4>
                            <input
                                placeholder="RG"
                                name="rg"
                                value={formData.rg}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="part2">
                            <h4>Sexo</h4>
                            <label>
                                <input
                                    type="radio"
                                    className="radio"
                                    name="sexo"
                                    value="Masculino"
                                    onChange={handleInputChange}
                                />{" "}
                                Masculino
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    className="radio"
                                    name="sexo"
                                    value="Feminino"
                                    onChange={handleInputChange}
                                />{" "}
                                Feminino
                            </label>
                            <h4>Data de nascimento</h4>
                            <input
                                type="date"
                                name="dataNascimento"
                                value={formData.dataNascimento}
                                onChange={handleInputChange}
                            />
                            <h4>Cargo</h4>
                            <select
                                name="cargo"
                                value={formData.cargo}
                                onChange={handleInputChange}
                            >
                                <option value="" disabled>
                                    Selecione
                                </option>
                                <option value="estagiario">Estagiário</option>
                                <option value="trainee">Trainee</option>
                                <option value="gerente">Gerente</option>
                            </select>
                        </div>
                    </div>

                    <div className="campo3">
                        <form>
                            <h4>Quais EPIs o trabalhador usa na atividade?</h4>
                            <label>
                                <input
                                    type="checkbox"
                                    onChange={handleCheckboxChange}
                                    checked={esconderCampos}
                                />
                                O trabalhador não usa EPI.
                            </label>

                            {/* Exibir os campos se o checkbox NÃO estiver marcado */}
                            {!esconderCampos && (
                                <>
                                    {atividades.map((atividade, index) => (
                                        <div key={atividade.id} className="atividade">
                                            <label>
                                                <h4>Selecione a atividade:</h4>
                                                <select>
                                                    <option value="op1">Atividade 1</option>
                                                    <option value="op2">Atividade 2</option>
                                                    <option value="op3">Atividade 3</option>
                                                </select>
                                            </label>
                                            <div className="EPI">
                                                <h4>Selecione o EPI:</h4>
                                                <select className="epi1">
                                                    <option value="epi1">EPI 1</option>
                                                    <option value="epi2">EPI 2</option>
                                                    <option value="epi3">EPI 3</option>
                                                </select>
                                                <h4>Informe o número do CA:</h4>
                                                <input placeholder="Digite o número" className="CA" />
                                                <button type="button">Adicionar EPI</button>
                                            </div>

                                            {/* Botão para excluir atividade */}
                                            <button
                                                type="button"
                                                className="Excluir"
                                                onClick={() => excluirAtividade(atividade.id)}
                                            >
                                                Excluir Atividade
                                            </button>
                                        </div>
                                    ))}

                                    {/* Botão para adicionar nova atividade */}
                                    <button type="button" onClick={adicionarAtividade}>
                                        Adicionar outra atividade
                                    </button>
                                </>
                            )}
                        </form>
                    </div>


                    {!esconderCampos && (
                        <div className="campo4">
                            <form>
                                <h4>Adicione atestado de Saúde (opcional):</h4>
                                <input type="file" />
                            </form>
                        </div>
                    )}
                  
                        <button type="submit" className="Salvar">
                            Salvar
                        </button>
                   
                </form>
            </div>
        </div>
    );
}
