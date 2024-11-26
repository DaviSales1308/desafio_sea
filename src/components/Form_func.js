import React from "react";
import '../estilos/Form_func.css'
import seta_para_a_esquerda from './images/seta_para_a_esquerda.png'
import { Link } from 'react-router-dom'

export default function Listafunc() {
    return (
        <div className="Cad_func">
            <Link to='/'>
                <h2><img src={seta_para_a_esquerda}></img>Adicionar Funcionário(s)</h2>
            </Link>

            <div className="form">
                <div className="campo1">
                    <form>
                        <switch>O trabalhador está ativo ou inativo?</switch>
                    </form>
                </div>

                <div className="campo2">
                    <form className="form2">
                        <div className="part1">
                            <h4>Nome</h4>
                            <input placeholder="Nome"></input>
                            <h4>CPF</h4>
                            <input placeholder="CPF"></input>
                            <h4>RG</h4>
                            <input placeholder="RG"></input>
                        </div>
                        <div className="part2">
                            <h4>Sexo</h4>
                            <label>
                                <input type='radio' className="radio" name="sexo" value='Masculino'></input>
                                Masculino
                            </label>
                            <label>
                                <input type='radio' className="radio" name="sexo" value='Feminino'></input>
                                Feminino
                            </label>
                            <h4>Data de nascimento</h4>
                            <input type="date"></input>
                            <h4>Cargo</h4>
                            <label>
                                <select defaultValue='opcao'>
                                    <option value='estagiario'>Estágiario</option>
                                    <option value='trainee'>Trainee</option>
                                    <option value='opcao'>Alguma opção</option>
                                </select>
                            </label>
                        </div>
                    </form>
                </div>

                <div className="campo3">
                    <form>
                        <h4>Quais EPIs o trabalhador usa na atividade?</h4>
                        <label>
                            <input type='checkbox'></input>
                            O trabalhador não usa EPI.
                        </label>
                        <div className="atividade">
                            <h4>Selecione a atividade:</h4>
                            <label>
                                <select>
                                    <option value='op1'>Atividade 1</option>
                                    <option value='op2'>Atividade 2</option>
                                    <option value='op3'>Atividade 3</option>
                                </select>
                            </label>
                            <div className="EPI">
                                <h4>Selecione o EPI:</h4>
                                <label>
                                    <select className="epi1">
                                        <option value='epi1'>EPI 1</option>
                                        <option value='epi2'>EPI 2</option>
                                        <option value='epi3'>EPI 3</option>
                                    </select>
                                </label>
                                <h4>Informe o número do CA:</h4>
                                <label>
                                    <input placeholder="Digite o número" className="CA"></input>
                                </label>
                                <button>Adicionar EPI</button>
                            </div>
                        </div>
                        <button>Adicionar outra atividade</button>
                    </form>
                </div>

                <div className="campo4">
                    <form>
                        <h4>Adicione atestado de Saúde (opcional):</h4>
                        <label>
                            <input type='file'></input>
                        </label>
                    </form>
                </div>

                <input className="Salvar" type='submit' value='Salvar'></input>
            </div>
        </div>

    )
}