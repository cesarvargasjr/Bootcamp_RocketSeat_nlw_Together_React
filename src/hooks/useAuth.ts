import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';

// FUNÇÃO COMEÇANDO COM "use" SIGINIFICA QUE É UM HOOKS, OU SEJA, FUNÇÕES USADA APENAS NO ESCOPO DO COMPONENTE
// OBJETIVO É PEGAR OS DADOS DO CONTEXTO E RETORNAR ESTES DADOS 
export function useAuth(){
    const value = useContext (AuthContext)

    return value;
}