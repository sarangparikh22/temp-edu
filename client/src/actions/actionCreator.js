import { ADD_TRANSACTION } from './actionsTypes'

let TransactionId = 2

export const addTransaction = transaction => ({
    type: ADD_TRANSACTION,
    id: TransactionId++,
    transaction
})
