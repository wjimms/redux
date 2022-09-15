import { types } from "../types"


export const sayHelloAction = (text) => {
    return {
        // type: "Say_Hello"
        type: types.Say_Hello,
        payload: text
    }
}
// sayHelloAction()

export const clearTextAction = (user) => {
    return {
        // type: "clear_text"
        type: types.Clear_text,
        payload: user
    }
}

export const createUserAction = (user) => {
    return{
        type: types.CREATE_USER,
        payload: user
    }
}
// clearTextAction() 

export const addNameAction = (name) => {
    return{
        type:types.ADD_NAME,
        payload:name,
      
    }

}
export const clearNameAction = (name) => {
    return{
        type:types.Clear_name,
        payload:name
    }
}
