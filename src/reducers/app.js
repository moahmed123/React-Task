import constants from '../actions/constants'

const initialState = {
  initialized: false, 
}


export default (state = initialState, action) => {
    switch (action.type) {
        case constants.DATA_USER:
            return {
            ...state,
            dataUsers: action.usersData,    
            }

        case constants.SORT_DATA_USER:
            return {
              ...state,
              dataSortUsers: action.usersSortData,    
            }
  
        default:
            return state
    }
  }