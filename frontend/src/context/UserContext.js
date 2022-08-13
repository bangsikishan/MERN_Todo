import { createContext, useEffect, useReducer } from "react";

export const UserContext = createContext();

const userReducer = (state, action) => {
    switch(action.type) {
        case 'CREATE_USER':
            return {
                user: action.payload
            };

        default:
            return state;
    }
}


const UserContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(userReducer, {
        user: null
    });

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user'));

        if(user) {
            dispatch({type: 'CREATE_USER', payload: user});
        }
    }, []);

    console.log(state);

    return (
        <UserContext.Provider value={{...state, dispatch}}>
            { children }
        </UserContext.Provider>
    );
}
 
export default UserContextProvider;