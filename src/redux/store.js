import { createStore } from 'redux';

// Estado inicial
const initialState = {
    funcionarios: [],
};

// Reducer para manipular os dados
function funcionarioReducer(state = initialState, action) {
    switch (action.type) {
        case 'ADICIONAR_FUNCIONARIO':
            return {
                ...state,
                funcionarios: [...state.funcionarios, action.payload],
            };
        default:
            return state;
    }
}

// Criação da store Redux
const store = createStore(funcionarioReducer);

export default store;
