const initialState = [];

export default function funcionariosReducer(state = initialState, action) {
    switch (action.type) {
        case "ADICIONAR_FUNCIONARIO":
            return [...state, action.payload];
        case "EXCLUIR_FUNCIONARIO":
            return state.filter((func) => func.cpf !== action.payload);
        case "EDITAR_FUNCIONARIO":
            return state.map((func) =>
                func.cpf === action.payload.cpf ? action.payload : func
            );
        default:
            return state;
    }
}
