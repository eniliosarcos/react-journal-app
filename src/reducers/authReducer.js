import { types } from "../types/types";

/*
{
    uid: asdmhjbasdhj12341,
    name: 'Enilio'
}
*/


export const authreducer = (state = {}, action) => {

    switch (action.type) {

        case types.login:

            return {
                uid: action.payload.uid,
                name: action.payload.displayName
            }
            
        case types.logout:

            return { }
    
        default:
            return state;
    }
}