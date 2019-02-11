import { ADD_TRANSACTION} from '../actions/actionsTypes'

const INITIAL_DATA = []

const TodoReducer = (state=INITIAL_DATA, action) => {
    switch (action.type){
        case ADD_TRANSACTION:
        return [
            ...state,{
                id: action.id,
                transactionData: action.transaction                
            }
        ]        
        default:
        return state
    }
}

export default TodoReducer