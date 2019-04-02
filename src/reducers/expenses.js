

// EXpenser reducer
// This shouldnt change the result e.g. array push change the array but array concat gives a new array
const expensesReducerDefaultState = [];
export default (state = expensesReducerDefaultState, action) => {
    switch (action.type){
        case 'ADD_EXPENSE':
            return [...state, action.expense] // array spread operator
        case 'REMOVE_EXPENSE':
            return state.filter(({id}) => {
                return id !== action.id;
            });
        case 'EDIT_EXPENSE': 
            return state.map((expense) => {
                if(expense.id === action.id){
                    return {
                        ...expense, //Object spread operator "babel config"
                        ...action.updates
                    }
                }else{
                    return expense;
                }
            });
        default: 
            return state;
    }
};
