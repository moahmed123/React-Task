/* eslint-disable no-unused-vars */
import constants from './constants'
import users from '../data/users.json'

export const app = () => (dispatch) => {    
   
  dispatch({ 
      type: constants.DATA_USER,
      usersData: users
    })
}

export const sortFollowing = () => (dispatch) => {  
    const usersSort = users
    usersSort.sort(function(a, b) { 
        return a.following.length - b.following.length;
     });  
      console.log(usersSort);
     
    dispatch({ 
        type: constants.SORT_DATA_USER,
        usersSortData: usersSort
      })
  }

  export const Delete = (userData) => (dispatch) => {  
     dispatch({ 
        type: constants.DATA_USER,
        usersData: userData
      })   
  } 
  //remove interests
  export const removeInterests = (data) => (dispatch) => {    
    dispatch({ 
       type: constants.DATA_USER,
       usersData: data
     })   
 }