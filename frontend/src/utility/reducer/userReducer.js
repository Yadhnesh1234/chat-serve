
const initialState={
    tableId:"",
}
const userReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'LOGIN':
        return { ...state, 
            tableId:action.tableId,
        };
      case 'LOGOUT':
        return {
          ...state,
          tableId:""
        };
      default:
        return state;
    }
  };
  
  export default userReducer;