import { configureStore } from '@reduxjs/toolkit';
import funcionariosReducer from './reducer';

export const store = configureStore({
    reducer: {
        funcionarios: funcionariosReducer, // Adicione outros reducers aqui, se necessário
    },
});
