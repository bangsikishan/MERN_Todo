import { createContext, useReducer } from "react";

export const TodoContext = createContext();

const todoReducer = (state, action) => {
    switch(action.type) {
        case 'GET_WORKOUT':
            return {
                todos: action.payload
            };
        
        case 'ADD_WORKOUT':
            return {
                todos: [action.payload, ...state.todos]
            };
    
        default:
            return state;
    }
}


const TodoContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(todoReducer, {
        todos: null
    });
    console.log(state);

    return (
        <TodoContext.Provider value={{...state, dispatch}}>
            { children }
        </TodoContext.Provider>
    );
}
 
export default TodoContextProvider;