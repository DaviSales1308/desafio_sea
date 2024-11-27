export const adicionarFuncionario = (funcionario) => ({
    type: "ADICIONAR_FUNCIONARIO",
    payload: funcionario,
});

export const excluirFuncionario = (cpf) => ({
    type: "EXCLUIR_FUNCIONARIO",
    payload: cpf,
});

export const editarFuncionario = (funcionarioAtualizado) => ({
    type: "EDITAR_FUNCIONARIO",
    payload: funcionarioAtualizado,
});
