export const ERRORS = "ERRORS";

export const displayErrors = (errors) => (
    { 
        type: ERRORS, 
        payload: errors,
    }
);

export const GET_DATA = "GET_DATA";

export const getUsersData = (usersList) => (
    { 
        type: GET_DATA, 
        payload: usersList,
    }
);


