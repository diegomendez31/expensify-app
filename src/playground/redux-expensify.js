import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

// ADD_EXPENSE
const addExpense = (
    { 
        description = '', 
        note='', 
        amount=0, 
        createAt=0
    } = {}
    ) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description,
        note,
        amount,
        createAt
    }
});
// REMOVE_EXPENSE (This is action)
const removeExpense = ({ id }={}) => ({
    type: 'REMOVE_EXPENSE',
    id
});

// EDIT_EXPENSE
const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});

//SET_TEXT_FILTER
const setTextFilter = (text  ='') => ({
    type: 'SET_TEXT_FILTER',
    text
});

//SORT_BY_DATE
const sortByDate = () => ({
    type: 'SORT_BY_DATE'
});

//SORT_BY_AMOUNT
const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT'
});

//SET_START_DATE
const setStartDate = (startDate = undefined) => ({
    type: 'SET_START_DATE',
    startDate
});

//SET_END_DATE
const setEndDate = (endDate = undefined) => ({
    type: 'SET_END_DATE',
    endDate
});

// EXpenser reducer
// This shouldnt change the result e.g. array push change the array but array concat gives a new array
const expensesReducerDefaultState = [];
const expensesReducer = (state = expensesReducerDefaultState, action) => {
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

// Filters reducer
const filtersReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch (action.type){
        case 'SET_TEXT_FILTER':
            return {
                ...state,
                text: action.text
            }
        case 'SORT_BY_DATE':
            return {
                ...state,
                sortBy: 'date'
            }
        case 'SORT_BY_AMOUNT':
            return {
                ...state,
                sortBy: 'amount'
            }
        case 'SET_START_DATE':
            return {
                ...state,
                startDate: action.startDate
            }
        case 'SET_END_DATE':
            return {
                ...state,
                endDate: action.endDate
            }
        default: 
            return state;
    }
};

// Get the visible expenses
const getVisibleExpenses = (expenses, {text, sortBy, startDate, endDate}) => {
    return expenses.filter((expense) => {
        const startDateMatch = typeof startDate !== 'number' || expense.createAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || expense.createAt <= endDate;
        const textMatch = expense.description.toLowerCase().includes(text);
        return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b) => {
        if(sortBy === 'date'){
            return a.createAt < b.createAt ? 1 : -1;
        }else if(sortBy === 'amount'){
            return a.amount < b.amount ? 1 : -1;
        }
    });
};

// Timestamp
// January 1 1970 (unix epoch)

//Store creation
const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer
    })
);

store.subscribe( () => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses);
});


const expenseOne = store.dispatch(addExpense({description: 'rent', amount: 600, createAt: 1000}));
const expenseTwo  = store.dispatch(addExpense({description: 'coffee', amount: 100, createAt: -1000}));

// store.dispatch(removeExpense({id: expenseOne.expense.id}));
// store.dispatch(editExpense(expenseTwo.expense.id, {amount:500}));

//store.dispatch(setTextFilter('rent'));

store.dispatch(sortByAmount());
// store.dispatch(sortByDate());

//store.dispatch(setStartDate(0));
//store.dispatch(setEndDate(999));

const demoState = {
    expenses: [{
        id: 'aksdnfaklsdf',
        description: 'January rent',
        note: 'This was the payment',
        amount: 54500,
        createAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount', //date or amount
        startDate: undefined,
        endDate: undefined
    }
};



