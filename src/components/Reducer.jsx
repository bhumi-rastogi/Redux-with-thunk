const startingState = {
    usersList: [],
    errors: '',
};
  
const Reducer = (state = startingState, action) => {
    switch (action.type) {
        case "GET_DATA":
            return { usersList: action.payload, errors: '' };
  
        case "ERRORS":
            return { usersList: [], errors: action.payload };
  
        default:
            return state;
    }
};
  
export default Reducer;